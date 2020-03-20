import React, {Component} from 'react';
import {Fragment} from 'react';


class BlogPosts extends Component {
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
                {/* <p>BlogPost is here!</p> */}
            </Fragment>
        )
    };
};

export default BlogPosts;