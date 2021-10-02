import React from 'react';
import { Row, Column } from 'simple-flexbox';
import './Main.css'
import Contact from './Contact'
import Resume from './Resume'


function Main(props) {
    return (
        <div className="mainContent">
            <span className={(props.current === 'Landing') ? 'divActive' : 'divInactive'}>Landing</span>
            <span className={(props.current === 'Projects') ? 'divActive' : 'divInactive'}>Projects</span>
            <Resume current={props.current} />
            <Contact current={props.current} />
        </div>
    );
}

export default Main;