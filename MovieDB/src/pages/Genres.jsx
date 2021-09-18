import React from 'react'
import Container from 'react-bootstrap/Container'
import { getGenres } from '../services/API'
import { useQuery } from 'react-query'
import GenreList from '../components/GenreList'

const MovieList = () => {

	const { data:genres } = useQuery('genres', getGenres);
	
		return (
			<Container className="py-3">
			{genres && <GenreList genres={genres}/>}
			</Container>
		)
	
  }
   
  export default MovieList;