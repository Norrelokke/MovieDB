import React from 'react'
import Container from 'react-bootstrap/Container'

const Latest = ({ latestmovies }) => {

	return (
	  <div className="movie-list">
	
			<h2>{ latestmovies.original_title }</h2>
	
	  </div>

	
	);
  }
   
  export default Latest;