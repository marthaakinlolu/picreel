import React from "react";
import { AppBar, Container, Grid, Avatar, Button } from '@mui/material';
import SearchIcon from '@mui/icons-material/Search';
import InputBase from '@mui/material/InputBase';
import { styled, alpha } from '@mui/material/styles';
import { Toolbar } from "@material-ui/core";
import {NavLink} from "react-router-dom";



export default function Header() {
  
    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
          backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginRight: theme.spacing(2),
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
          marginLeft: theme.spacing(3),
          width: 'auto',
        },
      }));

      const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }));

      const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
          padding: theme.spacing(1, 1, 1, 0),
          // vertical padding + font size from searchIcon
          paddingLeft: `calc(1em + ${theme.spacing(4)})`,
          transition: theme.transitions.create('width'),
          width: '100%',
          [theme.breakpoints.up('md')]: {
            width: '20ch',
          },
        },
      }));
      
    return(
        <AppBar position="static">
          <Container maxWidth="xl" className="container">
            <Toolbar>
              <Grid container spacing={2}>
                <Grid item xs={3}>
                  <img src="../Images/logo.PNG" alt="picreel-logo" width='80px' className="logo"/>
                </Grid>
                <Grid item xs={4}>
                  <Search>
                      <SearchIconWrapper>
                      <SearchIcon />
                      </SearchIconWrapper>
                      <StyledInputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                      />
                  </Search>
                </Grid>
                <Grid item xs={3}>
                  <NavLink to="/uploadFile" className="link-style">
                      <Button color="inherit">UPLOAD AN IMAGE</Button>
                  </NavLink>
                </Grid>
                <Grid item xs={2}>
                  <Avatar alt="Martha" src="../Images/avatar.jpg" />
                </Grid>
              </Grid>
            </Toolbar>
          </Container>
        </AppBar>
    )
}
