import React from 'react'
import { useHistory } from 'react-router';
import Container from 'react-bootstrap/Container'
import Alert from 'react-bootstrap/Alert'
import { getMovie, getMovieCredits } from '../services/API'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

const SingleMovie = () => {
	const { id } = useParams();
	const { data, error, isError, isLoading } = useQuery(['movies', id], () => {
		return getMovie(id)
	})
	const { data: credits, isError: Error, isLoading: Loading } = useQuery(['credits', id], () => {
		return getMovieCredits(id)
	})
console.log(credits)
const history = useHistory();
const handleClick = (actorId) => {
	if (actorId === undefined) {
		history.push(`/PageNotFound`);
	} else {
		history.push(`/actor/${actorId}`);
	}
};
	return (
		<Container className="py-3">
			{isLoading && <h1>Loading...</h1>}
			{isError && <Alert variant="warning" className="my-4"><h1>{error.message}</h1></Alert>}
			{data &&
				<>

					<Container className="Movie-details">
						<div className="backdrop"><img src={"https://image.tmdb.org/t/p/w300/" + data.backdrop_path} alt="posterimage" /></div>
						<div className="Movie-details-text">	<h1>{data.title}</h1>
							<p>{data.tagline}</p>
							<p>{data.overview}</p> </div>
						<img src={"https://image.tmdb.org/t/p/w200/" + data.poster_path} alt="posterimage" />

					</Container>
				</>}

			{Loading && <h1>Loading...</h1>}
			{Error && <Alert variant="warning" className="my-4"><h1>{error.message}</h1></Alert>}
			<Container  className="Movie-details">
			<h2>Actors:</h2>
			{credits &&
		
				credits.cast.map(actor => (
	
					<div className="movie-preview" key={actor.id} onClick={() => handleClick(actor.id)} >
						<p>{actor.name}</p>
					</div>
				))
		    }
		</Container>
		</Container>
	)
}

export default SingleMovie
