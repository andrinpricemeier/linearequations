import { Container } from '@mui/material';
import PlausibleProvider from 'next-plausible';
import React from 'react';
import Footer from './Footer';
import NavBar from './NavBar';

const Layout = (props: any) => {
    const { children } = props;
    return (
        <PlausibleProvider domain="linear-equations.com">
            <div className='layout'>
                <NavBar />
                <main>
                    <Container>
                        {children}
                    </Container>
                </main>
                <Footer />
            </div>
        </PlausibleProvider>
    )
}

export default Layout;