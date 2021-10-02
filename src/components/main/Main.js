import React from 'react';
import { Row, Column } from 'simple-flexbox';
import './Main.css'
import Contact from './Contact'


function Main(props) {
    return (
        <div className="mainContent">
            <span className={(props.current === 'Landing') ? 'divActive' : 'divInactive'}>Landing</span>
            <span className={(props.current === 'Projects') ? 'divActive' : 'divInactive'}>Projects</span>
            <span className={(props.current === 'Resume') ? 'divActive' : 'divInactive'}>Resume</span>
            <Contact current={props.current} />
        </div>
    );
}

export default Main;