require( 'should' );
import { getNamespace, getKeywordsFormComponent, getSetupKeywordsFunc } from '../src/utils';
import { PLUGIN_NAME } from '../src/constant';
import '../src/store';

describe( 'getNamespace test', () => {
	it( 'should get namespace', () => {
		const nameSpace = getNamespace( 'test' );
		nameSpace.should.startWith( PLUGIN_NAME );
		nameSpace.should.endWith( 'test' );
	} );
} );

describe( 'getKeywordsFormComponent test', () => {
	it( 'should get function', () => {
		getKeywordsFormComponent().should.type( 'function' );
		getKeywordsFormComponent()( { name: 'test' } ).should.type( 'function' );
	} );

	it( 'should get component', () => {
		const component1 = getKeywordsFormComponent()( { name: 'test1' } )( { test1: 'test1-1', test2: 'test1-2' } );
		component1.should.ownProperty( 'props' );
		component1.props.should.ownProperty( 'test1' );
		component1.props.should.ownProperty( 'test2' );
		component1.props.test1.should.equal( 'test1-1' );
		component1.props.test2.should.equal( 'test1-2' );

		const component2 = getKeywordsFormComponent()( { name: 'test2' } )( { test1: 'test2-1', test2: 'test2-2', name: 'test2', isSelected: true } );
		component2.props.should.ownProperty( 'children' );
		component2.props.children[ 0 ].should.ownProperty( 'props' );
		component2.props.children[ 0 ].props.should.ownProperty( 'test1' );
		component2.props.children[ 0 ].props.should.ownProperty( 'test2' );
		component2.props.children[ 0 ].props.test1.should.equal( 'test2-1' );
		component2.props.children[ 0 ].props.test2.should.equal( 'test2-2' );
	} );
} );

describe( 'getSetupKeywordsFunc test', () => {
	it( 'should get function', () => {
		getSetupKeywordsFunc().should.type( 'function' );
	} );

	it( 'should get setting', () => {
		const setting1 = getSetupKeywordsFunc()( { test1: 'test1' }, '' );
		setting1.should.ownProperty( 'test1' );
		setting1.test1.should.equal( 'test1' );
		setting1.should.not.ownProperty( 'keywords' );

		const setting2 = getSetupKeywordsFunc()( { name: 'test2', test2: 'test2' }, 'test2' );
		setting2.should.ownProperty( 'test2' );
		setting2.test2.should.equal( 'test2' );
		setting2.should.ownProperty( 'keywords' );
	} );
} );
