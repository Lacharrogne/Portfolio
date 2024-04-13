import React from 'react';

const Comp = () => {
    return (
        <div id='container-comp'>
            <h1 id='title-comp'>Compétences</h1>
            <div className='full-comp'>
                <div className='comp'>
                    <h3>Fronts</h3>
                    <ul>
                        <li>HTML5/CSS3</li>
                        <li>JavaScript</li>
                    </ul>
                </div>
                <div className='comp'>
                    <h3>Backs</h3>
                    <ul>
                        <li>PHP</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className='comp'>
                    <h3>Frameworks</h3>
                    <ul>
                        <li>React</li>
                        <li>SASS</li>
                    </ul>
                </div>
                <div className='comp'>
                    <h3>Autres</h3>
                    <ul>
                        <li>Photoshop</li>
                        <li>Blender</li>
                    </ul>
                </div>
            </div>    
        </div>
    );
};

export default Comp;