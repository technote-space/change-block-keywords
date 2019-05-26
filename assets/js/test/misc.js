require( 'should' );

import { getNameKeyword, arrayUniq, copyObj, createState, isTargetBlockType } from '../src/utils';

describe( 'getNameKeyword test', () => {
	it( 'should get keyword', () => {
		const keyword = getNameKeyword( 'test-group/test-name' );
		keyword.should.equal( 'test-name' );
	} );
} );

describe( 'arrayUniq test', () => {
	it( 'should not error empty array', () => {
		const arr = arrayUniq( [] );
		arr.should.have.length( 0 ); // eslint-disable-line no-magic-numbers
	} );
	it( 'should unique array', () => {
		const arr = arrayUniq( [ 1, 2, 2, 3, 3, 3 ] ); // eslint-disable-line no-magic-numbers
		arr.should.have.length( 3 ); // eslint-disable-line no-magic-numbers
		arr[ 0 ].should.equal( 1 ); // eslint-disable-line no-magic-numbers
		arr[ 1 ].should.equal( 2 ); // eslint-disable-line no-magic-numbers
		arr[ 2 ].should.equal( 3 ); // eslint-disable-line no-magic-numbers
	} );
} );

describe( 'copyObj test', () => {
	it( 'should copy object', () => {
		const obj = copyObj( { test1: 'test1', test2: 2 } );
		obj.should.hasOwnProperty( 'test1' );
		obj.should.hasOwnProperty( 'test2' );
		obj.test1.should.equal( 'test1' );
		obj.test2.should.equal( 2 ); // eslint-disable-line no-magic-numbers
	} );
} );

describe( 'createState test', () => {
	it( 'should create state', () => {
		const state = createState( { test1: 'test1', test2: 2 }, 'test3', 3 ); // eslint-disable-line no-magic-numbers
		state.should.hasOwnProperty( 'test1' );
		state.should.hasOwnProperty( 'test2' );
		state.should.hasOwnProperty( 'test3' );
		state.test1.should.equal( 'test1' );
		state.test2.should.equal( 2 ); // eslint-disable-line no-magic-numbers
		state.test3.should.equal( 3 ); // eslint-disable-line no-magic-numbers
	} );
} );

describe( 'isTargetBlockType test', () => {
	it( 'should true if target block', () => {
		isTargetBlockType( { name: 'core/paragraph' } ).should.equal( true );
		isTargetBlockType( { name: 'core/heading' } ).should.equal( true );
		isTargetBlockType( { name: 'test' } ).should.equal( true );
	} );
	it( 'should false if not target block', () => {
		isTargetBlockType( { name: 'core/block' } ).should.equal( false );
		isTargetBlockType( { name: 'core/template' } ).should.equal( false );
	} );
} );
