import React from 'react'
import Container from 'react-bootstrap/Container'



const Movie = ({movie}) => {
	console.log(movie)
	return (

	<p>h1 {movie.original_title} </p>
	
	);
}

export default Movie
