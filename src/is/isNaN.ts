import { isArray, typeOf } from '..'

export const isNaN = (data: unknown): data is number => typeOf(data) === 'nan'

export const isNaNs = (data: unknown): data is number[] => isArray(data) && data.every(isNaN)
