import { isArray, typeOf } from '..'

export const isMap = (data: unknown): data is Map<any, any> => typeOf(data) === 'map'

export const isMaps = (data: unknown): data is Map<any, any>[] => isArray(data) && data.every(isMap)
