import { FOUNDATION_SUITE_ORDER } from '@/constants';
import { Card, CardNumber } from '@/types';

export const getFilledFoundation = (): Card[][] => {
	const foundation: Card[][] = [];
	FOUNDATION_SUITE_ORDER.forEach((suite) => {
		const suiteCards: Card[] = [];
		for (let cardIndex = 1; cardIndex <= 13; cardIndex++) {
			suiteCards.push({
				number: cardIndex as CardNumber,
				suite,
				isFront: true
			});
		}
		foundation.push(suiteCards);
	});

	return foundation;
};
