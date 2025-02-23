import { useDroppable } from '@dnd-kit/core';
import { styles } from '../Board.css';
import { Card } from '@/components/Card';
import { CardSkeleton } from '@/components/CardSkeleton';
import { AREA } from '@/constants';
import { Card as CardType } from '@/types';

type FoundationProps = {
	foundation: readonly CardType[];
	areaIndex: number;
};

export const Foundation: React.FC<FoundationProps> = ({ foundation, areaIndex }) => {
	const { setNodeRef } = useDroppable({
		id: `foundation-${areaIndex}`
	});

	return (
		<div ref={setNodeRef} className={styles.foundation}>
			{foundation.length ? (
				foundation.map((card, index) => (
					<Card
						area={AREA.FOUNDATIONS}
						areaIndex={areaIndex}
						selfIndex={index}
						key={index}
						{...card}
					/>
				))
			) : (
				<CardSkeleton />
			)}
		</div>
	);
};
