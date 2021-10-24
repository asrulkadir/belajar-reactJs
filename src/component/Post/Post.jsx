import React from "react";

const Post = (props) => {
    return(
        <div className="blog__post">
            <div className="blog__img-thumb">
                <img src="https://placeimg.com/200/150/tech" alt="dummy" />
            </div>
            <div className="blog__content">
                <p className="blog__title" onClick={() => props.goDetail(props.data.id)}>{props.data.title}</p>
                <p className="blog__desc">{props.data.body}</p>
                <button className="update" onClick={() => props.update(props.data)}>Update</button>
                <button className="remove" onClick={() => props.remove(props.data.id)}>Remove</button>
            </div>
        </div>
    )
}

export default Post;