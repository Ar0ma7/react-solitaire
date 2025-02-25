import { useDraggable } from '@dnd-kit/core';
import { useMemo } from 'react';
import { Card } from './Card';
import { backImg, cardImage } from './images';
import { AreaName } from '@/types';

type Props = {
	area: AreaName;
	areaIndex?: number;
	disableDrag?: boolean;
	suite: string;
	number: number;
	isFront: boolean;
};

export const CardContainer: React.FC<Props> = ({
	area,
	areaIndex,
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

	return (
		<Card
			setNodeRef={setNodeRef}
			listeners={listeners}
			attributes={attributes}
			imageSrc={imageSrc}
		/>
	);
};
