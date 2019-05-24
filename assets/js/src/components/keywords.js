const { FormTokenField } = wp.components;
const { InspectorAdvancedControls } = wp.editor;
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;

import { STORE_NAME } from '../store/constant';
import { translate } from '../utils';

/**
 * @param {object} props props
 * @param {function} keywords keywords
 * @param {function} setKeywords set keywords
 * @returns {Component} input keywords form
 * @constructor
 */
export function Keywords( { props, keywords, setKeywords } ) {
	return <InspectorAdvancedControls>
		<FormTokenField
			value={ keywords( props ) }
			onChange={ tokens => setKeywords( props, tokens ) }
			label={ translate( 'Set Search Keywords' ) }
		/>
	</InspectorAdvancedControls>;
}

export default compose(
	withSelect( select => {
		return {
			keywords: props => select( STORE_NAME ).getKeywords( props.name ),
		};
	} ),
	withDispatch( dispatch => {
		return {
			setKeywords: ( props, keywords ) => dispatch( STORE_NAME ).setKeywords( props.name, keywords ),
		};
	} ),
)( Keywords );
