/* eslint-disable no-magic-numbers */
import React from 'react';
import { BlockEdit, BlockList, InspectorAdvancedControls } from '@wordpress/block-editor';
import { SlotFillProvider, DropZoneProvider } from '@wordpress/components';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { addFilter } from '@wordpress/hooks';
import { create } from '@wordpress/rich-text';
import { select } from '@wordpress/data';
import { ENTER } from '@wordpress/keycodes';
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Keywords } from '../../src/components';
import { STORE_NAME } from '../../src/store/constant';
import '../../src/store';

beforeAll(() => {
  addFilter('editor.BlockEdit', 'components-test/keywords-test', createHigherOrderComponent(BlockEdit => props =>
    <Fragment>
      <BlockList>
        <BlockEdit {...props}/>
      </BlockList>
      <Keywords props={props} label="Set Search Keywords"/>
    </Fragment>,
  ));
});

describe('Keywords', () => {
  it('should render Keywords', () => {
    const wrapper = mount(
      <SlotFillProvider>
        <DropZoneProvider>
          <InspectorAdvancedControls.Slot/>

          <BlockEdit
            name="core/quote"
            isSelected={true}
            attributes={({
              className: 'test-block-edit',
              content: create({
                text: 'test',
                start: 0,
                end: 1,
                formats: [[], [], [], []],
              }),
            })}
          />
        </DropZoneProvider>
      </SlotFillProvider>,
    );

    expect(toJson(wrapper, { mode: 'deep' })).toMatchSnapshot('render');

    expect(select(STORE_NAME).getKeywords('core/quote')).toHaveLength(0);
    expect(wrapper.find('.components-form-token-field__input-container').hostNodes()).toHaveLength(1);
    expect(wrapper.find('.components-form-token-field__input').hostNodes()).toHaveLength(1);
    wrapper.find('.components-form-token-field__input').hostNodes().simulate('change', { target: { value: 'test' } });
    wrapper.find('.components-form-token-field').hostNodes().simulate('keydown', { keyCode: ENTER });

    expect(toJson(wrapper, { mode: 'deep' })).toMatchSnapshot('input');
    expect(wrapper.find('.components-form-token-field__token-text').hostNodes()).toHaveLength(1);
    expect(select(STORE_NAME).getKeywords('core/quote')).toHaveLength(1);
    expect(select(STORE_NAME).getKeywords('core/quote')).toContain('test');
  });
});
