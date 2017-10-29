import {TYPED_WORD} from '../actions/index';

export default function (state = '', action){
    switch (action.type){
        case TYPED_WORD:
            return action.payload;
        default:
            return state;
    }
}