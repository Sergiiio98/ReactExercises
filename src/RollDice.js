import React, {Component} from 'react';
import Die from './Die';
import './RollDice.css';
// import {Button} from 'react-bootstrap';

class RollDice extends Component {
    static defaultProps = {
        sides: ['one', 'two', 'three', 'four', 'five', 'six']
    }

    constructor(props){
        super(props);

    this.state = {die1: 0, die2: 0};
    
    this.roll = this.roll.bind(this);
    

    }
    
    roll(e){
        this.setState({die1: this.props.sides[(Math.floor(Math.random() * 6))]})
        this.setState({die2: this.props.sides[(Math.floor(Math.random() * 6))]})
    }

    render(){

        return(
            <div>
                <div className="dicebox">
                    <Die className="die" output={this.state.die1}/>
                    <Die className="die" output={this.state.die2}/>
                </div>
                <div className="centerbox">
                    <button onClick={this.roll} type="button" class="btn btn-primary">Roll Dice!</button>
                </div>
            </div>
        );
    }
}

export default RollDice; 