import { useDraggable } from '@dnd-kit/core';
import { useMemo } from 'react';
import { styles } from './Card.css';
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

export const Card: React.FC<Props> = ({ area, areaIndex, disableDrag, suite, number, isFront }) => {
	const { attributes, listeners, setNodeRef } = useDraggable({
		id: `${suite}-${number}`,
		data: {
			area,
			areaIndex,
			suite,
			number
		},
		disabled: disableDrag
	});

	const image = useMemo(
		() => (isFront ? cardImage[suite][number - 1] : backImg),
		[isFront, number, suite]
	);

	return (
		<img
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			src={image}
			alt=""
			className={styles.img}
		/>
	);
};
