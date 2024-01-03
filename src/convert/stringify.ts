/**
 * なにかを文字列化する(bigint supported JSON.stringify)
 * String something (bigint supported JSON.stringify)
 *
 * @example
 * ```ts
 * // print: {"name":"haruhi","num":"8"}
 * stringify({ name: 'haruhi', num: BigInt(8) })
 * ```
 * @param obj 文字列化する値 <br /> value to stringify
 * @param replacer 置換関数 or 許可するキー名の配列 <br /> replace function or array of allowed key names
 * @param space JSON.stringifyのspace <br /> space of JSON.stringify
 * @returns
 */
export function stringify(
  obj: any,
  replacer?: (string | number)[] | null | undefined,
  space?: string | number | undefined
): string

export function stringify(
  obj: any,
  replacer?: ((key: string, value: any) => any) | undefined,
  space?: string | number | undefined
): string

export function stringify(
  obj: any,
  replacer?: ((key: string, value: any) => any) | ((string | number)[] | null) | undefined,
  space?: string | number | undefined
): string {
  return JSON.stringify(obj, genReplacer(replacer), space)
}

function genReplacer(
  replacer?: ((key: string, value: any) => any) | ((string | number)[] | null) | undefined
) {
  if (typeof replacer === 'function') {
    return (key: string, value: any) => {
      const replacedValue = replacer(key, value)
      return defaultReplacer(key, replacedValue)
    }
  } else if (Array.isArray(replacer)) {
    return (key: string, value: any) => {
      if (key !== undefined && key !== '' && !replacer.includes(key)) {
        return undefined
      }
      return defaultReplacer(key, value)
    }
  }

  return defaultReplacer
}

function defaultReplacer(key: string, value: any) {
  if (typeof value === 'bigint') {
    return value.toString()
  }
  return value
}
