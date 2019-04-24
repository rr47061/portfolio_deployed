import React, { Component } from 'react';
import 'react-mdl/extra/material.css';
import 'react-mdl/extra/material.js';
import {Layout , Header , Navigation , Drawer , Content} from "react-mdl";

class NavaBar extends Component {

    constructor(props) {
        super(props);
        this.state = {};
    }

    //submitLogin(e) {}

    render() {
        return (
            <div className="inner-container">
                {/* Always shows a header, even in smaller screens. */}
                <div style={{height: '300px', position: 'relative'}}>
                    <Layout fixedHeader>
                        <Header title={<span><span style={{ color: '#ddd' }}>Area / </span><strong>The Title</strong></span>}>
                            <Navigation>
                                <a href="/">Link</a>
                                <a href="/">Link</a>
                                <a href="/">Link</a>
                                <a href="/">Link</a>
                            </Navigation>
                        </Header>
                        <Drawer title="Title">
                            <Navigation>
                                <a href="/">Link</a>
                                <a href="/">Link</a>
                                <a href="/">Link</a>
                                <a href="/">Link</a>
                            </Navigation>
                        </Drawer>
                        <Content />
                    </Layout>
                </div>

            </div>
        );
    }

}
export default NavaBar;