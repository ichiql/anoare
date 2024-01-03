import { describe, expect, test } from 'vitest'
import { isUndefined, isUndefineds } from '..'

describe('is-undefined', () => {
  test('isUndefined', async () => {
    expect(isUndefined(undefined)).toBe(true)
    expect(isUndefined(null)).toBe(false)
    expect(isUndefined('kyon')).toBe(false)
    expect(isUndefined(1)).toBe(false)
    expect(isUndefined([1])).toBe(false)
  })
  test('isUndefineds', async () => {
    expect(isUndefineds([undefined, undefined])).toBe(true)
    expect(isUndefineds([undefined, null, 'kyon'])).toBe(false)
    expect(isUndefineds(['mikuru', 'nagato'])).toBe(false)
    expect(isUndefineds('itsuki')).toBe(false)
    expect(isUndefineds([1])).toBe(false)
  })
})
