import { typeOf } from '..'

export const isArray = (data: unknown): data is Array<any> => typeOf(data) === 'array'

export const isArrays = (data: unknown): data is Array<any>[] =>
  isArray(data) && data.every(isArray)
