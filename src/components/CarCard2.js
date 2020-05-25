import React, { Component } from 'react';
import { withStyles} from "@material-ui/core/styles";
import {
  Grid,
  Card,
  CardContent,
  Typography
} from "@material-ui/core";
import AirlineSeatReclineNormalIcon from "@material-ui/icons/AirlineSeatReclineNormal";
import ColorizeIcon from "@material-ui/icons/Colorize";
import axios from "axios";

const useStyles = theme => ({
  root: {
    margin: 'auto',
    maxWidth: 1000,
    marginLeft: 105,
    flexDirection: "row"
  },
  details: {
    flexDirection: "column",
    alignItems: "center",
  },
  row: {
    alignItems: "flex-start",
    justifyContent: "space-between",
  },
  cover: {
    width: "auto",
    height: 400,
  },
  img: {
    display: "block",
    maxWidth: "100%",
    maxHeight: "100%",
  },
});


class CarCard2 extends Component {
  
  constructor(props) {
    super(props);
    this.state = {
      car: {
        model: '',
        seatingCapacity: 0,
        rentPerDay: 0
      }
    }
  }
  
  componentDidMount = () => {
    this.getCarModel();
  };
  getCarModel = () => {
    axios.get("https://wp-car-rental.herokuapp.com/api/cars/"+this.props.id)
    .then(response => {
      const data = response.data;
      this.setState({ car: data})
      console.log("Data in CarCard2 : ", data);
    })
    .catch((error) => {
      alert('Error retrieving data!!');
    })
  }

  render() {
    const {classes} = this.props;
    console.log("CarCard2 into the render ", this.state.car);
    
    return (
        <Card className={classes.card}>
          <Grid container >
          <Grid item xs={6} >
              <img className={classes.img} src={"../images/Innova.jpeg"} alt={"name"} />
            </Grid>
            <Grid item xs={6}>
            <CardContent className={classes.content} className={classes.details}>
              <Typography component="h4" variant="h4" gutterBottom>
                {this.state.car.model}
              </Typography>
              <div className={classes.row}>
                <Grid item >
                  <ColorizeIcon />
                  <Typography variant="subtitle1" color="textSecondary">
                    {"color"}
                  </Typography>
                </Grid>
                <Grid container item>
                  <AirlineSeatReclineNormalIcon />
                  <Typography variant="subtitle1" color="textSecondary">
                    {this.state.car.seatingCapacity}
                  </Typography>
                </Grid>
              </div>
              <Typography variant="subtitle1" color="textPrimary">
                Rent Per Day
              </Typography>
              <Typography variant="h5">&#8377;{this.state.car.rentPerDay}</Typography>
            </CardContent>
            </Grid>
          </Grid>
        </Card>
    );
  }
}

export default withStyles(useStyles)(CarCard2);