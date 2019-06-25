import './store';
import { getNamespace, getKeywordsFormComponent, getSetupKeywordsFunc } from './utils';

const { addFilter } = wp.hooks;

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
