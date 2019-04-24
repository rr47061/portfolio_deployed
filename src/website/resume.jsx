import React, { Component } from 'react';
 import {Cell, Grid} from "react-mdl";
 import Education from "./education";
import Skills from "./skills"
class MyResume extends Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    render() {
        return (
            <div className="container">
              <Grid>
                  <Cell col={4}>
                      <div>
                          <img style={{height:"150px" , marginLeft: "50px" , align:"center"}} src="https://cdn3.iconfinder.com/data/icons/business-avatar-1/512/1_avatar-512.png" alt="Logo" />
                          <h1>Rohit Ranjan</h1>
                          <p>Programmer</p>
                          <hr style={{borderTop:"3px solid #145821", width:"50%"}}/>
                          <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                              It has survived not only five centuries,
                              but also the leap into electronic typesetting, remaining essentially unchanged.</p>
                          <hr style={{borderTop:"3px solid #145821", width:"50%"}}/>
                          <h3>Email:</h3>
                          <p>ranjan.rohit64@gmail.com</p>
                          <h3>Phone:</h3>
                          <p>8507456929</p>
                          <h3>Facebook:</h3>
                          <p>ranjan.rohit64</p>
                          <hr style={{borderTop:"3px solid #145821", width:"50%"}}/>



                      </div>
                  </Cell>
                  <Cell className="resume-right-col" col={8}>
                      <div>
                          <h2 style={{ padding: "2em"}}>Education</h2>
                          <ede
                              startYear={2010}
                              endYear={2012}
                              schoolName="Ashoka Academy"
                              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                               It has survived not only five centuries,
                               but also the leap into electronic typesetting,
                               remaining essentially unchanged."
                          />
                          <Education
                              startYear={2012}
                              endYear={2014}
                              schoolName="DAV Public Scool, Hehal"
                              description="Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
                               It has survived not only five centuries,
                               but also the leap into electronic typesetting,
                               remaining essentially unchanged."
                          />
                          <hr style={{margin: "auto", borderTop:"3px solid red" , width:"90%"}}/>

                          <h2 style={{marginLeft:"10px"}}>Skills</h2>
                          <Skills
                              subjectName="javascript"
                              progress="75"
                          />
                          <Skills
                              subjectName="Java"
                              progress="45"

                          />


                      </div>
                  </Cell>
              </Grid>
            </div>
        );
    }

}
export default MyResume;