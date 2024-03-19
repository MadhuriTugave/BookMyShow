import React, { useEffect, useState } from 'react'
import "../styles/LastBooking.css";
import Loader from './Loader';
import{seats} from "../data"
function LastBooking() {
  const [lastBooking, setLastBooking] = useState("")
  const [loader, setLoader] = useState(false)
  // const context = useContext(BsContext);
  // const {lastBookingDatas } = context; 
  const getLastRecord = async () => {
    try {
      setLoader(true)
      const res = await fetch(
         `http://localhost:8080/api/booking`
         , {
          method: "GET",
        }
      );
      const data = await res.json();
      // console.log(data.data);
      setLastBooking(data.data)
    
      setLoader(false)
    } catch (error) {
      console.error(error);
    }
  }

  useEffect(() => {
    getLastRecord() //calling last booking api 
  }, []);

  // console.log(lastBooking.movie)
 
  return (
    <div className="last_booking_details_container_main">
      <h2 className="last_booking_details_header">Last Booking Details:</h2>
      { loader 
          ? <Loader/>
          :lastBooking  
              ? <div>
                  
                  <p className="slot" style={{ textAlign: "left" }}>
                    Slot: <span>{lastBooking?.slot}</span>
                  </p>
                  <p className="movie">
                    Movie: <span>{lastBooking?.movie}</span>
                  </p>
                  <div className="seats_container">
                    <p className="seats_header">Seats:</p>
                    <ul className="seats">
                      {seats.map((seat, index) => {
                        return (
                          <li className="seat_value" key={index}>
                             
                             {seat}: {Number(lastBooking ? lastBooking?.seats[seat] : "")}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                </div>
              : <p className="no_previous_booking_msg">No Booking Found!</p>
      }
  </div>
  )
}

export default LastBooking
