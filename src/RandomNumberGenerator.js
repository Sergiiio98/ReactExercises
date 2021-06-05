import React, { Component } from 'react';

class RandomNumberGenerator extends Component {
    constructor(props){
        super(props);

        this.state = {number: 1};
        this.randomNumber = this.randomNumber.bind(this);
    }

    randomNumber(e){
        this.setState({number: (Math.floor(Math.random() * 11))})
    }

    render() {

        return( 
            <div>
                <h1>Number is {this.state.number}</h1>
                <h1>{this.state.number===7 ? "You Win" : null}</h1>
                <button onClick={this.randomNumber}>Random</button>
            </div>
        );
    }
}

export default RandomNumberGenerator;