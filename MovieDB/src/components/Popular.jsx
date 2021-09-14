import React from 'react'
import Container from 'react-bootstrap/Container'

const Popular = ({ popmovies }) => {
	console.log(popmovies)
	return (
	  <div className="movie-list">
		{popmovies.results.map(popmovie => (
		  <div className="movie-preview" key={popmovie.id} >
			<h2>{ popmovie.title }</h2>
			<p></p>
		  </div>
		))}
	  </div>

	
	);
  }
   
  export default Popular;