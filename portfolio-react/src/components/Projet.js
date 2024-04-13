import React from 'react';
// import { Link } from 'react-scroll';

const Projet = () => {
    return (
        <div id='container-projet'>
            <div id='container-title'>
                <h1 id='title-projet'>Mes Projets</h1>
                <img className='fleche' src="./img/fleche.png" alt="" />
                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident nesciunt optio cum rem quisquam adipisci architecto libero doloribus molestias, pariatur inventore, cupiditate alias, fugiat minima doloremque sapiente veritatis voluptates voluptas.</p>
            </div>
            <div id='container-full-projet'>
                <div id='twitter'>
                    <h2>Twitter</h2>
                    <br />
                    <img src="./img/tweeter.png" alt=""/>
                    <div>
                        <p>Durée: 1 mois</p>
                        <p>Groupes: 4 pers</p>
                        <p>Languages: PHP/SQL/JS</p>
                        <p>Notre objectif principal dans ce projet était de concevoir un réseau social destiné aux étudiants de notre promotion, offrant les mêmes fonctionnalités que Twitter. Nous nous sommes efforcés de le rendre aussi similaire que possible à Twitter en termes de fonctionnalités.
                        </p>
                        <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-WEB-090-PAR-1-1-academie-maylan.gomes">Lien du projet</a>
                    </div>
                    {/* <div className='button'>
                        <Link to={"spotify"} smooth={true} offset={0} duration={500}><img className='fleche-direction' src="./img/fleche-bas.png" alt="" /></Link>
                        <Link to={"container-profil"} smooth={true} offset={-200} duration={500}><img className='fleche-direction' src="./img/fleche-haut.png" alt="" /></Link>
                    </div> */}
                </div>
                <div id='spotify'>
                    <h2>Spotify</h2>
                    <br />
                    <img src="./img/spotify.png" alt=""/>
                    <div>
                        <p>Durée: 2 jours</p>
                        <p>Groupes: 2 pers</p>
                        <p>Languages: JS/React/SASS</p>
                        <p>Dans ce projet, nous avons développé un site web utilisant une API, avec pour objectif de reproduire au mieux l'expérience de l'application Spotify. Nous avons exploré React tout en étant soumis à des contraintes de temps.
                        </p>
                        <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-WEB-090-PAR-1-1-spotify-maxime1.charron">Lien du projet</a>
                    </div>
                    
                    {/* <div className='button'>
                        <Link to={"meetic"} smooth={true} offset={0} duration={500}><img className='fleche-direction' src="./img/fleche-bas.png" alt="" /></Link>
                        <Link to={"twitter"} smooth={true} offset={0} duration={500}><img className='fleche-direction' src="./img/fleche-haut.png" alt="" /></Link>
                    </div> */}
                </div>
                <div id='meetic'>
                    <h2>Meetic</h2>
                    <br />
                    <img src="./img/meetic.png" alt=""/>
                    <div>
                        <p>Durée: 2 semaines</p>
                        <p>Groupes: solo</p>
                        <p>Languages: PHP/JS/SQL</p>
                        <p>L'objectif principal de notre projet était de concevoir un site de rencontres inspiré de Meetic, mais axé spécifiquement sur la mise en relation des personnes partageant des intérêts communs au sein d'une université.
                        </p>
                        <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-PHP-501-PAR-1-1-mymeetic-maxime1.charron">Lien du projet</a>
                    </div>
                    
                    {/* <div className='button'>
                        <Link to={"cinema"} smooth={true} offset={0} duration={500}><img className='fleche-direction' src="./img/fleche-bas.png" alt="" /></Link>
                        <Link to={"spotify"} smooth={true} offset={0} duration={500}><img className='fleche-direction' src="./img/fleche-haut.png" alt="" /></Link>
                    </div> */}
                </div>
                <div id='cinema'>
                    <h2>Cinema</h2>
                    <br />
                    <img src="./img/cinema.png" alt=""/>
                    <div>
                        <p>Durée: 2 semaines</p>
                        <p>Groupes: solo</p>
                        <p>Languages: PHP/SQL</p>
                        <p>Notre objectif dans ce projet était de développer un site pour la gestion d'un cinéma, avec une base de données fournie permettant des recherches par nom, genre, et autres critères.
                        </p>
                        <a rel="noopener noreferrer" target='_blank' href="https://github.com/EpitechWebAcademiePromo2025/W-PHP-501-PAR-1-1-mycinema-maxime1.charron" >Lien du projet</a>
                    </div>
                    
                    {/* <div className='button'>
                        <Link to={"container-form"} smooth={true} offset={200} duration={500}><img className='fleche-direction' src="./img/fleche-bas.png" alt="" /></Link>
                        <Link to={"meetic"} smooth={true} offset={0} duration={500}><img className='fleche-direction' src="./img/fleche-haut.png" alt="" /></Link>
                    </div> */}
                </div>
            </div>
        </div>
    );
};

export default Projet;