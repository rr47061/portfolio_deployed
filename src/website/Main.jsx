import React, { Component } from 'react';
import AboutMe from "./AboutMe";
import MyResume from './resume';
import Landing from "./landing";
import contactUs from "./contactUs";
// import AutoInput from "./autoInput";
import './main.css';
import { Router ,Switch,Route} from 'react-router-dom';
// import {Radio} from "react-mdl";
import Projects from "./projects";
// import Symptoms from "./Symptoms";
import Diagnosis from "../components/Diagnosis";

class Main extends Component {


    render() {
        return (

                <Switch>
                <Route exact path="/" component={Landing}/>
                <Route path="/resume" component={MyResume}/>
                <Route  path="/AboutMe" component={AboutMe}/>
                <Route  path="/Projects" component={Projects}/>
                {/*<Route  path="/contactUs" component={contactUs}/>*/}
                <a  href="abc.html"> cont </a>
                {/*<Route  path="/AutoInput" component={AutoInput}/>*/}
                    {/*<Route  path="/src/components/Diagnosis" component={Diagnosis}/>*/}
                </Switch>
        );

    }

}


export default Main