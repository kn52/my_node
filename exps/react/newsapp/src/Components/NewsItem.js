import React, { Component } from 'react'

export class NewsItem extends Component {
    render() {
        let {title,description,imageurl,newsUrl}=this.props;
        return (
            <div className="container my-3">
                <div className="card">
                    <img src={imageurl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title">{title}...</h5>
                        {/* <p className="card-text">{description}</p> */}
                        <a href={newsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-primary">Read Details</a>
                    </div>
                </div>
            </div>
        )
    }
}

export default NewsItem
