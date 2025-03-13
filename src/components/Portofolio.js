import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import design1 from './img/design-01.png'
import design2 from './img/design-02.png'


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
                <Link to="/Portofolio" className="active">Design</Link>
                <Link to="/PortofolioGame">Game</Link>
                <Link to="/PortofolioWeb">Website</Link>
            </div>

            <div className='cardProject'>
                <div className='porto'>
                    <div className='portoImg'>
                        <img src={design1} style={{ position: 'relative', bottom: '85px' }}/>
                    </div>
                    <div className='portoDetail'>
                        <h2>Vektor 1.0</h2>
                        <p>My first project in creating vector images using CorelDRAW.</p>
                    </div>
                </div>
                <div className='porto' style={{ left: '720px'}}>
                    <div className='portoImg'>
                        <img src={design2} style={{ position: 'relative', bottom: '85px' }}/>
                    </div>
                    <div className='portoDetail'>
                        <h2>Vektor 2.0</h2>
                        <p>My second project in creating vector images using CorelDRAW, this is also my midterm assignment in the first semester of class 10.</p>
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
