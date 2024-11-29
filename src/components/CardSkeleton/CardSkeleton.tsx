import { styles } from './CardSkeleton.css';

export const CardSkeleton: React.FC = () => {
	return (
		<div className={styles.wrapper}>
			<div className={styles.skeleton}></div>
		</div>
	);
};
