import React from 'react';
import { Helpers } from '@technote-space/gutenberg-utils';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { FormTokenField } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useMemo, useCallback } from '@wordpress/element';
import { STORE_NAME } from '../store/constant';

const { getTranslator } = Helpers;
/** @var {object} cbkParams */
const translate         = getTranslator(cbkParams);

/**
 * @param {object} props props
 * @returns {Component} input keywords form
 * @constructor
 */
const Keywords = ({ props: { name } }) => {
  const keywords        = useSelect(select => select(STORE_NAME).getKeywords(name), [name]);
  const { setKeywords } = useDispatch(STORE_NAME);
  const onChange        = useCallback(keywords => setKeywords(name, keywords), [name]);
  const label           = useMemo(() => translate('Set Search Keywords'), []);
  return useMemo(() => <InspectorAdvancedControls>
    <FormTokenField
      value={keywords}
      onChange={onChange}
      label={label}
    />
  </InspectorAdvancedControls>, [name, keywords]);
};

export default Keywords;
