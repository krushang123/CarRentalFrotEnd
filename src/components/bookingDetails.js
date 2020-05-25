import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import axios from "axios";

const useStyles = theme => ({
  border: {
    maxWidth: 1000,
    flexGrow: 1,
    margin: 'auto',
    textAlign: 'center',
    height: 100,
    
  },
  
  
});

class BookingTable extends Component {
  constructor(props) {
    super(props);
    this.state = {
      bookings: []
    }
  }
  componentDidMount = () => {
    this.getBookingModel();
  };
  getBookingModel = () => {
    axios.get("https://wp-car-rental.herokuapp.com/api/cars/"+this.props.id)
    .then(response => {
      const data = response.data;
      if (data !== null || data !== undefined) {
        this.setState({ bookings: data.bookings})
      }
      console.log(data);
     })
    .catch((error) => {
      alert('Error retrieving data!!');
    })
  };

  displayTableData()  {
    if (!this.state.bookings.length) return null;
    return (this.state.bookings.map((booking, index) => {
          return (<tr key={index}>
            <td>{booking.user.name}</td>
            <td>{booking.user.contactNumber}</td>
            <td>{booking.issueDate}</td>
            <td>{booking.returnDate}</td>
          </tr>)
    }));
  };

 
    render (){
        const {classes} = this.props;

        return (
            <TableContainer component={Paper} className={classes.border} >
            <Table className={classes.table } aria-label="simple table" >
                <TableHead variant='head'>
                <TableRow >
                    <TableCell align="center">User Name</TableCell>
                    <TableCell align="center">Phone Number</TableCell>
                    <TableCell align="center">Issuse Date</TableCell>
                    <TableCell align="center">Return Date</TableCell>
                    
                </TableRow>
                </TableHead>
                <TableBody align="center">
                      {this.displayTableData()}
                </TableBody>


                </Table>
            </TableContainer>
        );
    }
}
export default withStyles(useStyles)(BookingTable);