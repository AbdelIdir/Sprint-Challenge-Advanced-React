import React, { Component } from "react";
import logo from "./logo.svg";
import "./App.css";
import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      players: []
    };
  }

  componentDidMount() {
    axios
      .get("http://localhost:5000/api/players")
      .then(response => {
        console.log(response.data);
        this.setState({
          players: response.data
        });
      })

      .catch(error => {
        console.log(error);
      });
  }
  render() {
    return (
      <div className="App">
        {this.state.players.map((data, id) => (
          <div className="card" key={id}>
            <p>{data.name}</p>
            <p>{data.country}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default App;
