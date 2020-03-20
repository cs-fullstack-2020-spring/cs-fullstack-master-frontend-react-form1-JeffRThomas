import React, { Component } from 'react';
import { Fragment } from 'react';


class BlogPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BlogPosts: [],
        };
    };

    userTitle=()=>{
        console.log("New Title Keystroke");
    };

    userPost=()=>{
        console.log("New Post Keystroke");
    };

    userSubmitBlog=(event)=>{
        event.preventDefault();
        console.log("Blog Post Entered");
    };


    render() {
        return (
            <Fragment>
                {/* Component Roll Call */}
                {/* <p>BlogPost is here!</p> */}
                <form>
                    <fieldset>
                        <legend>Enter Your Post</legend>
                        <div>
                            <label htmlFor="blogtitle">Blog Title: </label>
                            <input type="text" id="blogtitle" onChange={this.userTitle} ></input>
                        </div>

                        <div>
                            <label htmlFor="blogpost">Blog Post: </label>
                            <textarea type="text" id="blogpost" onChange={this.userPost} ></textarea>
                        </div>

                        <button onClick={this.userSubmitBlog}>Submit Blog</button>
                    </fieldset>
                </form>
            </Fragment>
        )
    };
};

export default BlogPosts;