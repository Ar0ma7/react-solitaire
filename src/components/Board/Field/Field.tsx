import { useDroppable } from '@dnd-kit/core';
import { styles } from '../Board.css';
import { Card } from '@/components/Card';
import { AREA } from '@/constants';
import { Card as CardType } from '@/types';

type FieldProps = {
	areaIndex: number;
	field: readonly CardType[];
};

export const Field: React.FC<FieldProps> = ({ areaIndex, field }) => {
	const { setNodeRef } = useDroppable({
		id: `field-${areaIndex}`
	});

	return (
		<div ref={setNodeRef} className={styles.field}>
			{field.map((card, index) => (
				<div key={index} className={styles.cardWrapper} style={{ top: `${index * 5}%` }}>
					<Card area={AREA.FIELDS} areaIndex={areaIndex} {...card} />
				</div>
			))}
		</div>
	);
};
