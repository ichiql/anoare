import { isArray, typeOf } from '..'

export const isFunction = (data: unknown): data is Function => typeOf(data) === 'function'

export const isFunctions = (data: unknown): data is Function[] =>
  isArray(data) && data.every(isFunction)

export const isAsyncFunction = (data: unknown): data is Promise<any> =>
  typeOf(data) === 'asyncfunction' || typeOf(data) === 'promise'

export const isAsyncFunctions = (data: unknown): data is Promise<any>[] =>
  isArray(data) && data.every(isAsyncFunction)

export const isGeneratorFunction = (data: unknown): data is Generator =>
  typeOf(data) === 'generatorfunction'

export const isGeneratorFunctions = (data: unknown): data is Generator[] =>
  isArray(data) && data.every(isGeneratorFunction)
