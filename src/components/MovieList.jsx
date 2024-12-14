import React from 'react'
import {Row  } from "react-bootstrap";
import MovieCard from './MovieCard';
import AdvancedExample from './Pagination';


const MovieList = ({ movies, getPages , pageCount }) => {
  return (
    <Row className='mt-3'>
        {movies.length >= 1 ? (movies.map((mov) => {
          
         return(<MovieCard key={mov.id} mov={mov} />)

        })) : <h2> not found </h2>}
        <AdvancedExample getPages={getPages} pageCount={pageCount} />
    </Row>
  )
}

export default MovieList