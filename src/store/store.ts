import { proxy } from 'valtio';
import { deepClone } from 'valtio/utils';
import { State } from './types';
import { DRAW_COUNT, FIELD_COLUMN } from '@/constants';
import { Card } from '@/types';
import { getArrayFromIndex, getIndexOfElement } from '@/utils/array';
import { getShuffledDeck } from '@/utils/feature/deck';

const initialState: State = {
	deck: getShuffledDeck(),
	faceUp: [],
	faceUpHistory: [],
	fields: [...new Array(FIELD_COLUMN).fill([])],
	foundations: [...new Array(4).fill([])],
	movingCardList: []
};

export const state = proxy<State>(deepClone(initialState));

export const actions = {
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
	},
	moveFromField: (areaIndex: number, card: Card) => {
		const field = state.fields[areaIndex];
		const cardIndex = getIndexOfElement(field, card);
		const movingCardList = getArrayFromIndex(field, cardIndex);

		state.movingCardList = movingCardList;
		state.fields[areaIndex] = field.slice(0, cardIndex);
	},
	moveToField: (areaIndex: number) => {
		state.fields[areaIndex] = [...state.fields[areaIndex], ...state.movingCardList];
		state.movingCardList = [];
	}
};
