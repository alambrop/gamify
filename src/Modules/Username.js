import React, { Component } from 'react';
import '../CSS/HomePage.css'
import StarBoardForm from './StarBoardForm';

class Username extends Component {

    render() {
        return (   
            <div id= "user-board">
                <div id="user-name">
                    <h1>Andrew Lambropoulos</h1> 
                </div>  
            
                {/* <div id ="star-board">
                    <p>Diamond</p>
                    <p>Platinum</p>
                    <p>Gold</p>
                    <p>Silver</p>
                    <p>Bronze</p> 
                </div>    */}

                <StarBoardForm/>
            </div>        
        );
    }
}
export default Username