import type { Card } from '@/types';

export type State = {
	deck: Card[];
	faceUp: Card[];
	faceUpHistory: Card[];
	fields: Card[][];
	foundations: Card[][];
};
