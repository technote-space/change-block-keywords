/**
 * @param {object} state state
 * @param {string} name name
 * @returns {*|Array} keywords
 */
export function getKeywords(state, name) {
	return state.keywords[ name ] || [];
}

/**
 * @param {object} state state
 * @param {string} name name
 * @returns {*|boolean} initialized?
 */
export function hasInitialized(state, name) {
	return state.hasInitialized[ name ] || false;
}
