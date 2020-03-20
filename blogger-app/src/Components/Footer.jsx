import React, {Component} from 'react';
import {Fragment} from 'react';

class Footer extends Component {
    constructor(props){
        super(props);
    };

    render(){
        return(
            <Fragment>
                {/* Component Roll Call */}
                {/* <p>Footer is here!</p> */}
                <h4>This site is created by Jeff Rashad Thomas</h4>
            </Fragment>
        )
    };
};

export default Footer;