import { state } from '../store';
import { FIELD_COLUMN } from '@/constants';
import { Card } from '@/types';
import { getArrayFromIndex, getIndexOfElement } from '@/utils/array';

const setInitialField = () => {
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
};

const flipFieldCard = (areaIndex: number) => {
	state.fields[areaIndex][state.fields[areaIndex].length - 1].isFront = true;
};

const moveFromField = (areaIndex: number, card: Card) => {
	const field = state.fields[areaIndex];
	const cardIndex = getIndexOfElement(field, card);
	const movingCardList = getArrayFromIndex(field, cardIndex);

	state.movingCardList = movingCardList;
	state.fields[areaIndex] = field.slice(0, cardIndex);
};

const moveToField = (areaIndex: number) => {
	state.fields[areaIndex] = [...state.fields[areaIndex], ...state.movingCardList];
	state.movingCardList = [];
};

export const fieldActions = {
	setInitialField,
	flipFieldCard,
	moveFromField,
	moveToField
};
