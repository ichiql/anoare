import { describe, expect, test } from 'vitest'
import { SplitAndPadPosition, splitAndPad } from '..'

describe('SplitAndPad', () => {
  test('basic', async () => {
    expect(splitAndPad('あいうえお', 6, '')).toStrictEqual(['あ', 'い', 'う', 'え', 'お', ''])
    expect(splitAndPad('あいうえお', 6, '', SplitAndPadPosition.Start)).toStrictEqual([
      '',
      'あ',
      'い',
      'う',
      'え',
      'お',
    ])
    expect(splitAndPad('あいうえお', 3, '')).toStrictEqual(['あ', 'い', 'う'])
    expect(splitAndPad('', 6, '')).toStrictEqual(['', '', '', '', '', ''])
  })
})
