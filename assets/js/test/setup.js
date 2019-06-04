const Mousetrap = require( 'mousetrap' );
global.Mousetrap = Mousetrap;
global.window.matchMedia = () => ( {
	matches: true, addListener: () => {
	},
} );
global.cbkParams = {
	translate: {
		test: 'テスト',
	},
};

const blocks = require( '@wordpress/blocks' );
const components = require( '@wordpress/components' );
const compose = require( '@wordpress/compose' );
const data = require( '@wordpress/data' );
const editor = require( '@wordpress/editor' );
const element = require( '@wordpress/element' );

global.wp = {
	blocks,
	components,
	compose,
	data,
	editor,
	element,
};
