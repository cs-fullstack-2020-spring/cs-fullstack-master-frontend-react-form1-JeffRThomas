import React, { Component } from 'react';
import { Fragment } from 'react';
import PersonStats from './PersonStats'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    };

    userStats = (state) => {
        this.setState(state);
        console.log("My child actually called me back")
        console.log(state);
    };

    render() {
        return (
            <Fragment>
                {/* "AppContainer is here!" */}
                <p>Hello {this.state.Name}. Your age is {this.state.Age} and you are feeling {this.state.Feeling}.</p>
                <PersonStats callBackNumber={this.userStats} />
            </Fragment>
        )
    };
};

export default AppContainer;