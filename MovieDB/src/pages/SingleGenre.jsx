import React from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { getGenresById } from '../services/API'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router'
import { useParams } from "react-router-dom";

const SingleGenre = () => {
	const historyParam = useParams();

	const { data, error, isError, isLoading } = useQuery(['movies'], () => {
		return getGenresById(historyParam.id)
	})
	const history = useHistory();

	const handleClick = (movieId) => {
		if (movieId === undefined) {
			history.push(`/PageNotFound`);
		} else {
			history.push(`/movie/${movieId}`);
		}
	};

	return (
		<Container className="py-3">
			<h1>{historyParam.id}</h1>
			{isLoading && <p>Loading...</p>}
			{isError && <Alert variant="warning" className="my-4"><h6>{error.message}</h6></Alert>}
			{data && data.results.map((movie, index) => (
				<div className="movie-preview" key={movie.id} onClick={() => handleClick(movie.id)}>
					<img src={"https://image.tmdb.org/t/p/w300/" + movie.backdrop_path} alt="posterimg" />
					<h4>{movie.original_title}</h4>
				</div>

			))}
		</Container>
	)
}

export default SingleGenre
