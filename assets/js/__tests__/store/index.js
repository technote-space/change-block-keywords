/* eslint-disable no-magic-numbers */
import { STORE_NAME } from '../../src/store/constant';
import '../../src/store';

const { select, dispatch } = wp.data;

describe('initialize', () => {
	it('should not set keywords if false', () => {
		expect(select(STORE_NAME).getKeywords('test1')).toHaveLength(0);
		expect(select(STORE_NAME).hasInitialized('test1')).toBe(false);

		dispatch(STORE_NAME).initialize('test1', false);

		expect(select(STORE_NAME).getKeywords('test1')).toHaveLength(0);
		expect(select(STORE_NAME).hasInitialized('test1')).toBe(true);
	});

	it('should set keywords', () => {
		expect(select(STORE_NAME).getKeywords('test2')).toHaveLength(0);
		expect(select(STORE_NAME).hasInitialized('test2')).toBe(false);

		dispatch(STORE_NAME).initialize('test2', ['abc', 'xyz']);

		expect(select(STORE_NAME).getKeywords('test2')).toHaveLength(3);
		expect(select(STORE_NAME).getKeywords('test2')).toContain('abc');
		expect(select(STORE_NAME).getKeywords('test2')).toContain('xyz');
		expect(select(STORE_NAME).getKeywords('test2')).toContain('test2');
		expect(select(STORE_NAME).hasInitialized('test2')).toBe(true);
	});

	it('should not initialize if initialized', () => {
		expect(select(STORE_NAME).getKeywords('test2')).toHaveLength(3);
		expect(select(STORE_NAME).hasInitialized('test2')).toBe(true);

		dispatch(STORE_NAME).initialize('test2', ['pqr']);

		expect(select(STORE_NAME).getKeywords('test2')).toHaveLength(3);
		expect(select(STORE_NAME).getKeywords('test2')).toContain('abc');
		expect(select(STORE_NAME).getKeywords('test2')).toContain('xyz');
		expect(select(STORE_NAME).getKeywords('test2')).toContain('test2');
		expect(select(STORE_NAME).getKeywords('test2')).not.toContain('pqr');
	});
});
