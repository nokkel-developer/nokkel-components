/**
 * Capitalize first letter of a sentence
 * @param string to capitalize
 * @returns Capitalized string
 * @example capitalize("random sentence") => "Random sentence"
 */
export const capitalize = (string: string): string =>
  string.replace(/\b[a-z]/g, (x) => x.toUpperCase());
