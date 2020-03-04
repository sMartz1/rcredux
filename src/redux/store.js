import { createStore, combineReducers} from 'redux';
import currentItem from './reducers/currentItem';
import suggestions from './reducers/suggestions';
import results from './reducers/results';
const reducer = combineReducers({
         currentItem,
         suggestions,
         results
     }
	);
const store = createStore(reducer);

export default store;