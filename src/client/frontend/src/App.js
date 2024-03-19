
import './App.css';
import LastBooking from './component/LastBooking';
import Movie from './component/Movie';
import SeatComponent from './component/SeatComponent';
import TimeSlot from './component/TimeSlot';

function App() {
  return (
    <div className="App">
      <div className='components'>
     <Movie/>
     <hr className='hori'></hr>
      <TimeSlot/>
      <hr className='hori'></hr>
     <SeatComponent/>
      </div>
      <hr className='hori'></hr>
      <div>
       
        <LastBooking/></div>
    </div>
  );
}

export default App;
