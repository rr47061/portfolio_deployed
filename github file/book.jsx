import React, { Component } from 'react';
import './book.css';
class Book extends Component
{
constructor(props)
{
    super(props);
    this.state={
        count: 0,
    }
   // this.handleClick = this.handleClick.bind(this); // for 1st way
}
// 1st way (ES6)
// handleClick()
// {
//     console.log("hello");
//     console.log(this.state.count);
// }

// 2nd way (ES6)

    // handleClick = () => {
    //     console.log("hello");
    //     console.log(this.state.count);
    // };
    increment = () => {
    this.setState({count: this.state.count + 1});
    };

    decrement = () => {
        this.setState({count: this.state.count - 1});
    };
    reset = () => {
        this.setState({count : 0});
    }


    render()
    {
        const {title,author}  = this.props.info;

        //2nd method of calling the parent function
        const {handleClick} = this.props;
        // const {handleClick} = this.props.handleClick;  // wrong because we are accesing the parent component directly



        return(
            <div className="book">
                <img src={this.props.info.img} alt=""/>
                <div>
                <h6>Title: {title}</h6>
                <h6>Author : {author}</h6>
                    <div>

                        <button onClick={this.increment}>Increment</button>
                        <button onClick={this.decrement}>Decrement</button>
                        <button onClick={this.reset}>Reset</button>
                    </div>
                    <h5>  {this.state.count} </h5>
                    {/* catching function from parent*/}
                    {/*<button onClick={this.props.handleClick}>book_btn</button>*/}
                    {/*second method of calling  */}
                    <button onClick={handleClick}>book_btn</button>
            </div>
            </div>

        );
    }

}

export default Book;
