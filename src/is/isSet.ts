import { isArray, typeOf } from '..'

export const isSet = (data: unknown): data is Set<any> => typeOf(data) === 'set'

export const isSets = (data: unknown): data is Set<any>[] => isArray(data) && data.every(isSet)
