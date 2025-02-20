import { useLayoutEffect } from 'react';
import { App } from './App';
import { actions } from '@/store/store';

export const AppContainer: React.FC = () => {
	useLayoutEffect(() => {
		actions.setInitialField();

		return () => {
			actions.reset();
		};
	}, []);
	return <App />;
};
