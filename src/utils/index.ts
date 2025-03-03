/* eslint-disable prettier/prettier */
/**
 *
 * @function isEmptyString - Checks if passed value is an empty string or not
 * @param {string} value
 * @returns `boolean` indicating whether `value` is an empty string
 *
 */
export const isEmptyString = <T,>(value: string | T): boolean =>
    typeof value !== 'string' || !value?.trim()?.length;

/**
 *
 * @function isValidNumber - Checks if passed value is a valid number or not
 * @param {number | string} value
 * @returns `boolean` indicating whether `value` is a valid number
 *
 */
export const isValidNumber = <T,>(value: number | string | T): boolean =>
    !isNaN(Number(value));

/**
 *
 * @function isEmptyList - Checks if passed object is an empty list or not
 * @param {Array<any>} obj
 * @returns `boolean` indicating whether `obj` is an empty list
 *
 */
export const isEmptyList = <T,>(obj: Array<T> | T): boolean =>
    !Array.isArray(obj) || (Array.isArray(obj) && obj.length === 0);

/**
 *
 * @function isEmptyObject - Checks if passed object is an empty object or not
 * @param {Object} obj
 * @returns `boolean` indicating whether `obj` is an empty object
 *
 */
export const isEmptyObject = <T,>(obj: Object | T): boolean =>
    !obj ||
    typeof obj !== 'object' ||
    Array.isArray(obj) ||
    Object.keys(obj).length === 0;

/**
 *
 * @function truncateStringToLength - Truncates passed value to specified length
 * @param {string} value
 * @param {number} length
 * @returns truncated `value` if its length is greater than or equal to `length`
 *
 */
export const truncateStringToLength = (
    value: string,
    length: number
): string => {
    if (isEmptyString(value) || !isValidNumber(length) || length <= 0)
        return value;
    return value?.length < length ? value : `${value?.substring(0, length)}...`;
};
