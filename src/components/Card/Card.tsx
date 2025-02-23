import { DraggableAttributes } from '@dnd-kit/core';
import { SyntheticListenerMap } from '@dnd-kit/core/dist/hooks/utilities';
import { styles } from './Card.css';

type Props = {
	setNodeRef: (element: HTMLElement | null) => void;
	attributes: DraggableAttributes;
	listeners: SyntheticListenerMap | undefined;
	imageSrc: string;
	onClick: () => void;
};

export const Card: React.FC<Props> = ({ setNodeRef, attributes, listeners, imageSrc, onClick }) => {
	return (
		<img
			ref={setNodeRef}
			{...listeners}
			{...attributes}
			src={imageSrc}
			alt=""
			className={styles.img}
			onClick={onClick}
		/>
	);
};
