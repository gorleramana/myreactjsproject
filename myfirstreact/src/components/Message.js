import React, { Component } from 'react'

class Message extends Component {
    constructor() {
        super();//this is needed because a call has to be made to super class (Component)
        this.state = {
            message: "This is your message"
        }
    }
    changeMessage(){
        this.setState({
            message: 'Thanks for subscription'
        })
    }
    render() {
        return (
            <div>
                <h1>Welcome Ramana, {this.state.message}</h1>
                <button onClick={()=>this.changeMessage()}>Subscribe</button>
            </div>
        )

    }
}
export default Message