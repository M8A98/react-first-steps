import React , {Component} from 'react'


const channels = [
    {
        name:'Channel 1',
        activated:false
    },
    {
        name:'Channel 2',
        activated:false
    },
    {
        name:'Channel 3',
        activated:false
    },
    {
        name:'Channel 4',
        activated:false
    },
    {
        name:'Channel 5',
        activated:false
    }
]


class ConditionalRendering extends Component {
    constructor(props){
        super(props);
        this.state = {
            //isActiveState: false,
            channels: channels,
        }
    }
    // componentDidMount(){
    //     setTimeout(()=>{
    //         this.setState({
    //             channels: channels
    //         })
    //     },1000);
    // }

    activate(name){
        console.log(name)
        let newChannels = this.state.channels.map(channel =>{
            channel.activated = false
            if(name === channel.name){
                channel.activated = true;
                return channel
            }
            return channel
        })
        this.setState({
            channels:newChannels,
        })
    }

    liCreator(){
        const channels = this.state.channels
        console.log(channels)
        return channels.map(channel =>{
            const onClickChannel = ()=>{this.activate(channel.name)}
            return (
                (channel.activated) 
                ? <li  class="clicked" onClick={onClickChannel}>{channel.name}</li>
                : <li class="unClicked" onClick={onClickChannel}>{channel.name}</li>
            )
        })
    }
    render(){
        return (
            <ul>
                {this.liCreator()}
            </ul>
        )
    }

}

export default ConditionalRendering

//render() {
    //     const {
    //         props: {isActive} ,
    //         state: {isActiveState}
    //         }  = this;
    //     return(<h1>
    //         {
    //             isActive ? <h1>Activo</h1> : <h1>Inactivo</h1>
    //         }
    //         {
    //             isActiveState ? <h1>Activo</h1> : <h1>Inactivo</h1>
    //         }
    //     </h1>)
    // }