import { describe, expect, test } from 'vitest'
import { isNaN, isNaNs } from '..'

describe('is-nan', () => {
  test('isNaN', async () => {
    expect(isNaN(NaN)).toBe(true)
    expect(isNaN(1)).toBe(false)
    expect(isNaN('kyon')).toBe(false)
    expect(isNaN([1])).toBe(false)
    expect(isNaN({})).toBe(false)
  })
  test('isNaNs', async () => {
    expect(isNaNs([NaN, NaN])).toBe(true)
    expect(isNaNs([1, 2, 3])).toBe(false)
    expect(isNaNs(['mikuru', 'nagato'])).toBe(false)
    expect(isNaNs('itsuki')).toBe(false)
  })
})
