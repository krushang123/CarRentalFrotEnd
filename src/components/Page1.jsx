import React, {Component} from 'react';
import NavBar from './NavBar';
import CarCard from './carCard';
import { withStyles } from '@material-ui/core/styles';

const useStyles =theme =>({
    root: {
        marginTop: 100,
    },
  });

class Page1 extends Component {
    render(){
        const {classes} = this.props;
      return (
        <div>
          <NavBar />
          <div className={classes.root}>
          <CarCard />
          </div>
         </div>
      );
  
  }
}
   
 

export default withStyles(useStyles)(Page1);