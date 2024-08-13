import React from 'react';
// import { Link } from 'react-router-dom'
// import { useAuth } from '../../Context/useAuth';

type Props = {

};

const Navbar = (props: Props) => {

    // const { isLoggedIn, user, logout } = useAuth();
    return (
        <nav className="relative container mx-auto p-6">
            <div className="flex items-center justify-between">
                <div className="flex items-center space-x-20">

                </div>
            </div>
        </nav>
    );
}

export default Navbar;