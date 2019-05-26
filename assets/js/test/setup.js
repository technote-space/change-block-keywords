global.cbkParams = {
	translate: {
		test: 'テスト',
	},
};
global.wp = {};
global.wp.components = {};
global.wp.editor = {};
global.wp.compose = {
	compose: () => value => value,
	createHigherOrderComponent: value => value,
};
global.wp.data = {
	withSelect: () => {
	},
	withDispatch: () => {
	},
};
global.wp.element = {};
global.wp.blocks = {
	isReusableBlock: blockOrType => blockOrType.name === 'core/block',
};
