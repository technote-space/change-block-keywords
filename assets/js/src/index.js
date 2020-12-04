import { addFilter } from '@wordpress/hooks';
import { Helpers } from '@technote-space/gutenberg-utils';
import './store';
import { getNamespace, getKeywordsFormComponent, getSetupKeywordsFunc } from './utils';

const { getTranslator } = Helpers;
/** @var {object} cbkParams */
const translate         = getTranslator(cbkParams);

addFilter(
  'editor.BlockEdit',
  getNamespace('add-keywords-form'),
  getKeywordsFormComponent(translate('Set Search Keywords')),
);

addFilter(
  'blocks.registerBlockType',
  getNamespace('setup-keywords'),
  getSetupKeywordsFunc(),
);
