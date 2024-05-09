export enum SplitAndPadPosition {
  Start = 'start',
  End = 'end',
}

export function splitAndPad(
  input: string,
  maxNum: number,
  paddingChar: string = '',
  pos: SplitAndPadPosition = SplitAndPadPosition.End
): string[] {
  const chunks: string[] = input.split('')
  if (chunks.length >= maxNum) return chunks.slice(0, maxNum)

  const paddingNum = maxNum - chunks.length

  if (pos === SplitAndPadPosition.End) {
    return chunks.concat(Array(paddingNum).fill(paddingChar))
  } else {
    return Array(paddingNum).fill(paddingChar).concat(chunks)
  }
}
