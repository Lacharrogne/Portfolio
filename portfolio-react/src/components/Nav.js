import React, { useState } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    return (
        <nav id='container-nav'>
            <h1 id='title'>Portfolio</h1>
            <div id='lien'>
                <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025"><img src="./img/github.png" alt="" /></a>
                <a rel="noopener noreferrer" target='_blank' href="http://linkedin.com/in/maxime-charron-a3550b2a6"><img src="./img/linkedin.png" alt="" /></a>
            </div>
            <div className={`side-bar ${isMenuOpen ? 'active' : ''}`}>
                <div onClick={toggleMenu} className="toggle-btn" id="btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <Link to='container-profil' smooth={true} offset={-200} duration={500}><li>Profil</li></Link>
                    <Link to='container-comp' smooth={true} offset={-200} duration={500}><li>Skill</li></Link>
                    <Link to='container-projet' smooth={true} offset={0} duration={500}><li>Projets</li></Link>
                    <Link to='container-form' smooth={true} offset={300} duration={500}><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;