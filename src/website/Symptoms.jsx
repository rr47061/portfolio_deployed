import React, { Component } from 'react';
import './App.css';
import Title from 'src/components/title.jsx';
import Form from 'src/components/form.jsx';
import Result from './components/result';

const key = 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJlbWFpbCI6InJyNDcwNjFAZ21haWwuY29tIiwicm9sZSI6IlVzZXIiLCJodHRwOi8vc2NoZW1hcy54bWxzb2FwLm9yZy93cy8yMDA1LzA1L2lkZW50aXR5L2NsYWltcy9zaWQiOiI0ODEzIiwiaHR0cDovL3NjaGVtYXMubWljcm9zb2Z0LmNvbS93cy8yMDA4LzA2L2lkZW50aXR5L2NsYWltcy92ZXJzaW9uIjoiMjAwIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9saW1pdCI6Ijk5OTk5OTk5OSIsImh0dHA6Ly9leGFtcGxlLm9yZy9jbGFpbXMvbWVtYmVyc2hpcCI6IlByZW1pdW0iLCJodHRwOi8vZXhhbXBsZS5vcmcvY2xhaW1zL2xhbmd1YWdlIjoiZW4tZ2IiLCJodHRwOi8vc2NoZW1hcy5taWNyb3NvZnQuY29tL3dzLzIwMDgvMDYvaWRlbnRpdHkvY2xhaW1zL2V4cGlyYXRpb24iOiIyMDk5LTEyLTMxIiwiaHR0cDovL2V4YW1wbGUub3JnL2NsYWltcy9tZW1iZXJzaGlwc3RhcnQiOiIyMDE5LTAzLTE5IiwiaXNzIjoiaHR0cHM6Ly9zYW5kYm94LWF1dGhzZXJ2aWNlLnByaWFpZC5jaCIsImF1ZCI6Imh0dHBzOi8vaGVhbHRoc2VydmljZS5wcmlhaWQuY2giLCJleHAiOjE1NTM2MzEyMDYsIm5iZiI6MTU1MzYyNDAwNn0.N8CxFWIbblTXcdtFesWFIk_Xb69g-WkSlbmhrdGukEw';

class Symptoms extends React.Component {
    state = {
        isLoading: true,
        users: [],
        error: null,

    };
    getWeather = async (e) => {   // async is used for asynchornous call to api
        e.preventDefault();

// taking value from FORM.jsx
        const age = e.target.elements.age.value;
        const  gender = e.target.elements.gender.value;

        // API calling
        const api_call = await fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[9,10,11]&gender=${gender}&year_of_birth=${age}&token=${key}&format=json&language=en-gb`);
        const data = await api_call.json();

        //consoling data
        console.log(data);
        console.log(gender);
        console.log(age);

        //defining the state
        this.setState({
            users: data,
            isLoading: false,
        })


    };


    // 2nd MEthod
    // fetchUsers() {
    //
    //     //const age=this.state.fields.age;
    //     //const gender=this.state.fields.gender;
    //     // Where we're fetching data from
    //     //fetch(`https://jsonplaceholder.typicode.com/users`)
    //      //fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[9,10,11]&gender=${gender}&year_of_birth=${age}&token=${API_KEY}&format=json&language=en-gb`)
    //     fetch(`https://sandbox-healthservice.priaid.ch/diagnosis?symptoms=[9,10,11]&gender=male&year_of_birth=1997&token=${API_KEY}&format=json&language=en-gb`)
    //
    //     // We get the API response and receive data in JSON format...
    //         .then(response => response.json())
    //         // ...then we update the users state
    //         .then(data =>
    //             this.setState({
    //                 users: data,
    //                 isLoading: false,
    //             })
    //         )
    //         // Catch any errors we hit and update the app
    //         .catch(error => this.setState({ error, isLoading: false }));
    // }
    // componentDidMount() {
    //     this.fetchUsers();
    // }

    render() {
        const { isLoading, users, error } = this.state;
        return (
            <React.Fragment>
                <Title/>
                <Form getWeather={this.getWeather}/>
                {/*// Display a message if we encounter an error*/}
                {error ? <p>{error.message}</p> : null}
                {/*// Here's our data check*/}
                {!isLoading ? (
                    users.map(user => {
                        // const { username, name, email } = user;
                        const { Issue , Specialisation   } = user;
                        return (
                            <div key={Issue.ID}>

                                for App page
                                <p>id: {Issue.ID}</p>
                                <p>Name: {Issue.Name}</p>
                                <p>Accuracy: {Issue.Accuracy} </p>
                                <p>Cause: {Issue.IcdName}</p>
                                <p>Ranking: {Issue.Ranking} </p>
                                <p> solution : {Specialisation.Name[0]}</p>

                                {/*for weather page*/}

                                {/*<Result*/}
                                {/*Name = {Issue.Name}*/}
                                {/*id={Issue.ID}*/}
                                {/*Accuracy= {Issue.Accuracy}*/}
                                {/*Cause= {Issue.IcdName}*/}
                                {/*Ranking= {Issue.Ranking}*/}

                                {/*// error = {this.state.error}*/}
                                {/*/>*/}
                                <hr />
                            </div>
                        );
                    })
                    // If there is a delay in data, let's let the user know it's loading
                ) : (
                    <h3>Loading...</h3>
                )}
            </React.Fragment>
        );
    }
}

export default Symptoms;
