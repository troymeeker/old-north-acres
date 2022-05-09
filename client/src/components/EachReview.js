import React from 'react'

function EachReview({review}){
    const {username, description, rating } = review;
    return (
        <div>
            <p>Written by: {username}</p>
            <p>{description}</p>
            <p>Rating: {rating}</p>
            <p> Lodge: {} </p>


        </div>
    )
}

export default EachReview;