import React from 'react'
import Container from 'react-bootstrap/Container'
import { useHistory } from 'react-router';

const GenreList = ({ genres }) => {
    const history = useHistory();

    const handleClick = (genreId) => {
      if (genreId === undefined) {
        history.push(`/PageNotFound`);
      } else {
        history.push(`/genres/${genreId}`);
      }
    };


	return (
	  <div className="genre-list">
		{genres.genres.map(genre => (
		  <div 
       className="genre"
           key={genre.id}
           onClick={() => handleClick(genre.id)} 
           >
			<h5>{ genre.name }</h5>
			<p></p>
		  </div>
		))}
	  </div>

	);
  }
   
  export default GenreList;