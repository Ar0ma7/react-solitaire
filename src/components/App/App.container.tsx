import { DndContext, DragEndEvent, MouseSensor, useSensor, useSensors } from '@dnd-kit/core';
import { useCallback, useLayoutEffect } from 'react';
import { snapshot } from 'valtio';
import { App } from './App';
import { AREA } from '@/constants';
import { actions, state } from '@/store';
import { validateMoveToField, validateMoveToFoundation } from '@/utils/feature/validate';

export const AppContainer: React.FC = () => {
	const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 5 } }));
	const handleDragEnd = useCallback((event: DragEndEvent) => {
		const { active, over } = event;
		console.log({ active, over });

		if (!active || !over) return;

		switch (active.data.current?.area) {
			case AREA.FACE_UP:
				actions.moveFromFaceUp();
				break;
			case AREA.FIELDS:
				actions.moveFromField(active.data.current?.areaIndex, active.data.current.card);
				break;
		}

		let isValidMove: boolean = false;

		switch (over.data.current?.area) {
			case AREA.FIELDS:
				if (
					validateMoveToField({
						movingCard: active.data.current?.card,
						fieldCard: over.data.current.fieldCard
					})
				)
					isValidMove = true;
				break;
			case AREA.FOUNDATIONS: {
				const movingCardSnap = snapshot(state.movingCardList);

				if (
					movingCardSnap.length === 1 &&
					validateMoveToFoundation({
						movingCard: active.data.current?.card,
						foundationCard: over.data.current.foundationCard,
						foundationSuite: over.data.current.foundationSuite
					})
				)
					isValidMove = true;
				break;
			}
		}

		if (isValidMove) {
			switch (active.data.current?.area) {
				case AREA.FACE_UP:
					actions.addFaceUpAfterMove();
					break;
				case AREA.FIELDS:
					actions.flipFieldCard();
					break;
			}

			switch (over.data.current?.area) {
				case AREA.FIELDS:
					actions.moveToField(over.data.current?.areaIndex);
					break;
				case AREA.FOUNDATIONS:
					actions.moveToFoundation(over.data.current?.areaIndex);
					break;
			}
		} else {
			switch (active.data.current?.area) {
				case AREA.FACE_UP:
					actions.moveToFaceUp();
					break;
				case AREA.FIELDS:
					actions.moveToField(active.data.current?.areaIndex);
					break;
				case AREA.FOUNDATIONS:
					actions.moveToFoundation(active.data.current?.areaIndex);
					break;
			}
		}
		console.log(snapshot(state));
	}, []);

	useLayoutEffect(() => {
		actions.setInitialField();

		return () => {
			actions.reset();
		};
	}, []);

	return (
		<DndContext sensors={sensors} onDragEnd={handleDragEnd}>
			<App />
		</DndContext>
	);
};
