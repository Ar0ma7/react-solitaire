import { useDroppable } from '@dnd-kit/core';
import { styles } from './Field.css';
import { Card } from '@/components/Card';
import { AREA } from '@/constants';
import { Card as CardType } from '@/types';

type FieldProps = {
	areaIndex: number;
	field: readonly CardType[];
};

export const Field: React.FC<FieldProps> = ({ areaIndex, field }) => {
	const { setNodeRef } = useDroppable({
		id: `field-${areaIndex}`,
		data: { area: AREA.FIELDS, areaIndex, fieldCard: field[field.length - 1] }
	});

	return (
		<div ref={setNodeRef} className={styles.container}>
			{field.map((card, index) => (
				<div key={index} className={styles.cardWrapper} style={{ top: `${index * 5}%` }}>
					<Card area={AREA.FIELDS} areaIndex={areaIndex} {...card} disableDrag={!card.isFront} />
				</div>
			))}
		</div>
	);
};
