import { describe, expect, test } from 'vitest'
import { isNumber, isNumbers } from '..'

describe('is-number', () => {
  test('isNumber', async () => {
    expect(isNumber(1)).toBe(true)
    expect(isNumber(NaN)).toBe(false)
    expect(isNumber('kyon')).toBe(false)
    expect(isNumber([1])).toBe(false)
  })
  test('isNumbers', async () => {
    expect(isNumbers([1, 2, 3])).toBe(true)
    expect(isNumbers(['mikuru', 'nagato'])).toBe(false)
    expect(isNumbers('itsuki')).toBe(false)
  })
})
