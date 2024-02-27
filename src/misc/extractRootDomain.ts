import { isString } from '..'

export function extractRootDomain(url: string | URL): string {
  if (isString(url)) url = new URL(url)

  const splitted = url.hostname.split('.')
  const len = splitted.length - 1

  if (len === 0) return splitted[0]

  const suffix1 = splitted[len - 1]
  const suffix2 = splitted[len]

  const isSecondLevel = len >= 2 && (suffix1 + suffix2).length <= 5
  return (isSecondLevel ? splitted[len - 2] + '.' : '') + suffix1 + '.' + suffix2
}
