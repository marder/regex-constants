/**
 * Use regular expressions to replace occurencies in a string
 * @param s
 * @param search - Part of string to replace.
 * @param replacement
 * @returns Result string where occurencies of {search} are replaced by {replacement}
 */
export function replace(s: string, search: string, replacement: string) {
	if (typeof s !== "string")
		throw new TypeError("Argument 's' is not a string");
	if (typeof search !== "string")
		throw new TypeError("Argument 'search' is not a string");
	if (typeof replacement !== "string")
		throw new TypeError("Argument 'replacement' is not a string");
	// https://stackoverflow.com/questions/1144783/how-to-replace-all-occurrences-of-a-string-in-javascript
	return s.replace(new RegExp(escapeRegularExpression(search), 'g'), replacement)
}

/**
	 * Escape regular expression reserved chars.
	 * @param str
	 */
export function escapeRegularExpression(str: string) {
	if (typeof str !== "string") {
		throw new TypeError("This function is supposed to escape a 'string'");
	}
	return str.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"); // $& means the whole matched string
}