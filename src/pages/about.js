import React from "react";
// import { Link, graphql } from "gatsby";

import profileImg from '../../content/assets/about_profile.png'
import Layout from "../components/Layout/layout";

class About extends React.Component {
    render() {
        return (
            <Layout>
                <div className="about">
                    <div className="about__desc">
                        <h1 className="about__title">ABOUT</h1>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque adipiscing commodo. Orci dapibus ultrices in iaculis nunc sed. Nulla at volutpat diam ut. Porttitor massa id neque aliquam vestibulum morbi. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Leo in vitae turpis massa sed elementum. Venenatis cras sed felis eget velit. Massa sed elementum tempus egestas. Maecenas accumsan lacus vel facilisis. Diam sit amet nisl suscipit adipiscing bibendum est ultricies. Magna fringilla urna porttitor rhoncus dolor.</p>
                    </div>
                    <div className="about__profile">
                        <div className="about__profileImg"><img src={profileImg} alt="" /></div>
                        <h2 className="about__name">MAYU</h2>
                        <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Molestie a iaculis at erat pellentesque adipiscing commodo. Orci dapibus ultrices in iaculis nunc sed. Nulla at volutpat diam ut. Porttitor massa id neque aliquam vestibulum morbi. Diam quam nulla porttitor massa id neque aliquam vestibulum morbi. Leo in vitae turpis massa sed elementum. </p>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default About