import { state } from '../store';

const moveToFoundation = (areaIndex: number) => {
	state.foundations[areaIndex] = [...state.foundations[areaIndex], state.movingCardList[0]];
	state.movingCardList = [];
};

export const foundationActions = {
	moveToFoundation
};
