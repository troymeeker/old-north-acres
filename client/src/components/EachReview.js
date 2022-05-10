import React from 'react'

function EachReview({review}){

    const {username, description, rating, lodging_id } = review;
    return (
        <div className='each-review'>
            <p>Written by: {username}</p>
            {/* author = currentUser.username */}
            <p>{description}</p>
            <p>Rating: {rating}</p>
            <p> Lodge: {lodging_id} </p>

        <button>EDIT REVIEW</button>
        <button>DELETE REVIEW</button>
        </div>
    )
}

export default EachReview;