import React, { Component } from 'react';
class ChildButton extends Component{

    render()
    {
        const {handleClick}=this.props; // only in 2nd method
        return(
            <button
                style={{background: "red" , color:"white",fontSize:"1.5rem"}}

         // onClick={this.props.handleClick}   > // 1st method
                 // 2nd method
                onClick={handleClick}   >
                child Button</button>
        );
    }
}
export default ChildButton;