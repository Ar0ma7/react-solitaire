import { shuffleArray } from '../array';
import { SUITE } from '@/constants';
import type { CardNumber, Deck, Suite } from '@/types';

const generateDeck = (deckNum: number = 1): Deck => {
	const deck: Deck = [];

	for (let index = 0; index < deckNum; index++) {
		const suites: Suite[] = Object.values(SUITE);
		for (let index = 1; index <= 13; index++) {
			suites.forEach((suite) => {
				deck.push({
					number: index as CardNumber,
					suite,
					isFront: false
				});
			});
		}
	}

	return deck;
};

export const getShuffledDeck = (...params: Parameters<typeof generateDeck>) =>
	shuffleArray(generateDeck(...params));
