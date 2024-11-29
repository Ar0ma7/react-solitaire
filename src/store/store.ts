import { proxy } from 'valtio';
import { State } from './types';
import { FIELD_COLUMN } from '@/constants';
import { getShuffledDeck } from '@/utils/feature/deck';

export const state = proxy<State>({
	deck: getShuffledDeck(),
	faceUp: [],
	faceUpHistory: [],
	fields: [...new Array(FIELD_COLUMN).fill([])],
	foundations: [...new Array(4).fill([])]
});

export const actions = {
	replace: (updateState: Partial<State>) => {
		Object.assign(state, updateState);
	}
};
