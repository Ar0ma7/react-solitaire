import { proxy } from 'valtio';
import { FIELD_COLUMN } from '@/constants';
import { getShuffledDeck } from '@/utils/feature/deck';

export const state = proxy({
	deck: getShuffledDeck(),
	faceUp: [],
	faceUpHistory: [],
	fields: [...new Array(FIELD_COLUMN).fill([])],
	foundations: [...new Array(4).fill([])]
});
