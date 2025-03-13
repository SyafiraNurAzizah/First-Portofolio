import { Link } from 'react-router-dom';
import React from 'react';
import syafira from './img/syafira.png';
import telephone from './img/telephone.png';
import mail from './img/mail.png';
import instagram from './img/instagram.png';

const InstagramLink = ({ username }) => {
    const instagramURL = `https://www.instagram.com/${username}/`;

    return (
        <div>
            <a className='contactIg' style={{ paddingLeft: '25px' }} href={instagramURL} target="_blank" rel="noopener noreferrer">@{username}</a>
        </div>
    );
};

const EmailLink = ({ email }) => {
    const mailtoLink = `mailto:${email}`;

    const emailStyle = {
        position: 'relative',
        left: '30px',
        fontSize: '15px',
        color: '#41444d',
        bottom: '15px',
        textDecoration: 'none',
    };

    return (
        <div>
            <a style={emailStyle} href={mailtoLink}>{email}</a>
        </div>
    );
};

const Home = () => {
    // const userEmail = 'syafiranurazizah1710@gmail.com';

    return (
        <div>
            <nav>
                <h1 className='title'>SYAFIRA.</h1>
                <Link to="/" className="active">Home</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Portofolio">Portofolio</Link>
                <Link to="/Contact">Contact</Link>
            </nav>
            <div className='profilPicture'>
                <div className='card'>
                    <img className="pict" src={syafira} alt="Syafira's Picture" />
                </div>
                <div className='cardContact'>
                    <div className='contact'>
                        <img className='contactImg' src={telephone} alt="Telephone Icon" style={{ position: 'relative', bottom: '5px' }}/>
                        <p className='contactDesc'>+62-881-2721-410</p>
                    </div>
                    <div className='contact'>
                        <img className='contactImg' src={mail} style={{ position: 'relative', width: '20px', height: '20px', left: '5px', bottom: '15px' }} alt="Mail Icon" />
                        <EmailLink email="syafiranurazizah1710@gmail.com" />
                    </div>
                    <div className='contact'>
                        <img className='contactImg' src={instagram} style={{ width: '20px', height: '20px', paddingLeft: '5px' }} alt="Instagram Icon" />
                        <InstagramLink username="zfshyrart" />
                    </div>
                </div>
            </div>
            <div className='me'>
                <div className='garis'></div>
                <h1 className='name'>SYAFIRA  NUR  AZIZAH</h1>
                <h5>STUDENT | INDONESIA</h5>
                <p className='description'>I am a 2nd year Software and Game Development (<i>PPLG</i>) student at State Vocational High School 1 Purbalingga.</p>            
            </div>
        </div>
    );
}

export default Home;
