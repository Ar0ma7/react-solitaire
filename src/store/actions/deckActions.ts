import { state } from '../store';
import { DRAW_COUNT } from '@/constants';
import { Card } from '@/types';

const draw = (drawCount: number = DRAW_COUNT) => {
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
};

export const deckActions = {
	draw
};
