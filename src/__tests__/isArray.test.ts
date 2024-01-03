import { describe, expect, test } from 'vitest'
import { isArray, isArrays } from '..'

describe('is-array', () => {
  const func = () => null
  test('isArray', async () => {
    expect(isArray(func)).toBe(false)
    expect(isArray('kyon')).toBe(false)
    expect(isArray([1])).toBe(true)
    expect(isArray({})).toBe(false)
    expect(isArray(undefined)).toBe(false)
    expect(isArray(null)).toBe(false)
  })
  test('isArrays', async () => {
    expect(isArrays([func, func])).toBe(false)
    expect(isArrays([{}, {}])).toBe(false)
    expect(isArrays([['mikuru'], ['nagato']])).toBe(true)
    expect(isArrays('itsuki')).toBe(false)
    expect(isArrays([1])).toBe(false)
    expect(isArrays(undefined)).toBe(false)
    expect(isArrays(null)).toBe(false)
  })
})
