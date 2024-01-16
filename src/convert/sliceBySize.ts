/**
 * 指定サイズで配列を切り分ける
 * Carve array with specified size
 *
 * @example
 * ```ts
 * const arr = [0, 1, 2, 3, 4, 5, 6]
 * sliceBySize(arr, 2) // [[0, 1], [2, 3], [4, 5], [6]]
 * ```
 * @param arr 変換元の配列 <br /> array to convert
 * @param size 切り分けサイズ <br /> size to carve
 * @returns
 */
export function sliceBySize<T>(arr: T[], size: number): T[][] {
  return arr.flatMap((_, i, a) => (i % size ? [] : [a.slice(i, i + size)]))
}
