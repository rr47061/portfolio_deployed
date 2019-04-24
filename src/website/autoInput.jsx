import React, { Component } from 'react';
import Autosuggest from 'react-autosuggest';
import './autoInput.css'

const languages = [
    {
        name: 'C',
        year: "1972"
    },
    {
        name: 'C#',
        year: "2000"
    }

];

// https://developer.mozilla.org/en/docs/Web/JavaScript/Guide/Regular_Expressions#Using_Special_Characters
function escapeRegexCharacters(str) {
    return str.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
}

function getSuggestions(value) {
    const escapedValue = escapeRegexCharacters(value.trim());

    if (escapedValue === '') {
        return [];
    }

    const regex = new RegExp('^' + escapedValue, 'i');


    return languages.filter(language => regex.test(language.name));
}

const getSuggestionValue = suggestion => {
    //return suggestion.name;
     return suggestion.year;
 // this.returnfun();
};

const renderSuggestion = suggestion => (
    <span>{suggestion.name}{suggestion.year}</span>
);
// const returnfun = suggestion => (
//     <span>{suggestion.name}{suggestion.year}</span>
// );


class AutoInput extends Component {
    constructor(props) {
        super(props);

        this.state = {
            value: '',
            suggestions: []
        };

        // for handling function
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
        const name = event.target.name;
        const value = event.target.value;
        this.setState({
            [name]: value
        })

    }
    handleSubmit(event){
        event.preventDefault();
        console.log(this.state);
        this.props.onSubmit(this.state);
        // this.setState(this.initialState);


    }
// end of diagnosis

    onChange = (event, {newValue, method}) => {
        this.setState({
            value: newValue
        });
    };

    onSuggestionsFetchRequested = ({value}) => {
        this.setState({
            suggestions: getSuggestions(value)
        });
    };

    onSuggestionsClearRequested = () => {
        this.setState({
            suggestions: []
        });
    };

    render() {
        const {value, suggestions} = this.state;
        const inputProps = {
            placeholder: "Type 'c'",
            value,
            onChange: this.onChange
        };
        console.log("vari-property = ",this.props);

        return (
            <form onSubmit={this.handleSubmit}>
                <Autosuggest
                    suggestions={suggestions}
                    onSuggestionsFetchRequested={this.onSuggestionsFetchRequested}
                    onSuggestionsClearRequested={this.onSuggestionsClearRequested}
                    getSuggestionValue={getSuggestionValue}
                    renderSuggestion={renderSuggestion}
                    inputProps={inputProps}/>
                <div>
                    <button type="submit"> click here</button>
                </div>
            </form>
        );
    }
}
export default AutoInput