import React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';

import Typography from '@material-ui/core/Typography';

import { makeStyles } from '@material-ui/core/styles';
import CssBaseline from '@material-ui/core/CssBaseline';

const useStyles = makeStyles((theme) => ({
    menuButton: {
        marginRight: theme.spacing(2),
    },
    title: {
        flexGrow: 1
    }
  }));

const NavBar = () => {
    const classes = useStyles();
    return(
        <div>
            <CssBaseline />
            <AppBar postion="static">
                <Toolbar>
                    
                    <Typography variant="h6" className= {classes.title} color="inherit">Car Rentals</Typography>
                </Toolbar>
            </AppBar>
        </div>

    )
}
export default NavBar;