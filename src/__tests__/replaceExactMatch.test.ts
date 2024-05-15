import { describe, expect, test } from 'vitest'
import { replaceExactMatch } from '..'

describe('replaceExactMatch', () => {
  test('basic', async () => {
    expect(
      replaceExactMatch({
        input: 'mijincobot おーい',
        target: 'mijincobot',
        replacement: '',
      })
    ).toStrictEqual({
      result: ' おーい',
      count: 1,
    })
  })
})
