import React from 'react';
import './App.css';
import { Component } from "react";
import CreditCard from "./CreditCard";
import CreditCardForm from "./CreditCardForm";

const validDate = date => {
  date = date.replace(/[^0-9]/g, "").slice(0, 4);
  return (
    (date.slice(0, 2).length <= 1
      ? date.slice(0, 2)
      : Math.max(1, Math.min(12, date.slice(0, 2)))
        .toString()
        .padStart(2, "0")) +
    (date.slice(2).length <= 1
      ? date.slice(2)
      : Math.max(19, Math.min(30, date.slice(2))))
  );
};

class App extends Component {
  state = {
    company: "",
    number: "",
    name: "",
    date: ""
  };


  setNumber(number) {
    this.setState({
      number: number.replace(/[^0-9]/g, "").slice(0, 16)
    });
  }

  setName(name) {
    this.setState({
      name: name.replace(/[^a-z ]/gi, "").slice(0, 18)
    });
  }

  setDate(date) {
    this.setState({
      date: validDate(date)
    });
  }

  render() {
    return (
      <div>
        <div className="app">
          <div className="part">
            <CreditCard
              company={this.state.company}
              number={this.state.number}
              name={this.state.name}
              date={this.state.date}
            />
          </div>
          <div className="part">
            <CreditCardForm
              number={this.state.number}
              onChangeNumber={this.setNumber.bind(this)}
              name={this.state.name}
              onChangeName={this.setName.bind(this)}
              date={this.state.date}
              onChangeDate={this.setDate.bind(this)}
            />
          </div>
        </div>
      </div>
    );
  }
}


export default App;
