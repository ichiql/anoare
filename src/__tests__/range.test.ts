import { describe, expect, test } from 'vitest'
import { range } from '..'

describe('Range', () => {
  test('basic', async () => {
    expect(range(5)).toEqual([0, 1, 2, 3, 4])
    expect(range(5, 1)).toEqual([])
    expect(range(0, 5, 2)).toEqual([0, 2, 4])
  })
})
