import { useCallback } from 'react';
import { useSnapshot } from 'valtio';
import { Board } from './Board';
import { state } from '@/store';
import { actions } from '@/store/store';

export const BoardContainer: React.FC = () => {
	const snap = useSnapshot(state);

	const isEmptyDeck = snap.deck.length === 0;

	const handleClickDeck = useCallback(() => {
		actions.draw();
	}, []);

	return (
		<Board
			isEmptyDeck={isEmptyDeck}
			faceUp={snap.faceUp}
			fields={snap.fields}
			foundations={snap.foundations}
			onClickDeck={handleClickDeck}
		/>
	);
};
