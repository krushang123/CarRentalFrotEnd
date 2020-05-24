import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import axios from "axios";
import PropTypes from 'prop-types';
import history from '../history';
import Card from '@material-ui/core/Card';



const useStyles = theme => ({
  root: {
    flexGrow: 1,
    marginTop: 150,
  },
  paper: {
    padding: theme.spacing(2),
    margin: 'auto',
    maxWidth: 1000
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
  button: {
    forntSize: 14, 
    "& > *": {
      margin: theme.spacing(2)
    }
  },
  car_template: {
    alignItems: "center",
    justify: "center"
  },
});

class CarCard extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      cars: []
    }
  }
  
 /*
  state = {
    model: '',
    seatingCapacity: '',
    cars: []
    }
  */
  componentDidMount = () => {
    this.getCarModel();
  };
  getCarModel = () => {
    axios.get("https://wp-car-rental.herokuapp.com/api/cars")
    .then(response => {
      const data = response.data;
      this.setState({ cars: data})
      console.log(data);
      console.log('Data has been recevied!!');
      
    })
    .catch((error) => {
      alert('Error retrieving data!!');
    })
  }
  displayCarModel= (data) => {
    if (!data.length) return null;
    return data.map((car, index) => (
      <div key={index}>
        <h3>{car.model}</h3>
      </div>
    ));
  }
  
  loadPage2(){
    this.props.route.push('/page2');
  }
  

  render() {
    const {classes} = this.props;
    const carsData = this.state.cars;
    return (
      carsData.map((car, index) => (
      <div className={classes.root} direction="row" >
        <Card className={classes.paper}>
         <Grid container className={classes.car_template} spacing={2} >
            <Grid item xs={2}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="../images/Innova.jpeg" />
                </ButtonBase>
            </Grid>

            <Grid item xs={4} sm container >
              <Grid item md container direction="column" spacing={2}>
                
                <Grid item md>
                  <Typography gutterBottom variant="subtitle1">
                    CAR NAME : {car.model}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  Car Capacity : {car.seatingCapacity}
                  </Typography>
                </Grid>
                  
              </Grid>
            </Grid>

            <Grid item xs={2}>
              <Typography variant="subtitle1">${car.rentPerDay}</Typography>
            </Grid>

            <Grid item className={classes.button}>
              <Button variant="contained" color="primary">
                Book Now
              </Button>
              <Button variant="contained" onClick={() => {history.push({
                pathname: '/page2',
                customNameData: this.state.bookings,
              })}}>
                Details
              </Button>
              
            </Grid>
          </Grid>
      </Card>
      </div>
    )));
  }
}

CarCard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(useStyles)(CarCard);