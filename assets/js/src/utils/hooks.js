const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { select, dispatch } = wp.data;

import { PLUGIN_NAME } from '../constant';
import { STORE_NAME } from '../store/constant';
import { Keywords } from '../components';
import { isTargetBlockType } from '../utils';

/**
 * @param {string} name name
 * @returns {string} namespace
 */
export function getNamespace( name ) {
	return PLUGIN_NAME + '/' + name;
}

/**
 * @returns {Component} component
 */
export function getKeywordsFormComponent() {
	return createHigherOrderComponent( BlockEdit => props => {
		if ( ! props.isSelected || ! isTargetBlockType( props ) ) {
			return <BlockEdit { ...props }/>;
		}
		return <Fragment>
			<BlockEdit { ...props }/>
			<Keywords props={ props }/>
		</Fragment>;
	} );
}

/**
 * @returns {function(*, *=): *} setup function
 */
export function getSetupKeywordsFunc() {
	return ( settings, name ) => {
		dispatch( STORE_NAME ).initialize( name, settings.keywords );
		settings.keywords = select( STORE_NAME ).getKeywords( name );
		return settings;
	};
}
