import { style } from '@vanilla-extract/css';
import bg from '@/assets/images/bg.png';

export const styles = {
	container: style({
		backgroundImage: `url(${bg})`,
		minHeight: '100vh'
	})
};
