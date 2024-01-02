/**
 * 連続した数値の配列を生成する
 * python like range function
 *
 * @example
 * ```ts
 * // prints [0, 1, 2, 3, 4]
 * range(5)
 *
 * // prints [0, 1, 2, 3, 4]
 * range(0, 5)
 *
 * // prints [4, 5, 6]
 * range(4, 7)
 *
 * // prints [0, 1, 2, 3, 4]
 * range(0, 5, 1)
 *
 * // prints [0, 2, 4, 6, 8]
 * range(0, 10, 2)
 * ```
 *
 * @param start 開始値, この値だけを指定した場合は0から開始する <br /> Start value, if only this value is specified, it starts from 0
 * @param end 終了値, この値-1まで生成する <br /> End value, generate up to this value-1
 * @param step ステップ数, この値ずつ増加する <br /> Step number, increase by this value
 * @returns 数値の入った配列 <br /> Array of numbers
 */
export function range(start: number, end?: number, step: number = 1) {
  const output = []
  if (end === undefined) {
    end = start
    start = 0
  }
  for (let i = start; i < end; i += step) {
    output.push(i)
  }
  return output
}
