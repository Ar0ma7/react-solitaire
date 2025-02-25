import { snapshot } from 'valtio';
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

		state.faceUpHistory = [...state.faceUpHistory, ...state.faceUp];
		state.faceUp = drawCardList;
	} else {
		state.deck = [...state.faceUpHistory, ...state.faceUp];
		state.faceUp = [];
		state.faceUpHistory = [];
	}
	console.log(snapshot(state));
};

const moveFromFaceUp = () => {
	const movingCard = state.faceUp.shift();
	state.movingCardList = [movingCard!];

	const lastHistoryCard = state.faceUpHistory.shift();
	if (lastHistoryCard) {
		state.faceUp = [...state.faceUp, lastHistoryCard];
	}
};

const moveToFaceUp = () => {
	state.faceUp = [...state.movingCardList, ...state.faceUp];
	state.movingCardList = [];
};

export const deckActions = {
	draw,
	moveFromFaceUp,
	moveToFaceUp
};
