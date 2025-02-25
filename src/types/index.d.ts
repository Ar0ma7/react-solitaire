import { AREA, SUITE } from '@/constants';
import type { ValueOf } from '@/utils/type';

export type Suite = ValueOf<typeof SUITE>;

export type CardNumber = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12 | 13;

export type Card = {
	suite: Suite;
	number: CardNumber;
	isFront: boolean;
};

export type Deck = Card[];

export type AreaName = ValueOf<typeof AREA>;
