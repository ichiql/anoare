import { isArray, typeOf } from '..'

export const isObject = (data: unknown): data is Object => typeOf(data) === 'object'

export const isObjects = (data: unknown): data is Object[] => isArray(data) && data.every(isObject)
