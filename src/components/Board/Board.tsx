import { Card, FaceDownCard } from '../Card';
import { CardSkeleton } from '../CardSkeleton';
import { styles } from './Board.css';
import { Field } from './Field/Field';
import { Foundation } from './Foundation';
import { AREA, FIELD_COLUMN } from '@/constants';
import { Card as CardType } from '@/types';
import { DeepReadonly } from '@/utils/type';

type Props = {
	isEmptyDeck: boolean;
	faceUp: DeepReadonly<CardType[]>;
	fields: DeepReadonly<CardType[][]>;
	foundations: DeepReadonly<CardType[][]>;
	onClickDeck: () => void;
};

export const Board: React.FC<Props> = ({
	isEmptyDeck,
	faceUp,
	fields,
	foundations,
	onClickDeck
}) => {
	const reversedFaceUp = [...faceUp].reverse();

	return (
		<div
			className={styles.container}
			style={{ '--grid-column-size': `${FIELD_COLUMN}fr` } as React.CSSProperties}
		>
			<div className={styles.deck}>
				<div onClick={onClickDeck}>{isEmptyDeck ? <CardSkeleton /> : <FaceDownCard />}</div>
				<div className={styles.faceUp}>
					{reversedFaceUp.map((card, index) => (
						<div key={index} className={styles.cardWrapper} style={{ top: `${index * 20}%` }}>
							<Card
								area={AREA.FACE_UP}
								{...card}
								disableDrag={index !== reversedFaceUp.length - 1}
							/>
						</div>
					))}
				</div>
			</div>
			<div className={styles.row} style={{ '--column-size': FIELD_COLUMN } as React.CSSProperties}>
				{fields.map((field, columnIndex) => (
					<Field key={columnIndex} areaIndex={columnIndex} field={field} />
				))}
			</div>
			<div className={styles.foundation}>
				{foundations.map((foundation, index) => (
					<Foundation key={index} areaIndex={index} foundation={foundation} />
				))}
			</div>
		</div>
	);
};
