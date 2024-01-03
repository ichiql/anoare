import { describe, expect, test } from 'vitest'
import { isMap, isMaps } from '..'

describe('is-map', () => {
  const map = new Map()
  const func = () => null
  test('isMap', async () => {
    expect(isMap(map)).toBe(true)
    expect(isMap(func)).toBe(false)
    expect(isMap('kyon')).toBe(false)
    expect(isMap([1])).toBe(false)
    expect(isMap({})).toBe(false)
    expect(isMap(undefined)).toBe(false)
    expect(isMap(null)).toBe(false)
  })
  test('isMaps', async () => {
    expect(isMaps([map, map])).toBe(true)
    expect(isMaps([func, func])).toBe(false)
    expect(isMaps([{}, {}])).toBe(false)
    expect(isMaps(['mikuru', 'nagato'])).toBe(false)
    expect(isMaps('itsuki')).toBe(false)
    expect(isMaps([1])).toBe(false)
    expect(isMaps(undefined)).toBe(false)
    expect(isMaps(null)).toBe(false)
  })
})
