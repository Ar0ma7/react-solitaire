import { useMemo } from 'react';
import { styles } from './Card.css';
import { backImg, cardImage } from './images';

type Props = {
	suite: string;
	number: number;
	isFront: boolean;
};

export const Card: React.FC<Props> = ({ suite, number, isFront }) => {
	const image = useMemo(
		() => (isFront ? cardImage[suite][number - 1] : backImg),
		[isFront, number, suite]
	);

	return <img src={image} alt="" className={styles.img} />;
};
