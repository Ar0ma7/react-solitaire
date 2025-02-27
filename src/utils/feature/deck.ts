import { shuffleArray } from '../array';
import { FOUNDATION_SUITE_ORDER } from '@/constants';
import type { CardNumber, Deck } from '@/types';

const generateDeck = (): Deck => {
	const deck: Deck = [];

	for (let index = 1; index <= 13; index++) {
		FOUNDATION_SUITE_ORDER.forEach((suite) => {
			deck.push({
				number: index as CardNumber,
				suite,
				isFront: false
			});
		});
	}

	return deck;
};

export const getShuffledDeck = (...params: Parameters<typeof generateDeck>) =>
	shuffleArray(generateDeck(...params));
