import React, {Component} from 'react';
import {Fragment} from 'react';

class Header extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
            <Fragment>
                {/* Component Roll Call */}
                {/* <p>Header is here!</p> */}
                <h1>My Blog</h1>
            </Fragment>
        )
    };
};

export default Header;