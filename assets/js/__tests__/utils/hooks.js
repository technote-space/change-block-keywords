/* eslint-disable no-magic-numbers */
import { getNamespace, getKeywordsFormComponent, getSetupKeywordsFunc } from '../../src/utils';
import { PLUGIN_NAME } from '../../src/constant';
import '../../src/store';

describe( 'getNamespace', () => {
	it( 'should get namespace', () => {
		const namespace = getNamespace( 'test' );
		expect( namespace ).toStartWith( PLUGIN_NAME );
		expect( namespace ).toEndWith( 'test' );
	} );
} );

describe( 'getKeywordsFormComponent', () => {
	it( 'should get function', () => {
		expect( typeof getKeywordsFormComponent() ).toBe( 'function' );
		expect( typeof getKeywordsFormComponent()( () => <div/> ) ).toBe( 'function' );
	} );

	it( 'should get component', () => {
		const component1 = getKeywordsFormComponent()( props => <div { ...props }/> )( { test1: 'test1-1', test2: 'test1-2' } );
		expect( component1 ).toHaveProperty( 'props' );
		expect( component1.props ).toHaveProperty( 'test1' );
		expect( component1.props ).toHaveProperty( 'test2' );
		expect( component1.props.test1 ).toBe( 'test1-1' );
		expect( component1.props.test2 ).toBe( 'test1-2' );

		const component2 = getKeywordsFormComponent()( props => <div { ...props }/> )( { test1: 'test2-1', test2: 'test2-2', name: 'test2', isSelected: true } );
		expect( component2.props ).toHaveProperty( 'children' );
		expect( component2.props.children[ 0 ] ).toHaveProperty( 'props' );
		expect( component2.props.children[ 0 ].props ).toHaveProperty( 'test1' );
		expect( component2.props.children[ 0 ].props ).toHaveProperty( 'test2' );
		expect( component2.props.children[ 0 ].props.test1 ).toBe( 'test2-1' );
		expect( component2.props.children[ 0 ].props.test2 ).toBe( 'test2-2' );
	} );
} );

describe( 'getSetupKeywordsFunc', () => {
	it( 'should get function', () => {
		expect( typeof getSetupKeywordsFunc() ).toBe( 'function' );
	} );

	it( 'should get setting', () => {
		const setting1 = getSetupKeywordsFunc()( { test1: 'test1' }, '' );
		expect( setting1 ).toHaveProperty( 'test1' );
		expect( setting1.test1 ).toBe( 'test1' );
		expect( setting1 ).not.toHaveProperty( 'keywords' );

		const setting2 = getSetupKeywordsFunc()( { name: 'test2', test2: 'test2' }, 'test2' );
		expect( setting2 ).toHaveProperty( 'test2' );
		expect( setting2.test2 ).toBe( 'test2' );
		expect( setting2 ).toHaveProperty( 'keywords' );
	} );
} );
