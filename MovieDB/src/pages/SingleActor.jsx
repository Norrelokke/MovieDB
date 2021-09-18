import React from 'react'
import Container from 'react-bootstrap/Container'
import { getPerson, getMoviesWithPerson } from '../services/API'
import { useQuery } from 'react-query'
import { useParams } from 'react-router'

const Actor = () => {
	const { id } = useParams();
	const { data: person, isError, isLoading} = useQuery(['person', id], () => {
		return getPerson(id)
	})

const { data: movies} = useQuery(['movies', id], () => {
    return getMoviesWithPerson(id)
})
console.log(movies)
	return (
		<Container>

           {isLoading && <h1>Loading...</h1>}
			{isError && <Alert variant="warning" className="my-4"><h1>{error.message}</h1></Alert>}
			{person &&  
            <Container>
                <h1>{person.name}</h1>
                <img src={"https://image.tmdb.org/t/p/w200/" + person.profile_path} alt="profileimage" />
                <div className="Actor-details">
                    <h4>Also knows as {person.also_known_as}</h4>
                    <h4>Birthday: {person.birthday}</h4>
                    <h4>Homepage: {person.homepage}</h4>
                    <h4>Place of birth: {person.place_of_birth}</h4>
                </div>
                </Container>
            }
		</Container>
	)
}

export default Actor
