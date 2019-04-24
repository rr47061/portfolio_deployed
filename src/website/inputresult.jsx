import React, { Component } from 'react';
import AutoInput from './autoInput'
// data will be passed here

class InputResult extends Component {

    state= {
        fields: {}
    };
    onSubmit = (fields) => {
        console.log(fields);
        this.setState({fields: fields})
    };
    // onSubmit(e) {
    //     // `e` is the data that was passed through from the `Autosuggest` event.
    //     console.log(e);
    // }


    render()
    {
        return (
            <div >
                <AutoInput onSubmit = {this.onSubmit}/>
                {/*display data in json format*/}
                <h3>{JSON.stringify(this.state.fields)}</h3>

                {/*display value of each property*/}
                <h3>{this.state.fields.value}</h3>
                <h3>{this.state.fields.year}</h3>
            </div>
        );
    }
}
export default InputResult