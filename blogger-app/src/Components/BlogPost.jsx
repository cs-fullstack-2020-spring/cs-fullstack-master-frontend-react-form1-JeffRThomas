import React, { Component } from 'react';
import { Fragment } from 'react';


class BlogPosts extends Component {
    constructor(props) {
        super(props);
        this.state = {
            BlogTitle: "",
            BlogPost: ""
        };
    };
    // Event Listener for BlogTitle Input Field
    userTitle = (event) => {
        console.log("New Title Keystroke");
        this.setState({ BlogTitle: event.target.value })
        console.log(this.state.BlogTitle);
    };

    // Event Listener for BlogPost Input Field
    userPost = (event) => {
        console.log("New Post Keystroke");
        this.setState({ BlogPost: event.target.value })
        console.log(this.state.BlogPost);
    };

    // Form Submission Handler & State Lift Up To Parent
    userSubmitBlog = (event) => {
        event.preventDefault();
        console.log("Blog Post Entered");
        console.log(this.state);
        this.props.callParentBack(this.state);
        this.setState({BlogTitle:"",BlogPost:""})
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
                            <input type="text" id="blogtitle" onChange={this.userTitle} value={this.state.BlogTitle}></input>
                        </div>

                        <div>
                            <label htmlFor="blogpost">Blog Post: </label>
                            <textarea type="text" id="blogpost" onChange={this.userPost} value={this.state.BlogPost}></textarea>
                        </div>

                        <button onClick={this.userSubmitBlog}>Submit Blog</button>
                    </fieldset>
                </form>
            </Fragment>
        )
    };
};

export default BlogPosts;