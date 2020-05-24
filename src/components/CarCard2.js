import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import { Button } from '@material-ui/core';
import axios from "axios";
import PropTypes from 'prop-types';

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
    width: 500,
    height: 300,
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

class CarCard2 extends Component {
  
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
    axios.get("https://wp-car-rental.herokuapp.com/api/cars/")
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
  /*
  loadPage2(){
    this.props.route.push('/page2');
  }
  */

  render() {
    const {classes} = this.props;
    const carsData = this.state.cars;
    return (
      carsData.map((car, index) => (
      <div className={classes.root} direction="row" >

        <Paper className={classes.paper}>
          
          <Grid container className={classes.car_template} spacing={2} >
            <Grid item xs={5}>
                <ButtonBase className={classes.image}>
                  <img className={classes.img} alt="complex" src="../images/Innova.jpeg" />
                </ButtonBase>
            </Grid>

            <Grid item xs={5} sm container spacing={2}>
                  <Typography gutterBottom variant="subtitle1">
                    CAR NAME : {car.model}
                  </Typography>
                  <Typography variant="body2" color="textSecondary">
                  Car Capacity : {car.seatingCapacity}
                  </Typography>
                  <Typography variant="subtitle1">${car.rentPerDay}</Typography>
                <Button variant="contained" color="primary">
                    Book Now
                </Button>
          </Grid>
          </Grid>
        </Paper>
      </div>
    )));
  }
}

CarCard2.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(useStyles)(CarCard2);