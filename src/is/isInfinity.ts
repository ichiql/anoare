import { isArray, typeOf } from '..'

export const isInfinity = (data: unknown): data is number => typeOf(data) === 'infinity'

export const isInfinitys = (data: unknown): data is number[] =>
  isArray(data) && data.every(isInfinity)
