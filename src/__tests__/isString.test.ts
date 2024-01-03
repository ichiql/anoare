import { describe, expect, test } from 'vitest'
import { isString, isStrings } from '..'

describe('is-string', () => {
  test('isString', async () => {
    expect(isString('kyon')).toBe(true)
    expect(isString(1)).toBe(false)
    expect(isString([1])).toBe(false)
  })
  test('isStrings', async () => {
    expect(isStrings(['mikuru', 'nagato'])).toBe(true)
    expect(isStrings('itsuki')).toBe(false)
    expect(isStrings([1])).toBe(false)
  })
})
