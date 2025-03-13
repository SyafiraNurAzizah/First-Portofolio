import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import web1 from './img/web-01.png'
import web2 from './img/web-02.png'
import web3 from './img/web-03.png'

const Portofolio = () => {
    return (
        <div>
            <nav>
                <h1 className='title'>SYAFIRA.</h1>
                <Link to="/">Home</Link>
                <Link to="/AboutMe">About Me</Link>
                <Link to="/Portofolio" className="active">Portofolio</Link>
                <Link to="/Contact">Contact</Link>
            </nav>

            <div className='project'>
                <h1 className='projectTitle'>PROJECTS</h1>
                <Link to="/Portofolio">Design</Link>
                <Link to="/PortofolioGame">Game</Link>
                <Link to="/PortofolioWeb" className="active">Website</Link>
            </div>

            <div className='cardProject' style={{ paddingBottom: '880px'}}>
                <div className='porto' >
                    <div className='portoImg'>
                        <img src={web1} className='g_w' style={{ width: '330px', height: '150px'}}/>
                        <h2>Review Buku</h2>
                    </div>
                    <div className='portoDetail' style={{ paddingTop: '80px'}}>
                        <p>My first web project. 
                            This web was made by me and two other friends, Nayla and Winda.</p>
                    </div>
                </div>
                <div className='porto' style={{ left: '720px'}}>
                    <div className='portoImg'>
                        <img src={web2} className='g_w' style={{ width: '330px', height: '150px'}}/>
                        <h2>CRUD</h2>
                    </div>
                    <div className='portoDetail' style={{ paddingTop: '80px'}}>
                        <p>My second web project. 
                            This project is an end of semester 1 assessment assignment for grade 11.</p>
                    </div>
                </div>
                <div className='porto' style={{ left: '470px', top: '380px' }}>
                    <div className='portoImg'>
                        <img src={web3} className='g_w' style={{ width: '330px', height: '150px'}}/>
                        <h2>YearBook</h2>
                    </div>
                    <div className='portoDetail' style={{ paddingTop: '80px'}}>
                        <p>My third web project. 
                            This project is one of the assignments from BackDev class, made by me with two other friends, Nayla and Eka. </p>
                    </div>
                </div>
            </div>

            <div>
                <h1 className='organizationTitle'>ORGANIZATIONS</h1>
                <div className='org'>
                    <div className='organization'>
                        <h2>English Club</h2>
                    </div>
                    <div className='cardOrganization'>
                        <p>English Club is one of the extracurriculars in SVHS 1 Purbalingga. 
                            I joined this extracurricular starting from grade 10 until now. 
                            Extracurricular English Club improves my English language skills through interactive and fun activities outside of class hours.</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Portofolio;
