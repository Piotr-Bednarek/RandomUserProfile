import "./App.css";
import React, { Component } from "react";
import MainContainer from "./Container";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoaded: false,
      userData: [],
    };

    this.getRandomData = this.getRandomData.bind(this);
  }

  getRandomData() {
    console.log("fetching data...");
    fetch("https://random-data-api.com/api/users/random_user?size=1&is_xml=false")
      .then((response) => {
        // console.log(response);
        return response.json();
      })
      .then((data) => {
        // console.log(data);
        this.setState({
          isLoaded: true,
          userData: data,
        });
      })
      .catch((err) => {
        console.log("Error when fetching data... " + err);
      });
  }

  render() {
    const { isLoaded, userData } = this.state;
    if (isLoaded) {
      return (
        <div className="App">
          <MainContainer
            isLoaded={isLoaded}
            userData={userData}
            getData={this.getRandomData}
          ></MainContainer>
        </div>
      );
    } else
      return (
        <div className="App">
          <MainContainer isLoaded={isLoaded} getData={this.getRandomData}></MainContainer>
        </div>
      );
  }
}

export default App;
