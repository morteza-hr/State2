import React, { Component } from 'react';


class Hello extends Component {

state={
    message:'Welcome to our website'
}
 login = () => {
   this.setState({message:'Thanks'})
}

    render() { 
        return (
          <>
            <h1>
              {this.props.name}
              {this.state.message}
            </h1>
          <button onClick={this.login}>
              Click me
          </button>
          </>
        )
    }
}
 
export default Hello;