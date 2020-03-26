import React, { Component } from "react";

// FORM
import FormControl from "@material-ui/core/FormControl";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";

import WarningIcon from '@material-ui/icons/Warning';
import CachedIcon from '@material-ui/icons/Cached';

export default class Converter extends Component {

  constructor(props) {
    super(props)

    this.state = {
      inputCurrency_value: '',
      outputCurrency_value: 0,
      errorMessage: "hide"
    }
  }

  getInputCurrency = (e) => {
    this.setState({
      inputCurrency_value: e.target.value
    })
  }

  doConverter = () => {
    if(this.state.inputCurrency_value !== '') {
      let from_to = `${this.props.inputCurrency}_${this.props.outputCurrency}`
      let URL = `https://free.currconv.com/api/v7/convert?apiKey=do-not-use-this-key&q=${from_to}&compact=y`
      
      fetch(URL)
          .then(res => {
              return res.json()
          })
          .then(json => {
            let cotation = json[from_to].val
            let outputCurrency_value = (parseFloat(this.state.inputCurrency_value) * cotation).toFixed(2)
            this.setState({outputCurrency_value})
          })
          this.setState({errorMessage: "hide"})
    } else {
      this.setState({errorMessage: "show"})
    }
  }

  render() {
    return (
      <div className={`converter ${this.state.errorMessage}`}>
        <div>
          <h2>{this.props.currencyDescription}</h2>
          <small>{this.props.inputCurrency} to {this.props.outputCurrency}</small>
        </div>
        <FormControl>
          <TextField label="Enter value to convert" onChange={this.getInputCurrency} />
        </FormControl>
        <Button variant="contained" color="secondary" size="large" onClick={this.doConverter}>
          <CachedIcon />
        </Button>
        <small className={`error-message ${this.state.errorMessage}`}><WarningIcon /> The field cannot be empty!</small>
        <div className="result"><span>Converted value:</span> <span className="result-number">{this.props.currencySymbol}{this.state.outputCurrency_value}</span></div>
      </div>
    );
  }
}
