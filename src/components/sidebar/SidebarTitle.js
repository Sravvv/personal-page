import React from 'react';
import { Row } from 'simple-flexbox';
import './Sidebar.css'

function SidebarTitle() {
    return (
        <Row className="sbTitleContainer" horizontal="center" vertical="center">
            <span className="sbTitle">Sravant Chadalawada</span>
        </Row>
    );
}

export default SidebarTitle;
