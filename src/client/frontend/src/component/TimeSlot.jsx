import React from 'react'
import {slots} from "../data"
import RadioButton from './RadioButton';
import "../styles/Timeslot.css"
function TimeSlot() {

    const handleChangeTimeOnSubmit = (value) => {
        // changeTime(value);
    
        //setting slot in localstorage
        window.localStorage.setItem("slot", value);
      };
  return (
    
     <>
      <div className="Slot_container">
        <h1 className="TS_heading">Select a Time </h1>
        <div className="TS_main_container">
          {slots.map((el, index) => {
            return (
              <RadioButton
                text={el}
                changeSelection={handleChangeTimeOnSubmit}
                // data={time}
                key={index}
              />
            );
          })}
        </div>
      </div>
    </>
    
  )
}

export default TimeSlot
