import { describe, expect, test } from 'vitest'
import { isSymbol, isSymbols } from '..'

describe('is-symbol', () => {
  const symbol = Symbol('kyon')
  const func = () => null
  test('isSymbol', async () => {
    expect(isSymbol(symbol)).toBe(true)
    expect(isSymbol(func)).toBe(false)
    expect(isSymbol('kyon')).toBe(false)
    expect(isSymbol([1])).toBe(false)
    expect(isSymbol({})).toBe(false)
    expect(isSymbol(undefined)).toBe(false)
    expect(isSymbol(null)).toBe(false)
  })
  test('isSymbols', async () => {
    expect(isSymbols([symbol, symbol])).toBe(true)
    expect(isSymbols([func, func])).toBe(false)
    expect(isSymbols([{}, {}])).toBe(false)
    expect(isSymbols(['mikuru', 'nagato'])).toBe(false)
    expect(isSymbols('itsuki')).toBe(false)
    expect(isSymbols([1])).toBe(false)
    expect(isSymbols(undefined)).toBe(false)
    expect(isSymbols(null)).toBe(false)
  })
})
