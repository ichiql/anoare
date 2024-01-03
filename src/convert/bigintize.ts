import { typeOf } from '..'

/**
 * string や number を bigint に変換
 * Convert string, number, etc... to bigint
 *
 * @example
 * ```ts
 * bigintize('123') // BigInt(123)
 * bigintize(123) // BigInt(123)
 * bigintize('$1,000') // BigInt(1000)
 * bigintize(NaN) // throw error
 * bigintize('invalid value') // throw error
 * bigintize('invalid value', BitInt(1)) // BitInt(1)
 * ```
 * @param v 変換元の値 <br /> value to convert
 * @param d 変換に失敗した場合に返す値 <br /> value to return if conversion fails
 * @returns
 */
export function bigintize(v: unknown, d?: bigint): bigint {
  try {
    switch (typeOf(v)) {
      case 'number':
        return BigInt(v as number)
      case 'string': {
        const pd = (v as string).replace(/[\\¥$%, ]/g, '')
        return BigInt(pd)
      }
      case 'bigint':
        return v as bigint
      default:
        throw new Error('invalid value')
    }
  } catch (e) {
    if (d === undefined) throw e
    return d
  }
}
