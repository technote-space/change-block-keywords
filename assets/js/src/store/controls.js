/**
 * @param {string} storeKey store key
 * @param {string} selectorName selector name
 * @param {object} args args
 * @returns {{args: *[], selectorName: *, storeKey: *, type: string}} control
 */
export const select = ( storeKey, selectorName, ...args ) => ( {
	type: 'SELECT',
	storeKey,
	selectorName,
	args,
} );

export default {
	SELECT( { storeKey, selectorName, args } ) {
		return wp.data.select( storeKey )[ selectorName ]( ...args );
	},
};
