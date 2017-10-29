import React, {Component} from 'react';
import { connect } from 'react-redux';
import ListItem from './List_Item';

class Two_Fields_Item_List extends Component{

    renderFilteredList(){
        const dataFetched = this.props.dataFetched;
        const searchedWord = this.props.searchedWord;
        return dataFetched.map(objects=>{
                return objects.map(singleObject=>{
                    if((singleObject.body.includes(searchedWord) || singleObject.name.includes(searchedWord)))
                return <div>
                            <ListItem
                                searchedWord = {searchedWord}
                                secondArgument = {singleObject.body}
                            />
                            <ListItem
                                searchedWord = {searchedWord}
                                secondArgument = {singleObject.name}
                            />
                            <hr/>
                        </div>

                 })

        })
            }
    render(){
        return(
            <div>
                <ul className="list-group col-sm-4">
                    <hr/>
                    {this.renderFilteredList()}
                </ul>
            </div>
        )
    }
}

function mapStateToProps (state){
    return {
        dataFetched: state.dataFetched,
        searchedWord: state.searchedWord
    };
}
export default connect (mapStateToProps)(Two_Fields_Item_List)