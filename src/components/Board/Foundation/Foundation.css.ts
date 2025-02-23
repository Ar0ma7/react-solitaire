import { style } from '@vanilla-extract/css';

export const styles = {
	container: style({
		position: 'relative'
	}),
	cardWrapper: style({
		selectors: {
			'&:not(:first-child)': {
				position: 'absolute',
				top: '0',
				left: '0'
			}
		}
	})
};
