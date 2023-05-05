import React from 'react';
import Courses from '../components/courses';
import Quizes from '../components/quizes';
import './home.css'

const Home = () => {
    return (
        <div className='home'>
            <Courses/>
            <Quizes/>
        </div>
    )
}

export default Home;

