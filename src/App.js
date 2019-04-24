import React, { Component } from 'react';
import './App.css';
import {Layout, Header, Navigation, Content, Drawer, Footer, FooterSection, FooterLinkList} from "react-mdl";
import Main from "./website/Main";
import {Link} from 'react-router-dom'

class App extends Component {
    render() {
        return (
            <div className="App">
                {/* Uses a header that scrolls with the text, rather than staying locked at the top */}
                <div className="demo-big-content">

                    <Layout fixedHeader>
                        <Header  style={{paddingLeft:"15px" , background: 'url(http://www.getmdl.io/assets/demos/transparent.jpg) center / cover'}}
                                 className={"header-color"}
                                 title={<Link style={{textDecoration: "none" , color: "white",margin: "20px" }} to="/"> <i className="fas fa-stethoscope"/>MEDX</Link> }


                            scroll>

                            <Navigation className="nav-hover">
                                <Link to="/resume">MyResume</Link>
                                <Link to="/AboutMe">About</Link>
                                <Link to="/Projects">Projects</Link>
                                {/*<Link to="/contactUs">ContactUS</Link>*/}
                                <a href="Front_page/index.html">ContactuS</a>
                                {/*<Link to="/AutoInput">AutoInput</Link>*/}
                                <Link to="src/components/Diagnosis">Diagnosis</Link>

                            </Navigation>
                        </Header>
                        <Drawer title={<Link style={{textDecoration: "none" , color: "red"}} to="/"> MyPortFolio </Link> }>
                            <Navigation className="nav-hover">
                                <Link to="/AboutMe">About</Link>
                                <Link to="/Projects">Projects</Link>
                                {/*<Link to="/contactUs">ContactUS</Link>*/}
                                {/*<Link to="/AutoInput">AutoInput</Link>*/}
                            </Navigation>
                        </Drawer>
                        <Content>
                            <div className="page-content" />
                            <Main/>
                        </Content>
                        <Footer size="mini">
                            <FooterSection type="left" logo="Title">
                                <FooterLinkList>
                                    <a href="#">Help</a>
                                    <a href="#">Privacy & Terms</a>
                                </FooterLinkList>
                            </FooterSection>
                        </Footer>
                    </Layout>


                </div>

            </div>
        )
    }
}

export default App;



