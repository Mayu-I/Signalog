import React from "react";
// import { Link, graphql } from "gatsby";

import Layout from "../components/Layout/layout";
import Seo from "../components/Seo/seo";
import Profile from "../components/Profile/profile"

class About extends React.Component {
    render() {
        return (
            <Layout>
                <Seo title="About"></Seo>
                <div className="about">
                    <div className="about__desc">
                        <h1 className="page-title">ABOUT</h1>
                        <p>
                            このサイトはネトフリ観賞と読書を趣味とするインドアな私が、バンクーバーでWeb業界への就職を目指しながら日々の生活や英語、コーディング学習について記録していきます。<br />留学や海外就職を目指されてる方の力になれれば幸いです。
                        </p>
                    </div>
                    <Profile />
                </div>
            </Layout >
        )
    }
}

export default About;