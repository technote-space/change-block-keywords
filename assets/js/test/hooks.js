require( 'should' );
import { getNamespace, getKeywordsFormComponent, getSetupKeywordsFunc } from '../src/utils';
import { PLUGIN_NAME } from '../src/constant';

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
	} );
} );

describe( 'getSetupKeywordsFunc test', () => {
	it( 'should get function', () => {
		getSetupKeywordsFunc().should.type( 'function' );
	} );
} );
