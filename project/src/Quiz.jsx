import React from 'react';
import Q1 from './Q1.jsx';
import Q2 from './Q2.jsx';
import QuizTitle from './QuizTitle.jsx'


const Quiz = () => {
    return (
        <div style={{border: '2px solid black', width: '400px', height: '300px', marginTop: '20px', padding: '20px 10px'}}>
            <QuizTitle/>
            <Q1/>
            <Q2/>
        </div>
    )
}
export default Quiz;