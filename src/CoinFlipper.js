import { render } from '@testing-library/react';
import React, {Component} from 'react';
import logo from './coinBack.png';
import './CoinFlipper.css';
import CoinShowing from './CoinShowing';



class CoinFlipper extends Component {
    // static defaultProps = {
    //     source: "./coinFront.png"
    // }
    constructor(props){
        super(props);
        this.state = {
            imgSrc: "./coinFront.png",
            flipNumber: 0,
            frontNumber: 0,
            backNumber: 0
            };
        this.flip = this.flip.bind(this);
    }

    flip(){
        let one_or_zero = Math.floor(Math.random()*2);
        if(one_or_zero===1){
            this.setState({imgSrc: "./coinFront.png"});
            this.setState({flipNumber: this.state.flipNumber+1});
            this.setState({frontNumber: this.state.frontNumber+1});
        

        }
        else{
            this.setState({imgSrc: "./coinBack.png"});
            this.setState({flipNumber: this.state.flipNumber+1});
            this.setState({backNumber: this.state.backNumber+1});


        }
    }
    render() {
        return(
            <div className="flexBox">
               <CoinShowing imgSrcp={this.state.imgSrc}/>
               <h3>You flipped {this.state.flipNumber} times front {this.state.frontNumber} times, back {this.state.backNumber} times</h3>
               <button onClick={this.flip}>Flip</button>
            </div>
         
        );
    }
}

export default CoinFlipper;