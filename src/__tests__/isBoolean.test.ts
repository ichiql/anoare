import { describe, expect, test } from 'vitest'
import { isBoolean, isBooleans } from '..'

describe('is-boolean', () => {
  test('isBoolean', async () => {
    expect(isBoolean(true)).toBe(true)
    expect(isBoolean(false)).toBe(true)
    expect(isBoolean('kyon')).toBe(false)
    expect(isBoolean(0)).toBe(false)
    expect(isBoolean(1)).toBe(false)
    expect(isBoolean([1])).toBe(false)
    expect(isBoolean({})).toBe(false)
  })
  test('isBooleans', async () => {
    expect(isBooleans([true, false])).toBe(true)
    expect(isBooleans(['mikuru', 'nagato'])).toBe(false)
    expect(isBooleans('itsuki')).toBe(false)
    expect(isBooleans([1])).toBe(false)
  })
})
