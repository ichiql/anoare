import { typeOf } from '..'

const MIN_NUM = BigInt(Number.MIN_SAFE_INTEGER)
const MAX_NUM = BigInt(Number.MAX_SAFE_INTEGER)

/**
 * string や bitint などを number に変換する。
 * Convert string, bitint, etc... to number.
 *
 * @example
 * ```ts
 * numberize('123') // 123
 * numberize(BigInt(123)) // 123
 * numberize('$1,000') // 1000
 * numberize('invalid value') // NaN
 * numberize('invalid value', 1) // 1
 * ```
 * @param v 変換元の値 <br /> value to convert
 * @param d 変換に失敗した場合に返す値 <br /> value to return if conversion fails
 * @returns
 */
export const numberize = (v: unknown, d?: number): number => {
  const def = d ?? Number.NaN
  switch (typeOf(v)) {
    case 'number':
      return v as number
    case 'nan':
      return def
    case 'string': {
      const pd = (v as string).replace(/[\\¥$%, ]/g, '')
      return pd === '' ? def : Number(pd)
    }
    case 'bigint':
      if ((v as bigint) < MIN_NUM) return Number.MIN_SAFE_INTEGER
      if ((v as bigint) > MAX_NUM) return Number.MAX_SAFE_INTEGER
      try {
        return parseInt((v as bigint).toString())
      } catch (e) {
        return def
      }
    default:
      return def
  }
}
