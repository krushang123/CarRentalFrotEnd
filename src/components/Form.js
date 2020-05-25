import React, { Component } from 'react';
import { withStyles } from '@material-ui/core/styles';
import FormControl from '@material-ui/core/FormControl';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import Paper from '@material-ui/core/Paper';
import TableRow from '@material-ui/core/TableRow';
import Input from '@material-ui/core/Input';
import InputLabel from '@material-ui/core/InputLabel';
import { Button } from '@material-ui/core'; 
import {Link} from 'react-router-dom';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
//import DialogContent from '@material-ui/core/DialogContent';
//import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';


const useStyles = theme =>  ({
  border: {
    maxWidth: 800,
    flexGrow: 1,
    marginTop: 250,
    margin: 'auto',
    textAlign: 'center',
    borderBottom: "none"
  }
});



class Forms extends Component {

    state = {
      open: false
    }

    
    handleSubmit= (event) => {
        //Send data to server and create booking
        // set dialog state to open when booking created 
        this.setState({open:true})
    }

    handleClose= (event) => {
        this.setState({open:false})
    }

    render(){
        const self = this;
        const {classes} = this.props;
        const { open } = this.state;
        return (
            <React.Fragment>
            <AppBar postion="static">
                <Toolbar>
                     <Typography variant="h5" className= {classes.title} color="inherit">Booking Details</Typography>
                </Toolbar>
            </AppBar>
            <TableContainer component={Paper} className={classes.border} >
                <Table className={classes.table} aria-label="simple table">

                    <TableBody>
                        <TableRow>
                            <TableCell align="center">
                                <FormControl >
                                    <InputLabel htmlFor="component-simple" required id="standard-required">Name</InputLabel>
                                    <Input id="component-simple" />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl>
                                    <InputLabel htmlFor="component-simple" required id="standard-required">Contact Number</InputLabel>
                                    <Input id="component-simple" />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell align="center">
                                <FormControl>
                                <InputLabel htmlFor="component-simple" required id="standard-required">Issue Date</InputLabel>
                                <Input id="component-simple" />
                                </FormControl>
                            </TableCell>
                            <TableCell align="center">
                                <FormControl>
                                <InputLabel htmlFor="component-simple" required id="standard-required">Return Date</InputLabel>
                                <Input id="component-simple" />
                                </FormControl>
                            </TableCell>
                        </TableRow>
                        <TableRow>
                            <TableCell>
                            <Link to='/' style={{ textDecoration: 'none' }}>
                            <Button variant="contained" >
                                Back
                            </Button>
                            </Link>
                            </TableCell>
                            <TableCell align="center">
                                <div>
                            <Button variant="contained" color="primary" onClick={this.handleSubmit} type="submit">
                                Book Now
                            </Button>
                            
                            </div>
                            </TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </TableContainer>
            <Dialog
                open={open}
                onClose={self.handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description">
                
                <DialogTitle id="alert-dialog-title">{"Booking Submitted"}</DialogTitle>
                <DialogActions>
                    <Button onClick={self.handleClose} color="primary" autoFocus>
                    Continue
                    </Button>
                </DialogActions>
                </Dialog>
            </React.Fragment>
         );
    }

}
export default withStyles(useStyles)(Forms);
