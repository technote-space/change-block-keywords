const { addFilter } = wp.hooks;

import './store';
import { getNamespace, getKeywordsFormComponent, getSetupKeywordsFunc } from './utils';

addFilter(
	'editor.BlockEdit',
	getNamespace( 'add-keywords-form' ),
	getKeywordsFormComponent(),
);

addFilter(
	'blocks.registerBlockType',
	getNamespace( 'setup-keywords' ),
	getSetupKeywordsFunc(),
);
