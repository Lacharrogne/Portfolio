import React from "react";
import { DiSass, DiReact, DiJsBadge, DiPhp } from "react-icons/di";
import { SiMysql } from "react-icons/si";
import { FaTwitter,FaSpotify } from "react-icons/fa";
import { MdLocalMovies } from "react-icons/md";
import { BsArrowThroughHeartFill } from "react-icons/bs";


const Projet = () => {
    return (
        <div id='container-projet'>
            <div id='container-title'>
                <h1 id='title-projet'>Mes Projets</h1>
                <p>Voici quelques projets que j'ai réalisés seul ou en groupe pendant ma formation à la WebAcademie. Ces expériences m'ont permis d'appliquer mes connaissances et de développer mes compétences techniques.</p>
            </div>
            <div id='container-full-projet'>
                <div id='twitter'>
                    <h3 id="title-twitter">Twitter</h3>
                    <div className="project twitter">
                        <div className="container">
                            <img src="./img/tweeter.png" alt="projet 1 twitter" />
                            <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-WEB-090-PAR-1-1-academie-maylan.gomes">
                                <div className="hovered-twitter">
                                    <span><FaTwitter id="logo-twitter" alt="logo twitter"/></span>
                                </div>
                            </a>
                        </div>
                        <div className='container-blabla'>
                            <p>Durée : 1 mois</p>
                            <p>Groupe : 4 personnes</p>
                            <p>Langages : <DiJsBadge className='icons js' alt="logo javascript"/><DiPhp className='icons php' alt="logo php"/><SiMysql className='icons sql' alt="logo mysql"/></p>
                            <p>Notre objectif principal dans ce projet était de concevoir un réseau social destiné aux étudiants de notre promotion, offrant les mêmes fonctionnalités que Twitter. Nous nous sommes efforcés de le rendre aussi similaire que possible à Twitter en termes de fonctionnalités.</p>
                            <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-WEB-090-PAR-1-1-academie-maylan.gomes">Lien du projet</a>
                        </div>
                    </div>
                </div>
                <div id='spotify'>
                    <h3 id="title-spotify">Spotify</h3>
                    <div className="project spotify" >
                        <div className="container">
                            <img src="./img/spotify.png" alt="projet 2 spotify" />
                            <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-WEB-090-PAR-1-1-spotify-maxime1.charron">
                                <div className="hovered-spotify">
                                    <span><FaSpotify id="logo-spotify" alt="logo spotify"/></span>
                                </div>
                            </a>
                        </div>
                        <div className='container-blabla'>
                            <p>Durée : 2 jours</p>
                            <p>Groupe : 2 personnes</p>
                            <p>Langages : <DiJsBadge className='icons js' alt="logo javasript"/><DiReact className='icons react' alt="logo react"/><DiSass className='icons sass' alt="logo sass"/></p>
                            <p>Dans ce projet, nous avons développé un site web utilisant une API, avec pour objectif de reproduire au mieux l'expérience de l'application Spotify. Nous avons exploré React tout en étant soumis à des contraintes de temps.</p>
                            <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-WEB-090-PAR-1-1-spotify-maxime1.charron">Lien du projet</a>
                        </div>
                    </div>
                </div>
                <div id='meetic'>
                    <h3 id="title-meetic">Meetic</h3>
                    <div className="project meetic">
                        <div className="container">
                            <img src="./img/meetic.png" alt="projet 3 meetic" />
                            <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-PHP-501-PAR-1-1-mymeetic-maxime1.charron">
                                <div className="hovered-meetic">
                                    <span><BsArrowThroughHeartFill id="logo-meetic" alt="logo meetic"/></span>
                                </div>
                            </a>
                        </div>
                        <div className='container-blabla'>
                            <p>Durée : 2 semaines</p>
                            <p>Groupe : solo</p>
                            <p>Langages : <DiJsBadge className='icons js' alt="logo javascript"/><DiPhp className='icons php' alt="logo php"/><SiMysql className='icons sql' alt="logo mysql"/></p>
                            <p>L'objectif principal de notre projet était de concevoir un site de rencontres inspiré de Meetic, mais axé spécifiquement sur la mise en relation des personnes partageant des intérêts communs au sein d'une université.</p>
                            <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-PHP-501-PAR-1-1-mymeetic-maxime1.charron">Lien du projet</a>
                        </div>
                    </div>
                </div>
                <div id='cinema'>
                    <h3 id="title-cinema">Cinema</h3>
                    <div className="project cinema" >
                        <div className="container">
                            <img src="./img/cinema.png" alt="projet 4 cinema" />
                            <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-PHP-501-PAR-1-1-mycinema-maxime1.charron">
                                <div className="hovered-cinema">
                                    <span><MdLocalMovies id="logo-cinema" alt="logo cinema"/></span>
                                </div>
                            </a>
                        </div>
                        <div className='container-blabla'>
                            <p>Durée : 2 semaines</p>
                            <p>Groupe : solo</p>
                            <p>Langages : <DiPhp className='icons php' alt="logo php"/><SiMysql className='icons sql' alt="logo mysql"/></p>
                            <p>Notre objectif dans ce projet était de développer un site pour la gestion d'un cinéma, avec une base de données fournie permettant des recherches par nom, genre, et autres critères.</p>
                            <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-PHP-501-PAR-1-1-mycinema-maxime1.charron" >Lien du projet</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Projet;
