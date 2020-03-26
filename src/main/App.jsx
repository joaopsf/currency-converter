import React, { Fragment, Component } from "react";

import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid'
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';
import CachedIcon from '@material-ui/icons/Cached';

import Converter from "../components/Converter";

class App extends Component {
  render() {
    return (
      <Fragment>
        <AppBar position="fixed">
          <Container maxWidth="lg">
            <Toolbar variant="dense">
              <IconButton edge="start" color="inherit" aria-label="menu">
                <CachedIcon />
              </IconButton>
              <Typography variant="h6" color="inherit"> Currency converter </Typography>
            </Toolbar>
          </Container>
        </AppBar>
        <Container maxWidth="lg">
          <div className="app-description">
            <Grid item xs={12}>
              <h1>About!</h1>
              <p>A simple app that only converts the values ​​of some currencies to currencies, according to your need. Developed using only <strong>ReactJS</strong> and <strong>Material-UI</strong>.</p>
            </Grid>
          </div>
        </Container>
        <Container maxWidth="lg">
          <div className="app">
            <Grid item xs={12}>
              <div className="app-line">
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="BRL"
                    outputCurrency="USD"
                    currencyDescription="Brazilian Real to United States Dollar"
                    currencySymbol="$"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="USD"
                    outputCurrency="BRL"
                    currencyDescription="United States Dollar to Brazilian Real"
                    currencySymbol="R$"
                  />
                </Grid>
              </div>
            
              <div className="app-line">
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="BRL"
                    outputCurrency="EUR"
                    currencyDescription="Brazilian Real to Euro"
                    currencySymbol="€"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="EUR"
                    outputCurrency="BRL"
                    currencyDescription="Euro to Brazilian Real"
                    currencySymbol="R$"
                  />
                </Grid>
              </div>

              <div className="app-line">
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="BRL"
                    outputCurrency="GBP"
                    currencyDescription="Brazilian Real to British Lb"
                    currencySymbol="£"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="GBP"
                    outputCurrency="BRL"
                    currencyDescription="British Lb to Brazilian Real"
                    currencySymbol="R$"
                  />
                </Grid>
              </div>

              <div className="app-line">
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="BRL"
                    outputCurrency="CAD"
                    currencyDescription="Brazilian Real to Dollar Canadian"
                    currencySymbol="$"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="CAD"
                    outputCurrency="BRL"
                    currencyDescription="Dollar Canadian to Brazilian Real"
                    currencySymbol="R$"
                  />
                </Grid>
              </div>

              <div className="app-line">
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="BRL"
                    outputCurrency="AUD"
                    currencyDescription="Brazilian Real to Australian Dollar"
                    currencySymbol="$"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="AUD"
                    outputCurrency="BRL"
                    currencyDescription="Australian Dollar to Brazilian Real"
                    currencySymbol="R$"
                  />
                </Grid>
              </div>

              <div className="app-line">
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="BRL"
                    outputCurrency="JPY"
                    currencyDescription="Brazilian Real to Japanese Yen"
                    currencySymbol="¥"
                  />
                </Grid>
                <Grid item xs={6}>
                  <Converter
                    inputCurrency="JPY"
                    outputCurrency="BRL"
                    currencyDescription="Japanese Yen to Brazilian Real"
                    currencySymbol="R$"
                  />
                </Grid>
              </div>
            </Grid>
          </div>
        </Container>
      </Fragment>
    );
  }
}

export default App;
