import { Helpers } from '@technote-space/gutenberg-utils';
import { STORE_NAME } from '../store/constant';

const { getTranslator, getEditor } = Helpers;
const { FormTokenField } = wp.components;
const { InspectorAdvancedControls } = getEditor();
const { compose } = wp.compose;
const { withSelect, withDispatch } = wp.data;
const translate = getTranslator( cbkParams );

/**
 * @param {object} props props
 * @param {function} keywords keywords
 * @param {function} setKeywords set keywords
 * @returns {Component} input keywords form
 * @constructor
 */
const Keywords = ( { props, keywords, setKeywords } ) => <InspectorAdvancedControls>
	<FormTokenField
		value={ keywords( props ) }
		onChange={ tokens => setKeywords( props, tokens ) }
		label={ translate( 'Set Search Keywords' ) }
	/>
</InspectorAdvancedControls>;

export default compose(
	withSelect( select => ( {
		keywords: props => select( STORE_NAME ).getKeywords( props.name ),
	} ) ),
	withDispatch( dispatch => ( {
		setKeywords: ( props, keywords ) => dispatch( STORE_NAME ).setKeywords( props.name, keywords ),
	} ) ),
)( Keywords );
