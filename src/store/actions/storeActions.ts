import { deepClone } from 'valtio/utils';
import { initialState, state } from '../store';

const reset = () => {
	Object.assign(state, deepClone(initialState));
};

export const storeActions = {
	reset
};
