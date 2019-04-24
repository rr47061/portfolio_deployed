import React, { Component } from "react";
import { Cell, List, ListItem, ListItemContent } from "react-mdl";
import { Grid } from "react-mdl";

class contactUs extends Component {
  render() {
    return (
      <div className="contact-body">
        <Grid className="contact-grid">
          <Cell col={6}>
            <h2>Rohit Ranjan</h2>
            <img
              src="https://openclipart.org/download/294868/myAvatar.svg"
              alt="avatar"
              style={{ height: "250px" }}
            />
            <p style={{ width: "75%", margin: "auto", paddingTop: "1em" }}>
              Many desktop publishing packages and web page editors now use
              Lorem Ipsum as their default model text, and a search for 'lorem
              ipsum' will uncover many web sites still in their infancy. Various
              versions have evolved over the years, sometimes by accident,
              sometimes on purpose (injected humour and the like).
            </p>
          </Cell>

          {/* second part */}
          <Cell col={6}>
            <h2>Contact Me </h2>
            <hr />

            <div className="contact-list">
              <List>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-phone-square" aria-hidden="true" />
                    (+91-)8507456920
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fa fa-envelope" aria-hidden="true" />
                    rr47061@gmail.com
                  </ListItemContent>
                </ListItem>
                <ListItem>
                  <ListItemContent
                    style={{ fontSize: "25px", fontFamily: "Anton" }}
                  >
                    <i className="fab fa-facebook-square" aria-hidden="true" />
                    ranjan.rohit64
                  </ListItemContent>
                </ListItem>
              </List>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default contactUs;
