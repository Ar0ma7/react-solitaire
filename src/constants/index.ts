export const SUITE = {
	SPADE: 'spade',
	CLUB: 'club',
	HEART: 'heart',
	DIAMOND: 'diamond'
} as const;

export const FIELD_COLUMN = 7;

export const DRAW_COUNT = 3;

export const FOUNDATION_SUITE_ORDER = [SUITE.HEART, SUITE.DIAMOND, SUITE.CLUB, SUITE.SPADE];

export const AREA = {
	DECK: 'deck',
	FACE_UP: 'faceUp',
	FIELDS: 'fields',
	FOUNDATIONS: 'foundations'
};

export const SUITE_SYMBOL = {
	[SUITE.SPADE]: '♠',
	[SUITE.CLUB]: '♣',
	[SUITE.HEART]: '♥',
	[SUITE.DIAMOND]: '♦'
};
