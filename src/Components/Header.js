import React from "react";
import SearchBar from "./SearchBar";
import { AppBar, Container, Grid, Avatar, Button, Tooltip, IconButton} from '@mui/material';
import { Toolbar } from "@material-ui/core";
import {NavLink} from "react-router-dom";



export default function Header() {
  
      const handleClick = () => {
        
      };
    
    return(
        <AppBar position="static">
          <Container maxWidth="xl" className="container">
            <Toolbar>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <NavLink to="/">
                    <img src="../Images/logo.PNG" alt="picreel-logo" width='80px' className="logo"/>
                  </NavLink>
                </Grid>
                <Grid item xs={4}>
                  <SearchBar />
                </Grid>
                <Grid item xs={3}>
                  <NavLink to="/uploadFile" className="link-style">
                      <Button color="inherit">UPLOAD AN IMAGE</Button>
                  </NavLink>
                </Grid>
                <Grid item xs={2}>
                  <Tooltip title="Martha Akinlolu">
                    <IconButton
                      onClick={handleClick}
                      size="small"
                      sx={{ ml: 2 }}
                    >
                      <Avatar alt="Martha" src="../Images/avatar.jpg" />
                    </IconButton>
                  </Tooltip>
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
