import React from 'react';
import { InspectorAdvancedControls } from '@wordpress/block-editor';
import { FormTokenField } from '@wordpress/components';
import { useSelect, useDispatch } from '@wordpress/data';
import { useMemo, useCallback } from '@wordpress/element';
import { STORE_NAME } from '../store/constant';

/**
 * @param {object} props props
 * @returns {Component} input keywords form
 * @constructor
 */
const Keywords = ({ props: { name }, label }) => {
  const keywords        = useSelect(select => select(STORE_NAME).getKeywords(name), [name]);
  const { setKeywords } = useDispatch(STORE_NAME);
  const onChange        = useCallback(keywords => setKeywords(name, keywords), [name]);
  return useMemo(() => <InspectorAdvancedControls>
    <FormTokenField
      value={keywords}
      onChange={onChange}
      label={label}
    />
  </InspectorAdvancedControls>, [name, label, keywords]);
};

export default Keywords;
