import React, {Component} from 'react';
import {Fragment} from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import PostList from './PostList.jsx';
import BlogPost from './BlogPost.jsx'

class AppContainer extends Component {
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
                {/* <p>AppContainer is here!</p> */}
                {/* <Header/>
                <Footer/>
                <PostList/>
                <BlogPost/> */}
            </Fragment>
        )
    };
};

export default AppContainer;