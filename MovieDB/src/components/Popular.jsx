import React from 'react'
import { useHistory } from 'react-router';
import { useQuery } from 'react-query';
import { getpopularMovies } from '../services/API';
import Container from 'react-bootstrap/esm/Container';

const Popular = () => {
	const { data: popmovies, status } = useQuery('popmovies', getpopularMovies);
	const history = useHistory();
	console.log(popmovies)
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
				{popmovies.results.map(popmovie => (
					<div className="movie-preview" key={popmovie.id} onClick={() => handleClick(popmovie.id)} >
						<img src={"https://image.tmdb.org/t/p/w200/" + popmovie.poster_path} alt="posterimg" />
						<p>{popmovie.title}</p>
					</div>
				))}
			</Container>
		</>
	);
}

export default Popular;