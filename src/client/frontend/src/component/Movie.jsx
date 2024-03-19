import React from 'react'
import {moviesList} from "../data";
import RadioButton from './RadioButton';
import "../styles/Movie.css";
function Movie() {
  return (
    <div className='div'>
    <h1 className="SM_heading">Select a Movie</h1>
    <div className="SM_main_container">
 
      {moviesList.map((el, index) => {
        return (
          <RadioButton
            text={el}
            // changeSelection={handleChangeMovie}
            // data={movie}
            key={index}
            
          />
        );
      })}
    </div>
    </div>
  )
}

export default Movie
