import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-scroll';

const Nav = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const menuRef = useRef(null);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    useEffect(() => {
        const handleClickOutside = (e) => {
            if (menuRef.current && !menuRef.current.contains(e.target)) {
                setIsMenuOpen(false);
            }
        };

        if (isMenuOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isMenuOpen]);

    return (
        <nav id='container-nav'>
            <h1 id='title'>Portfolio</h1>
            <div id='lien'>
                <a rel="noopener noreferrer" target='_blank' href="https://github.com/Lacharrogne"><img src="./img/github.png" alt="logo github" /></a>
                <a rel="noopener noreferrer" target='_blank' href="http://linkedin.com/in/maxime-charron-a3550b2a6"><img src="./img/linkedin.png" alt="logo linkedin" /></a>
            </div>
            <div ref={menuRef} className={`side-bar ${isMenuOpen ? 'active' : ''}`}>
                <div onClick={toggleMenu} className="toggle-btn" id="btn">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <ul>
                    <Link to='container-profil' smooth={true} offset={-200} duration={500}><li>Profil</li></Link>
                    <Link to='container-skill' smooth={true} offset={-200} duration={500}><li>Skill</li></Link>
                    <Link to='container-projet' smooth={true} offset={0} duration={500}><li>Projets</li></Link>
                    <Link to='container-form' smooth={true} offset={300} duration={500}><li>Contact</li></Link>
                </ul>
            </div>
        </nav>
    );
};

export default Nav;
