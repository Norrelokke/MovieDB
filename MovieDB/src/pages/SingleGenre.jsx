import React from 'react'
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { getGenresById } from '../services/API'
import { useQuery } from 'react-query'
import { useHistory } from 'react-router'
import { useParams } from "react-router-dom";

const SingleGenre = () => {
	const { id } = useParams();

	const { data, error, isError, isLoading } = useQuery(['movies', id], () => {
		return getGenresById(id)
	})
	console.log(data)
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
			<Container className="movie-list"><h1>{id}</h1></Container>
			<Container className="movie-list">
				{isLoading && <h1>Loading...</h1>}
					{isError && <Alert variant="warning" className="my-4"><h1>{error.message}</h1></Alert>}
						{data && data.results.map((movie, index) => (
							
							<div className="movie-preview" key={movie.id} onClick={() => handleClick(movie.id)}>
								<img src={"https://image.tmdb.org/t/p/w200/" + movie.poster_path} alt="posterimg" />
								<p>{movie.original_title}</p>
							</div>
			))}
		</Container>
		</>
	)
}

export default SingleGenre
