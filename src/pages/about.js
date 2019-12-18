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
                        <p></p>
                    </div>
                    <div className="about__profile">
                        <div className="about__profileImg"><img src={profileImg} alt="" /></div>
                        <h2 className="about__name">MAYU</h2>
                        <p>バンクーバー在住、1999年生まれ、20歳。<br />高三の時に朝井リョウの「何者」を読んで社会人になるのが怖くなり、大学受験から逃亡。<br />かろうじて高校を卒業し、カナダに流れ着く。<br />カナダでは語学学校に半年通い、卒業する直前にプログラミングに出会う。<br />
                            一時帰国してからは、東京のWeb制作会社でバイトとして1年働いてました。<br />
                            2019年の10月からバンクーバーの<a href="https://redacademy.com/vancouver/" target="_blank" rel="noopener noreferrer">RED Academy</a>でFull stack developerの勉強してます。<br />今のところ人生行き当たりばったりですが、毎日楽しいです。</p>
                    </div>
                </div>
            </Layout>
        )
    }
}

export default About