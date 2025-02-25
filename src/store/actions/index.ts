import { deckActions } from './deckActions';
import { fieldActions } from './fieldActions';
import { foundationActions } from './foundationActions';
import { storeActions } from './storeActions';

export const actions = {
	...storeActions,
	...deckActions,
	...fieldActions,
	...foundationActions
};
