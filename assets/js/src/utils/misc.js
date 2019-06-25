const { isReusableBlock } = wp.blocks;

/**
 * @param {string} name name
 * @returns {*} keyword
 */
export function getNameKeyword( name ) {
	return name.split( '/' ).slice( -1 )[ 0 ]; // eslint-disable-line no-magic-numbers
}

/**
 * @param {array} arr array
 * @returns {any[]} unique array
 */
export function arrayUniq( arr ) {
	return [ ...new Set( arr ) ];
}

/**
 * @param {object} obj object
 * @returns {object} object
 */
export function copyObj( obj ) {
	return Object.assign( {}, obj );
}

/**
 * @param {object} state state
 * @param {string} key key
 * @param {*} value value
 * @returns {object} state
 */
export function createState( state, key, value ) {
	const newState = copyObj( state );
	newState[ key ] = value;
	return newState;
}

/**
 * @param {object} blockOrType block or type
 * @returns {boolean} start or not
 */
export function isTargetBlockType( blockOrType ) {
	return !! ( blockOrType && blockOrType.name ) && ! isReusableBlock( blockOrType ) && 'core/template' !== blockOrType.name;
}
