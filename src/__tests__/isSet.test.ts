import { describe, expect, test } from 'vitest'
import { isSet, isSets } from '..'

describe('is-set', () => {
  const set = new Set()
  const func = () => null
  test('isSet', async () => {
    expect(isSet(set)).toBe(true)
    expect(isSet(func)).toBe(false)
    expect(isSet('kyon')).toBe(false)
    expect(isSet([1])).toBe(false)
    expect(isSet({})).toBe(false)
    expect(isSet(undefined)).toBe(false)
    expect(isSet(null)).toBe(false)
  })
  test('isSets', async () => {
    expect(isSets([set, set])).toBe(true)
    expect(isSets([func, func])).toBe(false)
    expect(isSets([{}, {}])).toBe(false)
    expect(isSets(['mikuru', 'nagato'])).toBe(false)
    expect(isSets('itsuki')).toBe(false)
    expect(isSets([1])).toBe(false)
    expect(isSets(undefined)).toBe(false)
    expect(isSets(null)).toBe(false)
  })
})
