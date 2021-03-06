import React, { Component } from 'react';
import { Fragment } from 'react';
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import PostList from './PostList.jsx';
import BlogPost from './BlogPost.jsx'

class AppContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BlogPosts:
                [
                    // Starter Data For Testing Logic Involving Shared State In Parent/Child Communication
                    // {
                    //     BlogTitle: "Sample Post 1",
                    //     BlogPost: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Tempora ut, ipsum excepturi praesentium veritatis quos exercitationem numquam non soluta. Fugiat quos culpa architecto id quibusdam eaque illo cum assumenda provident."
                    // },

                    // {
                    //     BlogTitle: "Sample Post 2",
                    //     BlogPost: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, nemo enim cumque ea officia similique est asperiores excepturi maiores dicta! Eius quibusdam optio, blanditiis voluptatum fugit asperiores perferendis rem distinctio."
                    // },

                    // {
                    //     BlogTitle: "Sample Post 3",
                    //     BlogPost: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet neque corrupti, repudiandae non libero dignissimos in ipsum minus amet? Laboriosam iure sed id atque fugiat aspernatur nesciunt, iste dolor cum!"
                    // }
                ],
        };
        console.log(this.state);// Check Starter Data For Blog Post Array
    };

    // Call Back Method To Handle Information Passed Up From Child
    addBlogPost = (newobj) => {
        console.log("BlogPost called me");
        this.state.BlogPosts.push(newobj);
        console.log(this.state);
    }

    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* <p>AppContainer is here!</p> */}
                <Header/>
                <Footer/>
                <PostList/>
                <BlogPost callParentBack={this.addBlogPost} />
                <PostList showMeWhatYouGot={this.state.BlogPosts}/>
            </Fragment>
        )
    };
};

export default AppContainer;