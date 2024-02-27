import { describe, expect, test } from 'vitest'
import { extractRootDomain } from '..'

describe('extract-root-domain', () => {
  test('extractRootDomain', async () => {
    expect(extractRootDomain('https://example.com')).toBe('example.com')
    expect(extractRootDomain('https://www.example.com')).toBe('example.com')
    expect(extractRootDomain('https://example.com/with/path')).toBe('example.com')
    expect(extractRootDomain('https://example.com/with/path?query1=value&query2=value')).toBe(
      'example.com'
    )
    expect(extractRootDomain('https://example.co.jp')).toBe('example.co.jp')
    expect(extractRootDomain('https://www.example.co.jp')).toBe('example.co.jp')
    expect(extractRootDomain('https://example.co.jp/with/path')).toBe('example.co.jp')
    expect(extractRootDomain('https://example.co.jp/with/path?query1=value&query2=value')).toBe(
      'example.co.jp'
    )
    expect(extractRootDomain('http://localhost:3000')).toBe('localhost')
    expect(extractRootDomain('http://localhost:3000/with/path')).toBe('localhost')
    expect(extractRootDomain('http://localhost:3000/with/path?query1=value&query2=value')).toBe(
      'localhost'
    )
  })
})
