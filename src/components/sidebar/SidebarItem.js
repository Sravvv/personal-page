import React from 'react';
import { bool, string} from 'prop-types';
import { Row } from 'simple-flexbox';
import './Sidebar.css'

function SidebarItem(props) {
    const {active, title, ...otherProps} = props;
    return (
        <Row className={('sbItemActiveContainer' && active) ? 'sbItemActiveContainer' : 'sbItemContainer'} vertical="center" {...otherProps}>
            {active && <div className="sbItemActiveBar"></div>}
            <span className="sbItemTitle">{title}</span>
        </Row>
    );
}

SidebarItem.propTypes = {
    active: bool,
    title: string
};

export default SidebarItem;