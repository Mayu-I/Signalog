import React from "react";

import profileImg from '../../../content/assets/about_profile.jpeg';

const Profile = () => (
    <div className="profile">
        <div className="profileImg"><img src={profileImg} alt="" /></div>
        <h2 className="about__name">MAYU</h2>
        <p className="profileDesc">バンクーバー在住、20歳。<br />高三の時に朝井リョウの「何者」を読んで社会人になるのが怖くなり、大学受験から逃亡。<br />高校を卒業し、特に目標もなくカナダに流れ着いて語学学校に半年通う。<br />その間に現地で仕事に就きたいと思うようになり、コーディングを始める。<br />一時帰国してからは、東京のWeb制作会社で1年間フロントエンドのバイトをしてました。<br />2019年の10月からバンクーバーに戻り、<a href="https://redacademy.com/vancouver/" target="_blank" rel="noopener noreferrer">RED Academy</a>でFull stack developmentの勉強中。</p>
    </div>
);

export default Profile;