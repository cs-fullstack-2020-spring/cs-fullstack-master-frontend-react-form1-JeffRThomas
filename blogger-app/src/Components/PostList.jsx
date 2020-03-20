import React, {Component} from 'react';
import {Fragment} from 'react';

class PostList extends Component {
    constructor(props){
        super(props);
        this.state={
            BlogPosts:[],
        };
    };

    render(){
        return(
            <Fragment>
                {/* Component Roll Call */}
                {/* <p>PostList is here!</p> */}
            </Fragment>
        )
    };
};

export default PostList;