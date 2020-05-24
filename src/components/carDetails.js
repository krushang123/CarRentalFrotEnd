import React, {Component} from 'react';
import { withStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
//import PropTypes from 'prop-types';
import axios from "axios";


const useStyles = theme => ({
  root: {
    maxWidth: 1000,
    flexGrow: 1,
    marginTop: 150,
    margin: 'auto',
  },
  title: {
    fontSize: 14,
  }
});

class CarDetail extends Component {
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
    axios.get("https://wp-car-rental.herokuapp.com/api/bookings")
    .then(response => {
      const data = response.data;
      this.setState({ bookings: data})
      console.log(data);
      console.log('Data has been recevied!!');
      
    })
    .catch((error) => {
      alert('Error retrieving data!!');
    })
  }
  displayvehicleData()  {
    if (!this.state.bookings.length) return null;
    return (this.state.bookings.map((booking, index) => {
      return (
      <div key={index}>
      <h5>{booking.car.vehicleNumber} </h5>
      </div> )
    }));
  }
  render(){
    const {classes} = this.props;
 
  
    return (
      <Card className={classes.root}>
        <CardActions>
          <Button size="small" variant="contained" color="primary">Available</Button>
        </CardActions>
        <CardContent>
        <Typography variant="body2">
          Vehicle Number: {this.displayvehicleData()}
        </Typography>
        </CardContent>
      
      </Card>
    
    );
  }
}
export default withStyles(useStyles)(CarDetail);