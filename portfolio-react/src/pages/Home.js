import React from 'react';
import Profil from '../components/Profil';
import Nav from '../components/Nav';
import Comp from '../components/Comp';
import Projet from '../components/Projet';
// import Scroll from '../components/Scroll';
import Form from '../components/Form';

const Home = () => {
    return (
        <div>
            {/* <Scroll/> */}
            <Nav/>
            <Profil/>
            <Comp/>
            <Projet/>
            <Form/>
        </div>
    );
};

export default Home;