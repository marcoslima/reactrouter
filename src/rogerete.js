import React, {Component} from 'react';

class Rogerete extends Component {
  render() {
    return (
      <div>
        <h1>Oi, eu sou o Rogerete!</h1>
        <h2>{this.props.idade}</h2>
          {console.log(this.props)}
      </div>
    );
  }
}

export default Rogerete;
