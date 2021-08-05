import { render } from '@testing-library/react';
import React, {Component} from 'react';
import logo from './coinBack.png';
import './CoinShowing.css';


class CoinShowing extends Component {
    render() {
        return(
            <div>
                <img src={this.props.imgSrcp} alt="img error"></img>
            </div>  
            
         
        );
    }
}

export default CoinShowing;