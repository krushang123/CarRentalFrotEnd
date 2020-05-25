import React, {Component} from 'react';
import CarDetail from './carDetails';
import BookingTable from './bookingDetails';
import CarCard2 from './CarCard2';
import { withStyles } from '@material-ui/core/styles';

const useStyles =theme =>({
  root: {
      marginTop: 100,
      maxWidth: 1000,
      margin: 'auto'
  },
  root1:{
    marginTop:20
  }
});


class Page2 extends Component {
  state = {
    id: null
  }
    componentDidMount() {
      this.setState({id: this.props.match.params.id});
      console.log("id from home: ",this.state.id);
    }

    render(){
      const {classes} = this.props;
      return (
        <React.Fragment>
        <div>
          <div className={classes.root}>
            <CarCard2 id={this.props.match.params.id}/>
          </div>
          <div className={classes.root1}>
            <CarDetail id={this.props.match.params.id}/>
          </div>
          <div className={classes.root1}>
            <BookingTable id={this.props.match.params.id}/>
          </div>
         
        </div>
        </React.Fragment>
      );
  
  }
}

export default  withStyles(useStyles)(Page2);
