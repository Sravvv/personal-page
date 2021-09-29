import React from 'react';
import { Column } from 'simple-flexbox';
import './Sidebar.css'
import SidebarItem from './SidebarItem';
import SidebarTitle from './SidebarTitle';

function Sidebar(props) {
    return (
        <Column className="sbContainer">
            <SidebarTitle />
            <Column className="sbList">
                <SidebarItem title="Landing"  onClick={() => props.onChange('Landing')} active={props.current === 'Landing'}/>
                <SidebarItem title="Projects" onClick={() => props.onChange('Projects')} active={props.current === 'Projects'}/>
                <SidebarItem title="Resume" onClick={() => props.onChange('Resume')} active={props.current === 'Resume'}/>
                <SidebarItem title="Contact" onClick={() => props.onChange('Contact')} active={props.current === 'Contact'}/>
                <SidebarItem title="Github" onClick={() => window.location.href='https://github.com/Sravvv'}/>
            </Column>
        </Column>
    );  
}



export default Sidebar;