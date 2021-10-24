import React, {Component, Fragment} from "react";
import Post from "../../../component/Post/Post";
import "./BlogPost.css";
// import axios from "axios";

import {withRouter} from 'react-router-dom';
import API from "../../../services";

class BlogSpot extends Component {
    constructor(props) {
        super(props);
        this.state = {
            post: [],
            formBlogSpot: {
                userId: 1,
                id: 1,
                title: "",
                body: ""
            },
            isUpdate: false,
            comments: []
        }

        this.handleDetail = this.handleDetail.bind(this)

    }

    getPostAPI = () => {
        API.getNewsBlog()
        .then(result => {
            this.setState({
                post: result
            })
        })
        .catch(err => {
            alert(err)
        })

        API.getComments().then(result => {
            this.setState({
                comments: result
            })
        })
    }

    postDataAPI = () => {
        API.postNewsBlog(this.state.formBlogSpot)
        .then(result => {
            this.getPostAPI();
            this.setState({
                formBlogSpot: {
                    userId: 1,
                    id: 1,
                    title: "",
                    body: ""
                }
            })
        })
    }

    putDataAPI = () => {
        API.updateNewsBlog(this.state.formBlogSpot, this.state.formBlogSpot.id)
        .then(result => {
            this.getPostAPI();
            this.setState({
                formBlogSpot: {
                    userId: 1,
                    id: 1,
                    title: "",
                    body: ""
                },
                isUpdate: false
            })
        })
    }

    handleRemove = (dataId) => {
        API.deleteNewsBlog(dataId)
        .then(result => {
            this.getPostAPI();
        })
    }

    handelUpdate = (data) => {
        this.setState({
            formBlogSpot: data,
            isUpdate: true
        })
    }

    handleOnChange = (event) => {
        let formBlogSpotNew = {...this.state.formBlogSpot};
        let timestamp = new Date().getTime();
        if(!this.state.isUpdate) {
            formBlogSpotNew["id"] = timestamp;
        }
        formBlogSpotNew[event.target.name] = event.target.value;
        this.setState({
            formBlogSpot: formBlogSpotNew
        })
    }

    handleSubmit = () => {
        if(this.state.isUpdate) {
            this.putDataAPI();
        } else {
            this.postDataAPI();
        }
    }

    handleDetail = (id) => {
        this.props.history.push(`/detail-post/${id}`)
    }

    componentDidMount() {
        // fetch('https://jsonplaceholder.typicode.com/posts')
        // .then(response => response.json())
        // .then(json => {
        //     this.setState({
        //         post: json
        //     })
        // })
        this.getPostAPI();
    }

    render() {
        return(
            <Fragment>
                <p>Halaman Blog Spot</p>
                <hr />
                <p className="blog__section__title">Blog Spot</p>
                <div className="form__add__post">
                    <label htmlFor="title">Title</label>
                    <input type="text" value={this.state.formBlogSpot.title} name="title" placeholder="Add Title" className="input__title" onChange={this.handleOnChange} />
                    <label htmlFor="body">Blog Content</label>
                    <textarea name="body" value={this.state.formBlogSpot.body} id="body" cols="30" rows="10" placeholder="Add Text" onChange={this.handleOnChange}></textarea>
                    <button className="btn__submit" onClick={this.handleSubmit}>Simpan</button>
                </div>
                {/* {
                    this.state.comments.map(comment => {
                        return <p>{comment.name} - {comment.email}</p>
                    })
                } */}
                {
                    this.state.post.map(post => {
                        return  <Post key={post.id} data={post} remove={this.handleRemove} update={this.handelUpdate} goDetail={this.handleDetail} />
                    })
                }
            </Fragment>
        )
    }
}

export default withRouter(BlogSpot);