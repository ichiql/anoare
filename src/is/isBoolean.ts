import { isArray, typeOf } from '..'

export const isBoolean = (data: unknown): data is boolean => typeOf(data) === 'boolean'

export const isBooleans = (data: unknown): data is boolean[] =>
  isArray(data) && data.every(isBoolean)
