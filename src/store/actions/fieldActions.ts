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

const flipFieldCard = () => {
	for (let index = 0; index < state.fields.length; index++) {
		const field = state.fields[index];
		const lastCard = field[field.length - 1];
		if (lastCard && !lastCard.isFront) {
			state.fields[index][field.length - 1] = { ...lastCard, isFront: true };
		}
	}
};

const moveFromField = (areaIndex: number, card: Card) => {
	const field = state.fields[areaIndex];
	const cardIndex = getIndexOfElement(field, card);
	const movingCardList = getArrayFromIndex(field, cardIndex);

	state.movingCardList = movingCardList;
	state.fields[areaIndex] = field.slice(0, cardIndex);

	flipFieldCard();
};

const moveToField = (areaIndex: number) => {
	state.fields[areaIndex] = [...state.fields[areaIndex], ...state.movingCardList];
	state.movingCardList = [];
};

export const fieldActions = {
	setInitialField,
	moveFromField,
	moveToField
};
