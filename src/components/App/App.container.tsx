import {
	Active,
	DndContext,
	DragEndEvent,
	MouseSensor,
	Over,
	useSensor,
	useSensors
} from '@dnd-kit/core';
import { useCallback, useLayoutEffect } from 'react';
import { snapshot } from 'valtio';
import { App } from './App';
import { AREA } from '@/constants';
import { actions, state } from '@/store/store';
import { Card } from '@/types';
import { validateMove } from '@/utils/feature/validate';

export const AppContainer: React.FC = () => {
	const sensors = useSensors(useSensor(MouseSensor, { activationConstraint: { distance: 5 } }));

	const getIsValidMove = useCallback((active: Active, over: Over) => {
		const snapState = snapshot(state);
		const field = snapState.fields[over.data.current?.areaIndex];
		const foundation = snapState.foundations[over.data.current?.areaIndex];

		let overAreaFrontCard: Card | undefined = undefined;
		let isEmpty: boolean = false;

		switch (over?.data.current?.area) {
			case AREA.FIELDS:
				if (field.length === 0) {
					isEmpty = true;
				} else {
					overAreaFrontCard = field[field.length - 1];
				}
				break;
			case AREA.FOUNDATIONS:
				if (foundation.length === 0) {
					isEmpty = true;
				} else {
					overAreaFrontCard = foundation[foundation.length - 1];
				}
				break;
		}

		if (isEmpty) return true;
		if (!overAreaFrontCard) return;

		const isValidMove = validateMove(
			{ suite: active.data.current?.suite, number: active.data.current?.number, isFront: true },
			overAreaFrontCard
		);

		return isValidMove;
	}, []);

	const handleDragEnd = (event: DragEndEvent) => {
		const { active, over } = event;

		if (!active || !over) return;

		const isValidMove = getIsValidMove(active, over);

		if (!isValidMove) return;

		switch (active.data.current?.area) {
			case AREA.FIELDS:
				actions.moveFromField(active.data.current?.areaIndex, {
					suite: active.data.current?.suite,
					number: active.data.current?.number,
					isFront: true
				});
				actions.moveToField(over.data.current?.areaIndex);
				break;
			// case AREA.FOUNDATIONS:
			// 	actions.removeFoundationCard(active.data.current?.areaIndex);
			// 	break;
		}
	};

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
