import React,{ Component } from 'react'

class Form extends Component {
    constructor(props){
        super(props);
        this.state={
            input1:""
        }
        this.handleChange= this.handleChange.bind(this)
    }   

    handleChange(event){
        console.log("works", event.target.value)
        this.setState({
            input1: event.target.value
        })
    }
    render(){
        const {input1} = this.state 
        return (
            <div>
                <form>
                    <input type="text" value={input1} onChange={this.handleChange}/> 
                </form>
            </div>
        )
    }
}

 export default Form