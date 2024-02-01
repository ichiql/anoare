/**
 *
 * multi condition replace
 *
 * @example
 * ```
 * const inputString = "Hello world, this is a test string.";
 * const replacements: [RegExp, string][] = [
 *   [/Hello/g, "Hi"],
 *   [/\btest\b/g, "example"],
 *   [/string/g, "text"],
 * ];
 * const outputString = multiReplace(inputString, replacements);
 * console.log(outputString);
 * ```
 *
 * @param replacements
 * @returns
 */

export function multiReplace(inputString: string, replacements: [RegExp, string][]): string {
  let resultString = inputString

  replacements.forEach(([regex, replacement]) => {
    resultString = resultString.replace(regex, replacement)
  })

  return resultString
}
