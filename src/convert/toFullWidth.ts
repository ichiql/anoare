// 半角 to 全角
export function toFullWidth(value: string) {
  value = value.replace(/[A-Za-z0-9]/g, function (s) {
    return String.fromCharCode(s.charCodeAt(0) + 0xfee0)
  })
  return value
}
