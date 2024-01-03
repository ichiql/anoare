import { describe, expect, test } from 'vitest'
import { isNull, isNulls } from '..'

describe('is-null', () => {
  test('isNull', async () => {
    expect(isNull(null)).toBe(true)
    expect(isNull(undefined)).toBe(false)
    expect(isNull('kyon')).toBe(false)
    expect(isNull(1)).toBe(false)
    expect(isNull([1])).toBe(false)
  })
  test('isNulls', async () => {
    expect(isNulls([null, null])).toBe(true)
    expect(isNulls([null, null, 'kyon'])).toBe(false)
    expect(isNulls(['mikuru', 'nagato'])).toBe(false)
    expect(isNulls('itsuki')).toBe(false)
    expect(isNulls([1])).toBe(false)
  })
})
