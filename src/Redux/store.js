import {createStore} from 'redux';

import reducer from './Reducer/reducer';

const store = createStore(reducer);

// store.subscribe();

export default store;