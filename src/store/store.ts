import { proxy } from 'valtio';
import { deepClone } from 'valtio/utils';
import { State } from './types';
import { FIELD_COLUMN } from '@/constants';
import { getShuffledDeck } from '@/utils/feature/deck';

export const initialState: State = {
	deck: getShuffledDeck(),
	faceUp: [],
	faceUpHistory: [],
	fields: [...new Array(FIELD_COLUMN).fill([])],
	foundations: [...new Array(4).fill([])],
	movingCardList: []
};

export const state = proxy<State>(deepClone(initialState));
