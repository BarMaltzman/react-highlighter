
import axios from 'axios';

export const FETCH_DATA = 'fetch_data';
export const TYPED_WORD = 'typed_word';
export function fetchData(){
    const request = axios.get('http://jsonplaceholder.typicode.com/comments?key=bimbamboom543895734');
    return {
        type: FETCH_DATA,
        payload: request
    }
}

export function typedWord(word){
    return{
        type: TYPED_WORD,
        payload: word
    }
}