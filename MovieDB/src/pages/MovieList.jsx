import React from 'react'
import Container from 'react-bootstrap/Container'
import { getpopularMovies } from '../services/API'
import { useQuery } from 'react-query'
import Popular from '../components/Popular'

const MovieList = () => {
	const { data:popmovies, status } = useQuery('popmovies', getpopularMovies);
		console.log(popmovies);
	
		return (
			<Container className="py-3">
			{popmovies && <Popular popmovies={popmovies}/>}

			</Container>
		)
	
  }
   
  export default MovieList;