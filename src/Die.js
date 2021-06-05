import React, {Component} from 'react';
import './Die.css';

class Die extends Component {
    constructor(props){
        super(props);
        
       
    }
    

    render(){

        return(
            <div>
                <i className={"dice fa-10x fas fa-dice-"+this.props.output}></i>
                {console.log(this.props.output)}
            </div>
        );
    }
}

export default Die;