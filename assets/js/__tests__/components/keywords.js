/* eslint-disable no-magic-numbers */
import { mount } from 'enzyme';
import toJson from 'enzyme-to-json';
import { Keywords } from '../../src/components';
import { STORE_NAME } from '../../src/store/constant';
import '../../src/store';

const { BlockEdit, InspectorAdvancedControls } = wp.blockEditor;
const { SlotFillProvider } = wp.components;
const { createHigherOrderComponent } = wp.compose;
const { Fragment } = wp.element;
const { addFilter, removeFilter } = wp.hooks;
const { create } = wp.richText;
const { select } = wp.data;
const { ENTER } = wp.keycodes;

beforeAll( () => {
	addFilter( 'editor.BlockEdit', 'components-test/keywords-test', createHigherOrderComponent( BlockEdit => props =>
		<Fragment>
			<BlockEdit { ...props }/>
			<Keywords props={ props }/>
		</Fragment>,
	) );
} );

afterAll( () => {
	removeFilter( 'editor.BlockEdit', 'components-test/keywords-test' );
} );

describe( 'Keywords', () => {
	it( 'should render Keywords', () => {
		const wrapper = mount(
			<SlotFillProvider>
				<InspectorAdvancedControls.Slot/>

				<BlockEdit
					name="core/paragraph"
					isSelected={ true }
					attributes={ ( {
						className: 'test-block-edit',
						content: create( {
							text: 'test',
							start: 0,
							end: 1,
							formats: [ [], [], [], [] ],
						} ),
					} ) }
				/>
			</SlotFillProvider>,
		);

		expect( toJson( wrapper, { mode: 'deep' } ) ).toMatchSnapshot( 'render' );

		expect( select( STORE_NAME ).getKeywords( 'core/paragraph' ) ).toHaveLength( 0 );
		expect( wrapper.find( '.components-form-token-field__input-container' ).hostNodes() ).toHaveLength( 1 );
		expect( wrapper.find( '.components-form-token-field__input' ).hostNodes() ).toHaveLength( 1 );
		wrapper.find( '.components-form-token-field__input' ).hostNodes().simulate( 'change', { target: { value: 'test' } } );
		wrapper.find( '.components-form-token-field' ).hostNodes().simulate( 'keydown', { keyCode: ENTER } );

		expect( toJson( wrapper, { mode: 'deep' } ) ).toMatchSnapshot( 'input' );
		expect( wrapper.find( '.components-form-token-field__token-text' ).hostNodes() ).toHaveLength( 1 );
		expect( select( STORE_NAME ).getKeywords( 'core/paragraph' ) ).toHaveLength( 1 );
		expect( select( STORE_NAME ).getKeywords( 'core/paragraph' ) ).toContain( 'test' );
	} );
} );
