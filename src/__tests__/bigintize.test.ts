import { describe, expect, test } from 'vitest'
import { bigintize } from '..'

describe('bigintize', () => {
  test('parse number', () => {
    expect(bigintize(42)).toBe(BigInt(42))
    expect(() => bigintize(NaN)).toThrow()
    expect(() => bigintize(3.14)).toThrow()
    expect(bigintize(3.14, BigInt(5))).toBe(BigInt(5))
    expect(bigintize(-10)).toBe(BigInt(-10))
  })

  test('parse string', () => {
    expect(bigintize('42')).toBe(BigInt(42))
    expect(() => bigintize('3.14')).toThrow()
    expect(bigintize('3.14', BigInt(7))).toBe(BigInt(7))
    expect(bigintize('$1,000')).toBe(BigInt(1000))
    expect(bigintize('10,000,000')).toBe(BigInt(10000000))
    expect(bigintize('1 000')).toBe(BigInt(1000))
    expect(bigintize('-50')).toBe(BigInt(-50))
    expect(bigintize('50%')).toBe(BigInt(50))
    expect(bigintize('¥1,000')).toBe(BigInt(1000))
    expect(bigintize('\\1,000')).toBe(BigInt(1000))
  })

  test('parse invalid and return default', () => {
    expect(() => bigintize({})).toThrow()
    expect(bigintize({}, BigInt(0))).toBe(BigInt(0))
    expect(bigintize(null, BigInt(0))).toBe(BigInt(0))
    expect(bigintize(undefined, BigInt(0))).toBe(BigInt(0))
  })
})
