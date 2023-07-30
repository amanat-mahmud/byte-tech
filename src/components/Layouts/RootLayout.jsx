import React from 'react';
import Footer from '../Footer';

const RootLayout = ({children}) => {
    return (
        <div>
            <div>{children}</div>
            <Footer/>
        </div>
    );
};

export default RootLayout;