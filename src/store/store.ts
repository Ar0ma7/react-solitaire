import { proxy } from 'valtio';
import { State } from './types';
import { DRAW_COUNT, FIELD_COLUMN } from '@/constants';
import { Card } from '@/types';
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
	},
	draw: (drawCount: number = DRAW_COUNT) => {
		if (state.deck.length) {
			const drawCardList: Card[] = [];

			for (let index = 0; index < drawCount; index++) {
				const drawCard = state.deck.shift();

				if (drawCard) {
					drawCardList.push({ ...drawCard, isFront: true });
				}
			}

			state.faceUp = drawCardList;
			state.faceUpHistory = [...state.faceUpHistory, ...state.faceUp];
		} else {
			state.deck = [...state.faceUpHistory];
			state.faceUp = [];
			state.faceUpHistory = [];
		}
	}
};
