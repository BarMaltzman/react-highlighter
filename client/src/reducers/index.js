import {combineReducers} from 'redux';
import DataReducer from './dataReducer';
import SearchWordReducer from './selectedWordReducer';

const rootReducer = combineReducers({
    dataFetched: DataReducer,
    searchedWord: SearchWordReducer
});

export default rootReducer;