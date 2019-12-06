import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import { Cards } from "./Cards";
import Navbar from "./NavBar";
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
        <Navbar/>
        {this.state.players.map(data => (
          <Cards player={data} />
        ))}
      </div>
    );
  }
}

export default App;
