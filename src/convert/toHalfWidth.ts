//  全角 to 半角
export function toHalfWidth(value: string) {
  value = value.replace(/[Ａ-Ｚａ-ｚ０-９]/g, function (s: string) {
    return String.fromCharCode(s.charCodeAt(0) - 0xfee0)
  })
  return value
}
