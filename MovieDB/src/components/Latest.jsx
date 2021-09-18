import React from 'react'
import { useHistory } from 'react-router';
import { useQuery } from 'react-query';
import { getlatestMovie } from '../services/API';
import Container from 'react-bootstrap/Container';
import Alert from 'react-bootstrap/Alert'

const Latest = () => {
	const { data: latestmovie, isLoading, isError } = useQuery('latestmovie', getlatestMovie);
	const history = useHistory();
	const handleClick = (movieId) => {
		if (movieId === undefined) {
			history.push(`/PageNotFound`);
		} else {
			history.push(`/movie/${movieId}`);
		}
	};
console.log(latestmovie)
	return (
		<>
			<Container className="movie-list"><h1>The latest Movie</h1></Container>
			<Container className="movie-list">
			{isLoading && <h1>Loading...</h1>}
			{isError && <Alert variant="warning" className="my-4"><h1>{error.message}</h1></Alert>}
				{latestmovie && 
					<div className="movie-preview" key={latestmovie.id} onClick={() => handleClick(latestmovie.id)} >
					<img src={latestmovie.poster_path ?  "https://image.tmdb.org/t/p/w200/" + latestmovie.poster_path :  "./assets/noimg.png" }  alt="posterimg" /> 
						<p>{latestmovie.title}</p>
					</div>
				}
			</Container>
		</>
	);
}

export default Latest;