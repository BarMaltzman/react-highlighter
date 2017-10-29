import Highlighter from 'react-highlight-words';
import React from 'react';
const ListItem = ({searchedWord, secondArgument})=> {
        if(!searchedWord)
            searchedWord = '';
        if (!secondArgument)
            return null;
        return(
            <li>
            <Highlighter
                    highlightClassName='YourHighlightClass'
                    searchWords={[searchedWord]}
                    textToHighlight={secondArgument}
            />
</li>
        )
}
export default ListItem;