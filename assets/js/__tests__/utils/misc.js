/* eslint-disable no-magic-numbers */
import { getNameKeyword, arrayUniq, copyObj, createState, isTargetBlockType } from '../../src/utils';

describe('getNameKeyword', () => {
	it('should get keyword', () => {
		const keyword = getNameKeyword('test-group/test-name');
		expect(keyword).toBe('test-name');
	});
});

describe('arrayUniq', () => {
	it('should not error empty array', () => {
		const arr = arrayUniq([]);
		expect(arr).toHaveLength(0);
	});
	it('should unique array', () => {
		const arr = arrayUniq([1, 2, 2, 3, 3, 3]);
		expect(arr).toHaveLength(3);
		expect(arr[ 0 ]).toBe(1);
		expect(arr[ 1 ]).toBe(2);
		expect(arr[ 2 ]).toBe(3);
	});
});

describe('copyObj', () => {
	it('should copy object', () => {
		const obj = copyObj({ test1: 'test1', test2: 2 });
		expect(obj).toHaveProperty('test1');
		expect(obj).toHaveProperty('test2');
		expect(obj.test1).toBe('test1');
		expect(obj.test2).toBe(2);
	});
});

describe('createState', () => {
	it('should create state', () => {
		const state = createState({ test1: 'test1', test2: 2 }, 'test3', 3);
		expect(state).toHaveProperty('test1');
		expect(state).toHaveProperty('test2');
		expect(state).toHaveProperty('test3');
		expect(state.test1).toBe('test1');
		expect(state.test2).toBe(2);
		expect(state.test3).toBe(3);
	});
});

describe('isTargetBlockType', () => {
	it('should true if target block', () => {
		expect(isTargetBlockType({ name: 'core/paragraph' })).toBe(true);
		expect(isTargetBlockType({ name: 'core/heading' })).toBe(true);
		expect(isTargetBlockType({ name: 'test' })).toBe(true);
	});
	it('should false if not target block', () => {
		expect(isTargetBlockType({ name: 'core/block' })).toBe(false);
		expect(isTargetBlockType({ name: 'core/template' })).toBe(false);
		expect(isTargetBlockType({})).toBe(false);
		expect(isTargetBlockType(null)).toBe(false);
	});
});
