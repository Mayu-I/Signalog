import React from "react";

import profileImg from '../../../content/assets/about_profile.jpeg';

const Profile = () => (
    <div className="profile">
        <div className="profileImg"><img src={profileImg} alt="" /></div>
        <h2 className="about__name">MAYU</h2>
        <p className="profileDesc">バンクーバー在住、20歳。<br />高三の時に社会人になるのがどうしても怖くて、大学受験から逃亡。<br />高校を卒業し、何をやりたいのか特に決まらないまま、英語を話せるようになりたいという思いだけでカナダの語学学校に半年通う。<br />その間に現地で仕事に就きたいと思うようになり、コーディングを始める。<br />一時帰国してからは、東京のWeb制作会社で1年間フロントエンドデベロッパーのバイトをしてました。<br />今はまたバンクーバーに戻り、<a href="https://redacademy.com/vancouver/" target="_blank" rel="noopener noreferrer">RED Academy</a>で現地就職を目指して勉強中。</p>
    </div>
);

export default Profile;