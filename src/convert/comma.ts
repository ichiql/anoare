export function comma(num: number) {
  const s = num.toString().split('.')
  let ret = s[0].replace(/(\d)(?=(\d\d\d)+(?!\d))/g, '$1,')
  if (s.length > 1) ret += '.' + s[1]
  return ret
}
