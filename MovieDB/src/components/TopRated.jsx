import React from 'react'
import Container from 'react-bootstrap/Container'

const TopRated = ({ TopRatedmovies }) => {
	console.log(TopRatedmovies)
	return (
	  <div className="movie-list">
		{TopRatedmovies.results.map(TopRatedmovie => (
		  <div className="movie-preview" key={TopRatedmovie.id} >
			<h2>{ TopRatedmovie.title }</h2>
			<p></p>
		  </div>
		))}
	  </div>

	
	);
  }
   
  export default TopRated;