import React from 'react'
import Container from 'react-bootstrap/Container'
import { useQuery } from 'react-query'
import { getMovies } from '../services/API'


const HomePage = () => {
    const { data, status } = useQuery('movies', getMovies);
    console.log(data);
	return (
		<Container className="py-3">
			<h1>Welcome!</h1>
		</Container>
	)
}

export default HomePage
