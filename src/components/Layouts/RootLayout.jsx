import React from 'react';
import NavBar from '../NavBar';

const RootLayout = ({children}) => {
    return (
        <div>
            <NavBar/>
            <div>{children}</div>
        </div>
    );
};

export default RootLayout;