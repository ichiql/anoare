import { isArray, typeOf } from '..'

export const isSymbol = (data: unknown): data is Symbol => typeOf(data) === 'symbol'

export const isSymbols = (data: unknown): data is Symbol[] => isArray(data) && data.every(isSymbol)
