import React from 'react';
import { DiSass,DiReact,DiHtml5,DiCss3,DiJsBadge,DiPhp } from "react-icons/di";
import { SiMysql,SiAdobephotoshop,SiBlender } from "react-icons/si";

const Comp = () => {
    return (
        <div id='container-skill'>
            <h1 id='title-skill'>Compétences</h1>
            <div className='full-skill'>
                <div className='skill'>
                    <h3>Fronts</h3>
                    <ul>
                        <a rel="noopener noreferrer" target='_blank' href="https://fr.wikipedia.org/wiki/Hypertext_Markup_Language"><DiHtml5 className='icons html'/></a>
                        <a rel="noopener noreferrer" target='_blank' href="https://fr.wikipedia.org/wiki/Feuilles_de_style_en_cascade"><DiCss3 className='icons css'/></a>
                        <a rel="noopener noreferrer" target='_blank' href="https://fr.wikipedia.org/wiki/JavaScript"><DiJsBadge className='icons js'/></a>
                    </ul>
                </div>
                <div className='skill'>
                    <h3>Backs</h3>
                    <ul>
                        <a rel="noopener noreferrer" target='_blank' href="https://fr.wikipedia.org/wiki/PHP"><DiPhp className='icons php'/></a>
                        <a rel="noopener noreferrer" target='_blank' href="https://fr.wikipedia.org/wiki/Structured_Query_Language"><SiMysql className='icons sql'/></a>
                    </ul>
                </div>
                <div className='skill'>
                    <h3>Frameworks</h3>
                    <ul>
                        <a rel="noopener noreferrer" target='_blank' href="https://fr.wikipedia.org/wiki/React"><DiReact className='icons react'/></a>
                        <a rel="noopener noreferrer" target='_blank' href="https://fr.wikipedia.org/wiki/Sass_(langage)"><DiSass className='icons sass'/></a>
                    </ul>
                </div>
                <div className='skill'>
                    <h3>Autres</h3>
                    <ul>
                        <a rel="noopener noreferrer" target='_blank' href="https://fr.wikipedia.org/wiki/Adobe_Photoshop"><SiAdobephotoshop className='icons ps'/></a>
                        <a rel="noopener noreferrer" target='_blank' href="https://fr.wikipedia.org/wiki/Blender"><SiBlender className='icons blender'/></a>
                    </ul>
                </div>
            </div>    
        </div>
    );
};

export default Comp;