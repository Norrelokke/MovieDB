import React from 'react'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router';

const GenreList = ({ genres }) => {
    const history = useHistory();

    const handleClick = (genreName) => {
      if (genreName === undefined) {
        history.push(`/PageNotFound`);
      } else {
        history.push(`/genres/${genreName}`);
      }
    };


	return (
	  <div className="genre-list">
		{genres.genres.map(genre => (
		  <div 
       className="movie-preview"
           key={genre.id}
           onClick={() => handleClick(genre.name)} 
           >
			<h6>{ genre.name }</h6>
			<p></p>
		  </div>
		))}
	  </div>

	);
  }
   
  export default GenreList;