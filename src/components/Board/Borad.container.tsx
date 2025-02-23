import { useCallback } from 'react';
import { useSnapshot } from 'valtio';
import { Board } from './Board';
import { state } from '@/store';
import { actions } from '@/store/store';

export const BoardContainer: React.FC = () => {
	const snapState = useSnapshot(state);

	const isEmptyDeck = snapState.deck.length === 0;

	const handleClickDeck = useCallback(() => {
		actions.draw();
	}, []);

	return (
		<Board
			isEmptyDeck={isEmptyDeck}
			faceUp={snapState.faceUp}
			fields={snapState.fields}
			foundations={snapState.foundations}
			onClickDeck={handleClickDeck}
		/>
	);
};
