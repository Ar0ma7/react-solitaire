import { styles } from './App.css';
import { BoardContainer } from '@/components/Board';

export const App: React.FC = () => {
	return (
		<div className={styles.container}>
			<BoardContainer />
		</div>
	);
};
