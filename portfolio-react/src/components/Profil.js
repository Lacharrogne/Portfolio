import React from 'react';

const Profil = () => {
    return (
        <div id="container-profil">
            <div>
                <img id='pp' src="./img/pp.png" alt="" />
            </div>
            <div>
                <h1 id='name'>Développeur/Intégrateur web</h1>
                <p>Je m'appelle Maxime Charron et je suis actuellement étudiant à la WebAcademie, où je suis en formation de développeur/intégrateur web. Passionné par le monde de la technologie et du web, j'ai décidé de me lancer dans cette formation pour acquérir les compétences nécessaires pour créer des expériences web innovantes et convaincantes.</p>
                <a href="./img/cv1.pdf" download><button>Mon CV</button></a>
            </div>
        </div>
    );
};

export default Profil;