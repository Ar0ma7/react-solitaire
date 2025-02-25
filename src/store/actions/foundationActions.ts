import { state } from '../store';

const checkWin = () => {
	const isWin = state.foundations.every((foundation) => foundation.length === 13);
	if (isWin) {
		alert('You Win!');
	}
};

const moveToFoundation = (areaIndex: number) => {
	state.foundations[areaIndex] = [...state.foundations[areaIndex], state.movingCardList[0]];
	state.movingCardList = [];

	checkWin();
};

export const foundationActions = {
	moveToFoundation
};
