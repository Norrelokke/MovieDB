import React from 'react'
import { useHistory } from 'react-router';
import { useQuery } from 'react-query';
import { getpopularMovies } from '../services/API';

const Popular = () => {
	const { data:popmovies, status } = useQuery('popmovies', getpopularMovies);
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
		<div className="movie-list">
			{popmovies.results.map(popmovie => (

				<div className="movie-preview" key={popmovie.id} onClick={() => handleClick(popmovie.id)} >

					<img src={"https://image.tmdb.org/t/p/w200/" + popmovie.poster_path} alt="posterimg" />
					<h4>{popmovie.title}</h4>
				</div>
			))}
		</div>


	);
}

export default Popular;