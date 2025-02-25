import { useDraggable } from '@dnd-kit/core';
import { useCallback, useMemo } from 'react';
import { snapshot } from 'valtio';
import { Card } from './Card';
import { backImg, cardImage } from './images';
import { AREA } from '@/constants';
import { state } from '@/store';
import { AreaName } from '@/types';

type Props = {
	area: AreaName;
	areaIndex?: number;
	selfIndex?: number;
	disableDrag?: boolean;
	suite: string;
	number: number;
	isFront: boolean;
};

export const CardContainer: React.FC<Props> = ({
	area,
	areaIndex,
	selfIndex,
	disableDrag,
	suite,
	number,
	isFront
}) => {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id: `${suite}-${number}`,
		data: {
			area,
			areaIndex,
			card: {
				suite,
				number,
				isFront
			}
		},
		disabled: disableDrag
	});

	const imageSrc = useMemo(
		() => (isFront ? cardImage[suite][number - 1] : backImg),
		[isFront, number, suite]
	);

	const handleClickCard = useCallback(() => {
		if (area === AREA.FIELDS) {
			if (isFront) return;

			const field = snapshot(state.fields)[areaIndex!];

			if (field.length - 1 !== selfIndex) return;

			// actions.flipFieldCard(areaIndex!);
		}
	}, [area, areaIndex, isFront, selfIndex]);

	return (
		<Card
			setNodeRef={setNodeRef}
			listeners={listeners}
			attributes={attributes}
			imageSrc={imageSrc}
			onClick={handleClickCard}
		/>
	);
};
