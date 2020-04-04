import { registerStore } from '@wordpress/data';
import { STORE_NAME } from './constant';
import reducer from './reducer';
import * as selectors from './selectors';
import * as actions from './actions';
import controls from './controls';

const store = registerStore(STORE_NAME, { reducer, selectors, actions, controls, persist: ['hasInitialized', 'keywords'] });
export default store;
