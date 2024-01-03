import { describe, expect, test } from 'vitest'
import { stringify } from '..'

describe('Stringify', () => {
  test('basic', async () => {
    expect(stringify({ name: 'sakura' })).toBe('{"name":"sakura"}')
    expect(stringify({ name: 'tomoyo', num: BigInt(10) })).toBe('{"name":"tomoyo","num":"10"}')
  })
  test('array replacer', async () => {
    expect(stringify({ name: 'sakura', age: 16 }, ['name'])).toBe('{"name":"sakura"}')
  })
  test('function replacer', async () => {
    const replacer = (key: string, value: string) => {
      if (key === 'age') return 32
      return value
    }
    expect(stringify({ name: 'sakura', age: 16 }, replacer)).toBe('{"name":"sakura","age":32}')
  })
})
