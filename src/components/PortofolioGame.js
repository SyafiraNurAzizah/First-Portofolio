import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import game1 from './img/game-01.png'
import game2 from './img/game-02.png'


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
                <Link to="/PortofolioGame" className="active">Game</Link>
                <Link to="/PortofolioWeb">Website</Link>
            </div>

            <div className='cardProject'>
                <div className='porto'>
                    <div className='portoImg'>
                        <img src={game1} className='g_w' style={{ width: '330px', height: '150px'}}/>
                        <h2>Bunny Adventure</h2>
                    </div>
                    <div className='portoDetail' style={{ paddingTop: '80px'}}>
                        <p>Bunny Adventure was the first game created using Constuct 3 by myself, Nayla, and Winda.</p>
                    </div>
                </div>
                <div className='porto'  style={{ left: '720px'}}>
                    <div className='portoImg'>
                        <img src={game2} className='g_w' style={{ width: '330px', height: '150px'}}/>
                        <h2>Kuis Aksara Jawa</h2>
                    </div>
                    <div className='portoDetail' style={{ paddingTop: '80px'}}>
                        <p>Kuis Aksara Jawa is the second game created by me using Constuct 3.</p>
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
