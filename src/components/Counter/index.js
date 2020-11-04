
import React, { Component } from 'react'
class Counter extends Component {
  
  constructor(props) {
    super(props)
    this.state = {
      counter: 0,
    };
    console.log('Contructor propiedades');
  }
  
  componentDidMount() {
    console.log('componente montado')
    this.setState({
      counter: 0,
    })
  }
  componentDidUpdate() {
    console.log("componente actualizado")
  }
//   clickHandler() {
//     let { counter } = this.state;
//     this.setState({
//       counter: counter + 1,
//     })
//   }
//   clickHandlerDecr() {
//     let { counter } = this.state;
//     this.setState({
//       counter: counter - 1,
//     })
//   }

  clickHandler(operator){
    let {counter} = this.state;
    if(operator === "increase"){
        counter++;
    }else{
        counter--;
    }
    this.setState({
        counter,
    })
  }
  render() {
    console.log('Render', this.state.counter);
    return (
      <div>
        <h2>Counter: {this.state.counter}</h2>
        <button onClick={() => this.clickHandler("increase")}>Increase</button>
        <button onClick={() => this.clickHandlerDecr("decrease")}>Decrease</button>
      </div>
    )
  }
 
}
export default Counter
