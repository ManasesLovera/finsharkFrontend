import React from 'react';
import logo from './finsharklogo.png';
import { Link } from 'react-router-dom';
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
                    <Link to="/">  
                        <img src={logo} alt="logo finshark" />
                    </Link>
                    <div className="font-bold lg:flex">  
                        <Link to="/search" className="text-black hover:text-blue-600">
                            Search
                        </Link>
                    </div>
                </div>
                <div className="lg:flex items-center space-x-6 text-back">
                    <a href="/login" className="hover:text-blue-500 ">
                        Login
                    </a>
                    <a href="/signup" className="bg-green-400 px-8 py-3 font-bold rounded text-black  hover:opacity-70">
                        Signup
                    </a>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;