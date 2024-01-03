import { describe, expect, test } from 'vitest'
import { delay } from '..'

describe('Delay', () => {
  test('basic', async () => {
    expect(await delay({ sec: 1 })).toBe(1000)
    expect(await delay({ sec: 1, msec: 2 })).toBe(1002)
    expect(await delay({ msec: 2 })).toBe(2)
    expect(await delay()).toBe(0)
  })
})
