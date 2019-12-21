import React from "react";
// import { Link, graphql } from "gatsby";

import profileImg from '../../content/assets/about_profile.jpeg';
import Layout from "../components/Layout/layout";
import Seo from "../components/Seo/seo"

class About extends React.Component {
    render() {
        return (
            <Layout>
                <Seo title="About"></Seo>
                <div className="about">
                    <div className="about__desc">
                        <h1 className="page-title">ABOUT</h1>
                        <p>
                            このサイトはネトフリ観賞と読書を趣味とするインドアな私が、バンクーバーでWeb業界への就職を目指しながら日々の生活や英語、コーディング学習について記録していきます。<br />同じように留学や海外就職を目指されてる方を応援できれば幸いです。
                        </p>
                    </div>
                    <div className="about__profile">
                        <div className="about__profileImg"><img src={profileImg} alt="" /></div>
                        <h2 className="about__name">MAYU</h2>
                        <p className="about__profileDesc">バンクーバー在住、20歳。<br />高三の時に朝井リョウの「何者」を読んで社会人になるのが怖くなり、大学受験から逃亡。<br />高校を卒業し、カナダに流れ着いて語学学校に半年通う。当初はカレッジ進学を目指していたけれど、現地で仕事に就くことが目標となり、コーディングを始める。<br />一時帰国してからは、東京のWeb制作会社で1年間フロントエンドのバイトをしてました。<br />2019年の10月からバンクーバーに戻り、<a href="https://redacademy.com/vancouver/" target="_blank" rel="noopener noreferrer">RED Academy</a>でFull stack developmentの勉強中。<br />行き当たりばったりな人生ですが、毎日楽しく暮らしてます。</p>
                    </div>
                </div>
            </Layout >
        )
    }
}

export default About