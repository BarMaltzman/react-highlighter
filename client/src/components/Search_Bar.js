
import React, { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import {typedWord} from "../actions/index";



class Search_Bar extends Component{
    constructor(props) {
        super(props);

        this.state = { term: "" };


    }
    render(){
        return(
            <div className="search-bar form-control">
                <input
                        onChange = {event=> {
                                this.props.typedWord(event.target.value);
                        }}
                />
            </div>
        )
    }
}


function mapDispathToProps(dispatch){
    return bindActionCreators({typedWord}, dispatch);
}
export default connect (null, mapDispathToProps)(Search_Bar)