import { Link } from 'react-router-dom';
import React, { useState } from 'react';
import edu from './img/edu.png';

const AboutMe = () => {
    return (
        <div>
            <nav>
                <h1 className='title'>SYAFIRA.</h1>
                <Link to="/">Home</Link>
                <Link to="/AboutMe" className="active">About Me</Link>
                <Link to="/Portofolio">Portofolio</Link>
                <Link to="/Contact">Contact</Link>
            </nav>

            <div className='education'>
                <div className='garisEdu'></div>
                <h1 className='titleEdu'>EDUCATION </h1>
                <div className='garisEdu2'></div>
                <div className='garisVertikal2'></div>
                <div className='edupng'>
                    <img src={edu}/>
                </div>
                <div className='edupng'>
                    <img src={edu}/>
                </div>
                <div className='edupng'>
                    <img src={edu}/>
                </div>
                
                <div className='schools'>
                    <p className='years'>2013 - 2019</p>
                    <div className='schools2'>
                        <h4 className='school' style={{top: '5px'}}>MI Ma'Arif NU 02 Kajongan</h4>
                    </div>
                </div>
                <div className='schools'>
                    <p className='years' style={{left: '395px'}}>2019 - 2022</p>
                    <div className='schools2' style={{left: '540px'}}>
                        <h4 className='school' style={{top: '5px'}}>SMP Negeri 1 Bojongsari</h4>
                    </div>
                </div>
                <div className='schools'>
                    <p className='years' style={{bottom: '65px'}}>2022 - 2025</p>
                    <div className='schools2' style={{left: '125px'}}>
                        <h4 className='school' style={{bottom: '4px'}}>SMK Negeri 1 Purbalingga</h4>
                        <p className='major'>Software and Game Development (PPLG)</p>
                    </div>
                </div>
            </div>

            {/* <div className='garisVertikal2'></div> */}

            <div className='charts'>
                <div className='garisSkills'></div>
                <h1 className='titleSkills'>SKILLS </h1>
                <div className='garisSkills2'></div>
                <div className='_chart'>
                    <div className='skillsChart'>
                        <div className="progress-circle p90 over50">
                            <span>90%</span>
                            <div class="left-half-clipper">
                                <div className="first50-bar"></div>
                                <div className="value-bar"></div>
                            </div>
                        </div>
                        <p className='skills'>HTML</p>
                    </div>
                    <div className='skillsChart'>
                        <div className="progress-circle p85 over50">
                            <span>85%</span>
                            <div className="left-half-clipper">
                                <div className="first50-bar"></div>
                                <div className="value-bar"></div>
                            </div>
                        </div>
                        <p className='skills'>CSS</p>
                    </div>
                    <div className='skillsChart'>
                        <div className="progress-circle p40">
                            <span>40%</span>
                            <div className="left-half-clipper">
                                <div className="first50-bar"></div>
                                <div className="value-bar"></div>
                            </div>
                            </div>
                        <p className='skills'>JavaScript</p>
                    </div>
                    <div className='skillsChart'>
                        <div className="progress-circle p45">
                            <span>45%</span>
                            <div className="left-half-clipper">
                                <div className="first50-bar"></div>
                                <div className="value-bar"></div>
                            </div>
                            </div>
                        <p className='skills'>PHP</p>
                    </div>
                    <div className='skillsChart'>
                        <div className="progress-circle p85 over50">
                            <span>85%</span>
                            <div className="left-half-clipper">
                                <div className="first50-bar"></div>
                                <div className="value-bar"></div>
                            </div>
                        </div>
                        <p className='skills'>Design</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default AboutMe;
