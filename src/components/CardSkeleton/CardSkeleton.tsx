import { styles } from './CardSkeleton.css';
import { SUITE_SYMBOL } from '@/constants';
import { Suite } from '@/types';

type Props = {
	suite: Suite;
};

export const CardSkeleton: React.FC<Props> = ({ suite }) => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.skeleton}>
				<span className={styles.suiteSymbol}>{SUITE_SYMBOL[suite]}</span>
			</div>
		</div>
	);
};
