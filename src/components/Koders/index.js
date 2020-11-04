import React, {Component} from 'react'

const KODERS_JSON = [
    {
        name:'Axel',
        age:31,
        hobbies: ['Videogames','Drink every day','pets']
    },
    {
        name:'Ivan',
        age:29,
        hobbies: ['Basquetball','Chess','Videogames']
    },
    {
        name:'Luis',
        age:34,
        hobbies: ['Money money','pets','social media']
    }
]

class Koders extends Component {
    constructor(props){
        super(props);
        this.state = {
            koders:[]
        }
    }    

    componentDidMount(){
        setTimeout(()=>{
            this.setState({
                koders:KODERS_JSON,
            })
        },1000);
    }


    renderKoders(){
        let hasThreeOrMore = this.state.koders.filter(koder =>{
            return koder.hobbies.length >= 3;
        })
        return hasThreeOrMore.map(koder =>{
            return (
                <li>
                    This koder has three or more hobbies: <span class="koder">{koder.name}</span>
                </li>
            )
        })
    }

    render(){
        return (
            <div>
                <ul class="container">{this.renderKoders()}</ul>
            </div>
        );
    }
}


export default Koders;




/*
    renderKoders(){
        return this.state.koders.map((koder)=>{
            let koderHobbies = koder.hobbies.map((hobby)=>{
                return   <li class="hobby">{hobby}</li> 
            })
            return (
                <li>
                    {koder.name},{koder.age} years.
                    <ul>
                        {koderHobbies}
                    </ul>
                </li>
            )
        })
    }

*/ 