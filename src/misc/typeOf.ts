export function typeOf(v: any) {
  return v != v
    ? 'nan'
    : v === Infinity || v === -Infinity
    ? 'infinity'
    : Object.prototype.toString.call(v).slice(8, -1).toLowerCase()
}
