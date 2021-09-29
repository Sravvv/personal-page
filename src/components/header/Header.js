import React from 'react';
import { Row } from 'simple-flexbox';
import { string } from 'prop-types';
import './Header.css'

function Header (props) {
    const { title } = props;
    return (
        <Row className="headerContainer" vertical="center" horizontal="space-between">
            <span className="headerTitle">{title}</span>
        </Row>
    );
}

Header.propTypes = {
    title: string
};

export default Header;