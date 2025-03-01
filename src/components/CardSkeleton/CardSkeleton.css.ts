import { style } from '@vanilla-extract/css';

export const styles = {
	wrapper: style({
		padding: '4%'
	}),
	skeleton: style({
		aspectRatio: '1 / 1.467',
		background: 'rgba(0, 0, 0, 0.3)',
		borderRadius: 5,
		display: 'grid',
		placeItems: 'center'
	}),
	suiteSymbol: style({
		color: 'rgba(0, 0, 0, 0.3)',
		fontSize: '5vh'
	})
};
