import React from 'react';
import Profil from '../components/Profil';
import Nav from '../components/Nav';
import Skill from '../components/Skill';
import Projet from '../components/Projet';
import Form from '../components/Form';
// import Slider from '../components/Slider';

const Home = () => {
    return (
        <div>
            {/* <Slider/> */}
            <Nav/>
            <Profil/>
            <Skill/>
            <Projet/>
            <Form/>
        </div>
    );
};

export default Home;