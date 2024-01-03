import { describe, expect, test } from 'vitest'
import { numberize } from '..'

describe('numberize', () => {
  test('parse number', () => {
    expect(numberize(NaN)).toBe(NaN)
    expect(numberize(NaN, 1)).toBe(1)
    expect(numberize(42)).toBe(42)
    expect(numberize(3.14)).toBe(3.14)
    expect(numberize(-10)).toBe(-10)
  })

  test('parse string', () => {
    expect(numberize('42')).toBe(42)
    expect(numberize('3.14')).toBe(3.14)
    expect(numberize('$1,000')).toBe(1000)
    expect(numberize('10,000,000')).toBe(10000000)
    expect(numberize('1 000')).toBe(1000)
    expect(numberize('-50')).toBe(-50)
    expect(numberize('50%')).toBe(50)
    expect(numberize('¥1,000')).toBe(1000)
    expect(numberize('\\1,000')).toBe(1000)
    expect(numberize('invalid value')).toBe(NaN)
  })

  test('parse bigint', () => {
    expect(numberize(BigInt(Number.MAX_SAFE_INTEGER) + BigInt(1))).toBe(Number.MAX_SAFE_INTEGER)
    expect(numberize(BigInt(Number.MIN_SAFE_INTEGER) - BigInt(1))).toBe(Number.MIN_SAFE_INTEGER)
  })

  test('parse invalid and return default', () => {
    expect(numberize({}, 0)).toBe(0)
    expect(numberize(null, 0)).toBe(0)
    expect(numberize(undefined)).toBe(NaN)
  })
})
