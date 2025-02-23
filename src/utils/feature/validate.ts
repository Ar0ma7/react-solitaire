import { SUITE } from '@/constants';
import { Card } from '@/types';

export const validateMove = (active: Card, to: Card) => {
	const isValidSuite =
		((active.suite === SUITE.HEART || active.suite === SUITE.DIAMOND) &&
			(to.suite === SUITE.CLUB || to.suite === SUITE.SPADE)) ||
		((active.suite === SUITE.CLUB || active.suite === SUITE.SPADE) &&
			(to.suite === SUITE.HEART || to.suite === SUITE.DIAMOND));
	const isValidNumber = active.number === to.number - 1;

	return isValidSuite && isValidNumber;
};
