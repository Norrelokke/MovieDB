import React from 'react'
import Container from 'react-bootstrap/Container'
import { getpopularMovies, getlatestMovies,getTopRatedMovies} from '../services/API'
import { useQuery } from 'react-query'
import Popular from '../components/Popular'
import Latest from '../components/Latests'
import TopRated from '../components/TopRated'

const MovieList = () => {
	const { data:popmovies, status } = useQuery('popmovies', getpopularMovies);
	const { data:latestmovies} = useQuery('latestmovies', getlatestMovies);
	const { data:TopRatedmovies} = useQuery('TopRatedmovies', getTopRatedMovies);
	
	
		return (
			<Container className="py-3">
			{popmovies && <Popular popmovies={popmovies}/>}
			{latestmovies && <Latest latestmovies={latestmovies}/>}
			{TopRatedmovies && <TopRated TopRatedmovies={TopRatedmovies}/>}
			</Container>
		)
	
  }
   
  export default MovieList;