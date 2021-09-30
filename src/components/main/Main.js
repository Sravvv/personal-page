import React from 'react';
import { Row, Column } from 'simple-flexbox';
import './Main.css'

function Main(props) {
    return (
        <div className="mainContent">
            <span className={(props.current === 'Landing') ? 'divActive' : 'divInactive'}>Landing</span>
            <span className={(props.current === 'Projects') ? 'divActive' : 'divInactive'}>Projects</span>
            <span className={(props.current === 'Resume') ? 'divActive' : 'divInactive'}>Resume</span>
            <span className={(props.current === 'Contact') ? 'divActive' : 'divInactive'}>Contact</span>
        </div>
    );
}

export default Main;