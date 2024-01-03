import { isArray, typeOf } from '..'

/**
 * 文字列かどうかを判定する
 * Check if data is a string
 * @param data Data to check
 * @returns True if data is a string
 */
export const isString = (data: unknown): data is string => typeOf(data) === 'string'

/**
 * 文字列かどうかを判定する(配列)
 * Check if data is a string[]
 * @param data Data to check
 * @returns True if data is a string[]
 */
export const isStrings = (data: unknown): data is string[] => isArray(data) && data.every(isString)
