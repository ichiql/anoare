import { isArray, typeOf } from '..'

/**
 * 数値かどうかを判定する
 * Check if data is a number
 * @param data Data to check
 * @returns True if data is a number
 */
export const isNumber = (data: unknown): data is number => typeOf(data) === 'number'

/**
 * 数値かどうかを判定する(配列)
 * Check if data is a number[]
 * @param data Data to check
 * @returns True if data is a number[]
 */
export const isNumbers = (data: unknown): data is number[] => isArray(data) && data.every(isNumber)
