import { SUITE } from '@/constants';
import { Card, Suite } from '@/types';

const validateStackFieldCard = (movingCard: Card, targetCard: Card): boolean => {
	const isValidSuite =
		((movingCard.suite === SUITE.HEART || movingCard.suite === SUITE.DIAMOND) &&
			(targetCard.suite === SUITE.CLUB || targetCard.suite === SUITE.SPADE)) ||
		((movingCard.suite === SUITE.CLUB || movingCard.suite === SUITE.SPADE) &&
			(targetCard.suite === SUITE.HEART || targetCard.suite === SUITE.DIAMOND));
	const isValidNumber = movingCard.number === targetCard.number - 1;

	return isValidSuite && isValidNumber;
};

export const validateMoveToField = ({
	movingCard,
	fieldCard
}: {
	movingCard: Card;
	fieldCard: Card | undefined;
}): boolean => {
	if (!fieldCard && movingCard.number === 13) {
		return true;
	}

	if (fieldCard && validateStackFieldCard(movingCard, fieldCard)) {
		return true;
	}

	return false;
};

const validateStackFoundationCard = (movingCard: Card, targetCard: Card): boolean => {
	const isValidSuite = movingCard.suite === targetCard.suite;
	const isValidNumber = movingCard.number === targetCard.number + 1;

	return isValidSuite && isValidNumber;
};

export const validateMoveToFoundation = ({
	movingCard,
	foundationCard,
	foundationSuite
}: {
	movingCard: Card;
	foundationCard: Card | undefined;
	foundationSuite: Suite;
}): boolean => {
	if (!foundationCard && movingCard.number === 1 && movingCard.suite === foundationSuite) {
		return true;
	}

	if (foundationCard && validateStackFoundationCard(movingCard, foundationCard)) {
		return true;
	}

	return false;
};
