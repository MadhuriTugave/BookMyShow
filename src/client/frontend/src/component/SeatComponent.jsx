import React from 'react'
import { seats} from '../data';
import "../styles/Seats.css";
// import selectSeatsInput from "./selectSeatsInput"
function SeatComponent() {
  return (
    <>
      <div className="SS_wrapper">
        <h1 className="SS_heading">Select Seats</h1>
        <div className="SS_main_container">
          {seats.map((el, index) => {
            console.log(el);
            return (
            //     <selectSeatsInput
            //     // seat={seat}
            //     key={index}
            //     index={index}
            //     // changeSeats={changeSeats}
            //     // noOfSeat={noOfSeat}
            //     text={el ?? ""}
            //     // changeNoOfSeats={changeNoOfSeats}
            //   />
            <>
            <div className='heading'>
           <li>{el}</li>
            </div>
          

            </>
           
            );
          })}
        </div>
      </div>
    </>
  )
}

export default SeatComponent
