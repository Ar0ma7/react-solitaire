import { style } from '@vanilla-extract/css';

export const styles = {
	container: style({
		display: 'grid',
		gridTemplateColumns: '1fr var(--grid-column-size) 1fr',
		gap: '5%',
		padding: '50px',
		aspectRatio: '1.661 / 1',
		maxWidth: '90vw',
		maxHeight: '90vh',
		margin: '0 auto'
	}),
	deck: style({
		display: 'grid',
		alignContent: 'start',
		gridTemplateRows: 'repeat(2, auto)'
	}),
	row: style({
		display: 'grid',
		gridTemplateColumns: 'repeat(var(--column-size), 1fr)'
	}),
	faceUp: style({
		position: 'relative'
	}),
	cardWrapper: style({
		selectors: {
			'&:not(:first-child)': {
				position: 'absolute'
			}
		}
	}),
	foundation: style({
		display: 'grid',
		gridTemplateRows: 'repeat(4, auto)',
		alignContent: 'start',
		gap: '10px'
	})
};
