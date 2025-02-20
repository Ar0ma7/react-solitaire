import { DndContext, DragEndEvent } from '@dnd-kit/core';
import { useLayoutEffect } from 'react';
import { App } from './App';
import { actions } from '@/store/store';

export const AppContainer: React.FC = () => {
	const handleDragEnd = (event: DragEndEvent) => {
		console.log(event);
	};

	useLayoutEffect(() => {
		actions.setInitialField();

		return () => {
			actions.reset();
		};
	}, []);

	return (
		<DndContext onDragEnd={handleDragEnd}>
			<App />
		</DndContext>
	);
};
