import { isArray, typeOf } from '..'

export const isNull = (data: unknown): data is null => typeOf(data) === 'null'

export const isNulls = (data: unknown): data is null[] => isArray(data) && data.every(isNull)
