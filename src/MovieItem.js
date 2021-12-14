import React from 'react'

const MovieItem = (props) => {
    return (
        <article className="movieItem">
            <img src={props.image} alt={props.name} />
            <h4>{props.name}</h4>
            <h4>{props.popularity}</h4>
        </article>
    )
}

export default MovieItem