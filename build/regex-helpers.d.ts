/**
 * Use regular expressions to replace occurencies in a string
 * @param s
 * @param search - Part of string to replace.
 * @param replacement
 * @returns Result string where occurencies of {search} are replaced by {replacement}
 */
export declare function replace(s: string, search: string, replacement: string): string;
/**
     * Escape regular expression reserved chars.
     * @param str
     */
export declare function escapeRegularExpression(str: string): string;
