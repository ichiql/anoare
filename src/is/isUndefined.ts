import { isArray, typeOf } from '..'

export const isUndefined = (data: unknown): data is undefined => typeOf(data) === 'undefined'

export const isUndefineds = (data: unknown): data is undefined[] =>
  isArray(data) && data.every(isUndefined)
