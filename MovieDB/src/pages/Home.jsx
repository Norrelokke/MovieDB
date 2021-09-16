import React from 'react'
import Container from 'react-bootstrap/Container'
import GenreList from '../components/GenreList'
import { getGenres, getpopularMovies } from '../services/API'
import { useQuery } from 'react-query'
import Popular from '../components/Popular'

const HomePage = () => {
  
	const { data:genres } = useQuery('genres', getGenres);
	const { data:popmovies, status } = useQuery('popmovies', getpopularMovies);

	
		return (
			<Container>

		{popmovies && 
	
		<div className="Home-movies"> 
			<h1>Popular Movies</h1>
		<Popular popmovies={popmovies}/>
		
		</div>}
			</Container>
		)
}

export default HomePage
