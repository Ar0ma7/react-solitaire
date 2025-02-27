import { styles } from './Card.css';
import { backImg } from './images';

export const FaceDownCard: React.FC = () => {
	return <img src={backImg} alt="" className={styles.img} />;
};
