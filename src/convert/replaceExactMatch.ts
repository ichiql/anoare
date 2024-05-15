type ReplaceOptions = {
  input: string
  target: string
  replacement: string
}

function escapeRegExp(str: string): string {
  return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&')
}

export function replaceExactMatch({ input, target, replacement }: ReplaceOptions): {
  result: string
  count: number
} {
  const regex = new RegExp(`\\b${escapeRegExp(target)}\\b`, 'gm')

  const matches = input.match(regex)
  const count = matches ? matches.length : 0

  const result = input.replace(regex, replacement)

  return { result, count }
}
