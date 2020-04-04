import React from 'react';
import { Helpers } from '@technote-space/gutenberg-utils';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { FormTokenField } from '@wordpress/components';
import { compose } from '@wordpress/compose';
import { withSelect, withDispatch } from '@wordpress/data';
import { STORE_NAME } from '../store/constant';

const { getTranslator } = Helpers;
const translate         = getTranslator(cbkParams);

/**
 * @param {object} props props
 * @param {function} keywords keywords
 * @param {function} setKeywords set keywords
 * @returns {Component} input keywords form
 * @constructor
 */
const Keywords = ({ props, keywords, setKeywords }) => <InspectorAdvancedControls>
	<FormTokenField
		value={keywords(props)}
		onChange={tokens => setKeywords(props, tokens)}
		label={translate('Set Search Keywords')}
	/>
</InspectorAdvancedControls>;

export default compose(
	withSelect(select => ({
		keywords: props => select(STORE_NAME).getKeywords(props.name),
	})),
	withDispatch(dispatch => ({
		setKeywords: (props, keywords) => dispatch(STORE_NAME).setKeywords(props.name, keywords),
	})),
)(Keywords);
