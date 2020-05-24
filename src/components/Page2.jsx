import React, {Component} from 'react';
import CarDetail from './carDetails';
import BookingTable from './bookingDetails';
import CarCard2 from './CarCard2';

class Page2 extends Component {
    render(){
      return (
        <div>
          <CarCard2/>
          <CarDetail />
          <BookingTable />
        </div>
      );
  
  }
}
   
 

export default Page2;
