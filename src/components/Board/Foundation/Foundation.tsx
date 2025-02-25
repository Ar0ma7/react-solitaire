import { useDroppable } from '@dnd-kit/core';
import { useMemo } from 'react';
import { styles } from './Foundation.css';
import { Card } from '@/components/Card';
import { CardSkeleton } from '@/components/CardSkeleton';
import { AREA, FOUNDATION_SUITE_ORDER } from '@/constants';
import { Card as CardType } from '@/types';

type FoundationProps = {
	foundation: readonly CardType[];
	areaIndex: number;
};

export const Foundation: React.FC<FoundationProps> = ({ foundation, areaIndex }) => {
	const foundationSuite = useMemo(() => FOUNDATION_SUITE_ORDER[areaIndex], [areaIndex]);

	const { setNodeRef } = useDroppable({
		id: `foundation-${areaIndex}`,
		data: {
			area: AREA.FOUNDATIONS,
			areaIndex,
			foundationCard: foundation[foundation.length - 1],
			foundationSuite
		}
	});

	return (
		<div ref={setNodeRef} className={styles.container}>
			{foundation.length ? (
				foundation.map((card, index) => (
					<div key={index} className={styles.cardWrapper}>
						<Card area={AREA.FOUNDATIONS} areaIndex={areaIndex} {...card} />
					</div>
				))
			) : (
				<CardSkeleton suite={foundationSuite} />
			)}
		</div>
	);
};
