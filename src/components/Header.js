import React from 'react';
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <header>
            <nav>
                <ul>
                    <li><Link to="/">Portfolio</Link></li>
                    <li><Link to="/certificacao">Certificação</Link></li>
                </ul>
            </nav>
        </header>
    );
};

export default Header;