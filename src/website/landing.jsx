import React, { Component } from 'react';
import {Cell, Grid, ProgressBar} from "react-mdl";
import Container from "react-bootstrap/Container";
import './landingstyle.css';


class Landing extends Component {
    render() {
        return (

            <div style={{width:'100%' , margin: 'auto'}}>

            <Grid className="landing-grid">
                <Cell col={12}>
                    <img
                        src="https://dentalogica-practice.co.uk/wp-content/uploads/2017/05/avatar-male-300x300.png"
                        alt="avatar"
                        className="avatar-img"
                        />
                    <div className="banner-text">
                        <h1> Rohit Ranjan </h1>
                        <hr/>
                        <ProgressBar indeterminate style={{marginLeft:"25%",backgroundColor:"white"}}/>
                        <p> html | css | bootstrap | javascript | bootstrap | nodejs | ReactJs</p>
                    <div className="social-links">
                        {/*LinkedIn Account*/}
                        <a href="http://google.com" rel="noopener noreferrer" tagret="_blank">
                            <i className="fab fa-linkedin-in"></i>
                        </a>
                        {/*twitter account */}
                        <a href="http://google.com" rel="noopener noreferrer" tagret="_blank">
                            <i className="fab fa-twitter"></i>
                        </a>

                        {/*github account */}
                        <a href="http://google.com" rel="noopener noreferrer" tagret="_blank">
                            <i className="fab fa-github"></i>
                        </a>
                    </div>


                    </div>
                </Cell>
                <div style={{width:'80%' , margin: 'auto'}}>
                <Cell col={12}>
<div className="about-mnnit">
                    <h4 >About Mnnit dispensary</h4>
    <hr/>
                   <p> NIT Dispensary is full-fledged unit with provision for one full time Residential Medical Officer, one
                    visiting doctor and two part time doctors who are assisted by supporting
                       staff staff viz Staff Nurse,Pharmacist etc.</p>
</div>
                </Cell>
                </div>

            </Grid>

        </div>

        );

    }

}


export default Landing