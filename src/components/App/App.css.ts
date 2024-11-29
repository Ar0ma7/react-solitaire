import { style } from '@vanilla-extract/css';
import bg from '@/assets/images/bg.png';

export const styles = {
	container: style({
		backgroundImage: bg,
		minHeight: '100vh'
	})
};
