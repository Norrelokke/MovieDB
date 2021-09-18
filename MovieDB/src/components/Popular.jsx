import React from 'react'
import { useHistory } from 'react-router';
import { useQuery } from 'react-query';
import { getpopularMovies } from '../services/API';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'

const Popular = () => {
	const { data: popmovies, isLoading, isError } = useQuery('popmovies', getpopularMovies);
	const history = useHistory();
	const handleClick = (movieId) => {
		if (movieId === undefined) {
			history.push(`/PageNotFound`);
		} else {
			history.push(`/movie/${movieId}`);
		}
	};

	return (
		<>
			<Container className="movie-list"><h1>Popular Movies</h1></Container>
			<Container className="movie-list">
			{isLoading && <h1>Loading...</h1>}
			{isError && <Alert variant="warning" className="my-4"><h1>{error.message}</h1></Alert>}
				{popmovies?.results.map(popmovie => (
					<div className="movie-preview" key={popmovie.id} onClick={() => handleClick(popmovie.id)} >
					<img src={popmovie.poster_path ?  "https://image.tmdb.org/t/p/w200/" + popmovie.poster_path :  "./assets/noimg.png" }  alt="posterimg" /> 
						<p>{popmovie.title}</p>
					</div>
				))}
			</Container>
		</>
	);
}

export default Popular;