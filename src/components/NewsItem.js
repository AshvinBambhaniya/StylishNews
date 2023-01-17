import React from 'react'

const NewsItem = (props) => {

    let { title, description, imageUrl, newsUrl, author, date, source } = props;

    return (
        <div className='my-3'>
            <div className="card" style={{ backgroundColor: "#0f0f11b5" }}>
                <span className="position-absolute top-0 start-50 translate-middle badge rounded-pill text-bg-success">
                    {source}
                </span>
                <img src={imageUrl ? imageUrl : "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT8t6OuLV9qNq8qtjWxANyvYJZVkYwg87U5ug&usqp=CAU"} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title">{title}</h5>
                    <p className="card-text">{description}</p>
                    <p className="card-text"><small className="text-muted">By {author ? author : "Unknown"} on  {new Date(date).toGMTString()}</small></p>
                    <a href={newsUrl} target="_blank" rel="noreferrer" className="btn btn-sm btn-dark">Read More</a>
                </div>
            </div>
        </div>
    )
}

export default NewsItem
