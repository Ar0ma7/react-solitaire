import { state } from '../store';
import { getFilledFoundation } from '@/utils/feature/foundation';

const autoFill = () => {
	const isEmptyDeck = state.deck.length === 0;
	const isEmptyFaceUp = state.faceUp.length === 0;
	const isEmptyFaceUpHistory = state.faceUpHistory.length === 0;
	const isAllFrontField = state.fields.every((field) => field.every((card) => card.isFront));

	if (isEmptyDeck && isEmptyFaceUp && isEmptyFaceUpHistory && isAllFrontField) {
		state.foundations = getFilledFoundation();
		state.fields = [...new Array(7).fill([])];
	}
};

const checkWin = () => {
	const isWin = state.foundations.every((foundation) => foundation.length === 13);
	if (isWin) {
		alert('You Win!');
	}
};

const moveToFoundation = (areaIndex: number) => {
	state.foundations[areaIndex] = [...state.foundations[areaIndex], state.movingCardList[0]];
	state.movingCardList = [];
};

export const foundationActions = {
	moveToFoundation,
	checkWin,
	autoFill
};
