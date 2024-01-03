import { describe, expect, test } from 'vitest'
import {
  isAsyncFunction,
  isAsyncFunctions,
  isFunction,
  isFunctions,
  isGeneratorFunction,
  isGeneratorFunctions,
} from '..'

describe('is-function', () => {
  const func = () => null
  const asyncFunc = async () => null
  const genFunc = function* () {
    yield 1
  }
  test('isFunction', async () => {
    expect(isFunction(func)).toBe(true)
    expect(isFunction('kyon')).toBe(false)
    expect(isFunction([1])).toBe(false)
    expect(isFunction({})).toBe(false)
    expect(isFunction(undefined)).toBe(false)
    expect(isFunction(null)).toBe(false)
  })
  test('isFunctions', async () => {
    expect(isFunctions([func, func])).toBe(true)
    expect(isFunctions(['mikuru', 'nagato'])).toBe(false)
    expect(isFunctions('itsuki')).toBe(false)
    expect(isFunctions([1])).toBe(false)
    expect(isFunctions(undefined)).toBe(false)
    expect(isFunctions(null)).toBe(false)
  })
  test('isAsyncFunction', async () => {
    expect(isAsyncFunction(asyncFunc)).toBe(true)
    expect(isAsyncFunction(() => null)).toBe(false)
    expect(isAsyncFunction('kyon')).toBe(false)
    expect(isAsyncFunction([1])).toBe(false)
    expect(isAsyncFunction({})).toBe(false)
    expect(isAsyncFunction(undefined)).toBe(false)
    expect(isAsyncFunction(null)).toBe(false)
  })
  test('isAsyncFunctions', async () => {
    expect(isAsyncFunctions([asyncFunc, asyncFunc])).toBe(true)
    expect(isAsyncFunctions([asyncFunc, func])).toBe(false)
    expect(isAsyncFunctions(['mikuru', 'nagato'])).toBe(false)
    expect(isAsyncFunctions('itsuki')).toBe(false)
    expect(isAsyncFunctions([1])).toBe(false)
    expect(isAsyncFunctions(undefined)).toBe(false)
    expect(isAsyncFunctions(null)).toBe(false)
  })
  test('isGeneratorFunction', async () => {
    expect(isGeneratorFunction(genFunc)).toBe(true)
    expect(isGeneratorFunction(asyncFunc)).toBe(false)
    expect(isGeneratorFunction(() => null)).toBe(false)
    expect(isGeneratorFunction('kyon')).toBe(false)
    expect(isGeneratorFunction([1])).toBe(false)
    expect(isGeneratorFunction({})).toBe(false)
    expect(isGeneratorFunction(undefined)).toBe(false)
    expect(isGeneratorFunction(null)).toBe(false)
  })
  test('isGeneratorFunctions', async () => {
    expect(isGeneratorFunctions([genFunc, genFunc])).toBe(true)
    expect(isGeneratorFunctions([asyncFunc, func])).toBe(false)
    expect(isGeneratorFunctions(['mikuru', 'nagato'])).toBe(false)
    expect(isGeneratorFunctions('itsuki')).toBe(false)
    expect(isGeneratorFunctions([1])).toBe(false)
    expect(isGeneratorFunctions(undefined)).toBe(false)
    expect(isGeneratorFunctions(null)).toBe(false)
  })
})
