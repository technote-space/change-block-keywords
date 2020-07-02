import React from 'react';
import { createHigherOrderComponent } from '@wordpress/compose';
import { Fragment } from '@wordpress/element';
import { select, dispatch } from '@wordpress/data';
import { PLUGIN_NAME } from '../constant';
import { STORE_NAME } from '../store/constant';
import { Keywords } from '../components';
import { isTargetBlockType } from '../utils';

/**
 * @param {string} name name
 * @returns {string} namespace
 */
export function getNamespace(name) {
  return PLUGIN_NAME + '/' + name;
}

/**
 * @returns {Component} component
 */
export function getKeywordsFormComponent() {
  return createHigherOrderComponent(BlockEdit => props => {
    if (!isTargetBlockType(props) || !props.isSelected) {
      return <BlockEdit {...props}/>;
    }
    return <Fragment>
      <BlockEdit {...props}/>
      <Keywords props={props}/>
    </Fragment>;
  }, 'addKeywordEditor');
}

/**
 * @returns {function(*, *=): *} setup function
 */
export function getSetupKeywordsFunc() {
  return (setting, name) => {
    if (!isTargetBlockType(setting)) {
      return setting;
    }
    dispatch(STORE_NAME).initialize(name, setting.keywords);
    setting.keywords = select(STORE_NAME).getKeywords(name);
    return setting;
  };
}
