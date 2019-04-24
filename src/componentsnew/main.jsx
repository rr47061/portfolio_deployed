import React, { Component } from 'react';

import AboutMe from "./aboutMe"
import {BrowserRouter as Router ,Switch,Route} from 'react-router-dom';
import ReactDOM from "react-dom";

class Main extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }

    render() {
        return (
            <div>
                <AboutMe/>

            {/*<Router>*/}
    {/*<div>*/}
                {/*<Route exact path="/" Component={AboutMe}/>*/}

    {/*</div>*/}

            {/*</Router>*/}


            </div>

        );

    }

}

ReactDOM.render(
    <Main/>,
    document.getElementById("root")
)
//export default Main