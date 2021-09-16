import React from 'react'
import Container from 'react-bootstrap/Container'
import GenreList from '../components/GenreList'
import { getGenres, getpopularMovies } from '../services/API'
import { useQuery } from 'react-query'
import Popular from '../components/Popular'
import { useParams } from 'react-router'

const SingleMovie = () => {
    const historyParam = useParams();
	const { data:genres } = useQuery('genres', getGenres);
	const { data:popmovies, status } = useQuery('popmovies', getpopularMovies);

	
		return (
			<Container className="py-3">
		
	<p>Single movie</p>
			</Container>
		)
}

export default SingleMovie
