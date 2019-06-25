import { STORE_NAME, SET_KEYWORDS, RESET_KEYWORD, INITIALIZED } from './constant';
import {
	select,
} from './controls';

/**
 * @param {string} name name
 * @param {array} keywords keywords
 */
export function* initialize( name, keywords ) {
	if ( ! ( yield select( STORE_NAME, 'hasInitialized', name ) ) ) {
		yield resetKeyword( name, keywords );
	}
}

/**
 * @param {string} name name
 * @param {array} keywords keywords
 */
export function* setKeywords( name, keywords ) {
	yield {
		type: SET_KEYWORDS,
		name,
		keywords,
	};
}

/**
 * @param {string} name name
 * @param {array} keywords keywords
 */
export function* resetKeyword( name, keywords ) {
	if ( keywords ) {
		yield {
			type: RESET_KEYWORD,
			name,
			keywords: keywords,
		};
	}
	yield {
		type: INITIALIZED,
		name,
	};
}
