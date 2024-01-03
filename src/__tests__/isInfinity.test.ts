import { describe, expect, test } from 'vitest'
import { isInfinity, isInfinitys } from '..'

describe('is-infinity', () => {
  test('isInfinity', async () => {
    expect(isInfinity(Infinity)).toBe(true)
    expect(isInfinity(Math.pow(10, 1000))).toBe(true)
    expect(isInfinity(1)).toBe(false)
    expect(isInfinity('kyon')).toBe(false)
    expect(isInfinity([1])).toBe(false)
    expect(isInfinity({})).toBe(false)
  })
  test('isInfinitys', async () => {
    expect(isInfinitys([Infinity, Infinity])).toBe(true)
    expect(isInfinitys([1, 2, 3])).toBe(false)
    expect(isInfinitys(['mikuru', 'nagato'])).toBe(false)
    expect(isInfinitys('itsuki')).toBe(false)
  })
})
