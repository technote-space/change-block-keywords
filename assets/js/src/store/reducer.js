import { combineReducers, select, dispatch } from '@wordpress/data';
import { SET_KEYWORDS, RESET_KEYWORD, INITIALIZED } from './constant';
import { getNameKeyword, arrayUniq, createState } from '../utils';

/**
 * @param {object} state state
 * @param {object} action action
 * @returns {{}|any} state
 */
export function hasInitialized(state = {}, action) {
  switch (action.type) {
    case INITIALIZED: {
      return createState(state, action.name, true);
    }
    default:
      return state;
  }
}

/**
 * @param {object} state state
 * @param {object} action action
 * @returns {{}|any} action
 */
export function keywords(state = {}, action) {
  switch (action.type) {
    case SET_KEYWORDS: {
      const blockType    = select('core/blocks').getBlockType(action.name);
      blockType.keywords = action.keywords;
      dispatch('core/blocks').addBlockTypes(blockType);
      return createState(state, action.name, action.keywords);
    }
    case RESET_KEYWORD: {
      return createState(state, action.name, arrayUniq(action.keywords.concat([getNameKeyword(action.name)])));
    }
    default:
      return state;
  }
}

export default combineReducers({ hasInitialized, keywords });
