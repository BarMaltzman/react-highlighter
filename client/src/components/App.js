
import React, {Component} from 'react';
import TwoFieldsItemList from "./Two_Fields_Item_List";
import SearchBar from "./Search_Bar";
import {bindActionCreators} from 'redux';
import {connect} from 'react-redux';
import {fetchData} from '../actions';

class App extends Component {
    componentDidMount() {
        this.props.fetchData();
    }

    render() {
        return (
            <div>
            <SearchBar />
            <TwoFieldsItemList />
            </div>
    );
    }
}
function mapDispatchToProps(dispatch) {
    return bindActionCreators({fetchData}, dispatch);
}
export default connect(null, mapDispatchToProps)(App);