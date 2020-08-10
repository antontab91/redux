import React from 'react';
import UserMenu from './UserMenu';

class Header extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <header className="header">
                <UserMenu />
            </header>
        )
    }
}

export default Header;