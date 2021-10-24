import React, {Component} from "react";
import axios from "axios";
import "./DetailPost.css";

class DetailPost extends Component {
    constructor(props) {
        super(props);
        this.state = {
            detailPost: {
                title: "",
                body: ""
            }
        }
    }


    componentDidMount() {
        let postId = this.props.match.params.postId;
        axios.get(`http://localhost:3004/posts/${postId}`)
        .then(result => {
            this.setState({
                detailPost: {
                    title: result.data.title,
                    body: result.data.body
                }
            })
        })
    }
    render() {
        return(
            <div className="detail__post">
                <h1>Detail Post</h1>
                <h3>{this.state.detailPost.title}</h3>
                <p>{this.state.detailPost.body}</p>
            </div>
        )
    }
}

export default DetailPost;