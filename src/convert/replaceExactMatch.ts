type ReplaceOptions = {
  input: string
  target: string
  replacement: string
}

export function replaceExactMatch({ input, target, replacement }: ReplaceOptions): {
  result: string
  count: number
} {
  const escapedTarget = target.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
  const regex = new RegExp(`\\b${escapedTarget}\\b`, 'g')

  const matches = input.match(regex)
  const count = matches ? matches.length : 0

  const result = input.replace(regex, replacement)

  return { result, count }
}
