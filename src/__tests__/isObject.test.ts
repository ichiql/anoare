import { describe, expect, test } from 'vitest'
import { isObject, isObjects } from '..'

describe('is-object', () => {
  const func = () => null
  test('isObject', async () => {
    expect(isObject(func)).toBe(false)
    expect(isObject('kyon')).toBe(false)
    expect(isObject([1])).toBe(false)
    expect(isObject({})).toBe(true)
    expect(isObject(undefined)).toBe(false)
    expect(isObject(null)).toBe(false)
  })
  test('isObjects', async () => {
    expect(isObjects([func, func])).toBe(false)
    expect(isObjects([{}, {}])).toBe(true)
    expect(isObjects(['mikuru', 'nagato'])).toBe(false)
    expect(isObjects('itsuki')).toBe(false)
    expect(isObjects([1])).toBe(false)
    expect(isObjects(undefined)).toBe(false)
    expect(isObjects(null)).toBe(false)
  })
})
