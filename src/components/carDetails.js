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
      car: {}
    }
  }
  componentDidMount = () => {
    this.getBookingModel();
  };
  getBookingModel = () => {
    axios.get("https://wp-car-rental.herokuapp.com/api/cars/"+this.props.id)
    .then(response => {
      const data = response.data;
      this.setState({ car: data})
      console.log(data);
      console.log('Data has been recevied!!');
      
    })
    .catch((error) => {
      alert('Error retrieving data!!');
    })
  }
  displayvehicleData()  {
    return (
      <div color="textSecondary">
      <h5 >{this.state.car.vehicleNumber}</h5>
      </div> );
  }
  render(){
    const {classes} = this.props;
 
  
    return (
      <Card className={classes.root}>
        <CardActions>
          <Button size="small" variant="contained">Available</Button>
        </CardActions>
        <CardContent>
        <Typography variant="body2" >
          Vehicle Number:{this.displayvehicleData()}
        </Typography>
        </CardContent>
      
      </Card>
    
    );
  }
}
export default withStyles(useStyles)(CarDetail);