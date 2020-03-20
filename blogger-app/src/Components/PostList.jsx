import React, {Component} from 'react';
import {Fragment} from 'react';

class PostList extends Component {

    render(){
        return(
            <Fragment>
                {/* Component Roll Call */}
                {/* <p>PostList is here!</p> */}
                {this.props.showMeWhatYouGot}
            </Fragment>
        )
    };
};

export default PostList;