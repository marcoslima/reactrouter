import React, {Component} from 'react';
import './App.css';
import Rogerete from "./rogerete";
import {BrowserRouter, Route} from "react-router-dom";
import Raiz from "./raiz";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {idade: 16};

  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({idade: 48});
    }, 5000);

  }

  renderRogerete() {
    return <Rogerete idade={this.state.idade}/>;
  }

  render() {
    return (
      <BrowserRouter>
        <Route path="/rogerete" component={() => this.renderRogerete()}/>
        <Route path="/" exact component={Raiz}/>
      </BrowserRouter>
    );
  }
}

export default App;
