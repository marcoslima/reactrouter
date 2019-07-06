import React, {Component} from 'react';
import {Link} from "react-router-dom";

class Raiz extends Component {
  render() {
    return (
      <div>
        <Link to="/rogerete">Go Rogerete</Link>
      </div>
    );
  }
}

export default Raiz;