import { proxy } from 'valtio';
import { deepClone } from 'valtio/utils';
import { State } from './types';
import { DRAW_COUNT, FIELD_COLUMN } from '@/constants';
import { Card } from '@/types';
import { getShuffledDeck } from '@/utils/feature/deck';

const initialState: State = {
	deck: getShuffledDeck(),
	faceUp: [],
	faceUpHistory: [],
	fields: [...new Array(FIELD_COLUMN).fill([])],
	foundations: [...new Array(4).fill([])]
};

export const state = proxy<State>(deepClone(initialState));

export const actions = {
	replace: (updateState: Partial<State>) => {
		Object.assign(state, updateState);
	},
	reset: () => {
		Object.assign(state, deepClone(initialState));
	},
	setInitialField: () => {
		const fields: Card[][] = [];

		for (let column = 0; column < FIELD_COLUMN; column++) {
			const drawCardList: Card[] = [];

			for (let card = 0; card <= column; card++) {
				const drawCard = state.deck.pop();

				if (drawCard) {
					drawCardList.push({ ...drawCard, ...(card === column && { isFront: true }) });
				}
			}

			fields.push(drawCardList);
		}

		state.fields = fields;
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
