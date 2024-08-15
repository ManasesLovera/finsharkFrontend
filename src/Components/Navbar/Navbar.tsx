import React from 'react';
import logo from './finsharklogo.png';
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
                    <img src={logo} alt="logo finshark" />
                    <div className="font-bold lg:flex">
                        <a href="" className="text-black hover:text-darkBlue">
                            Dashboard
                        </a>
                    </div>
                </div>
                <div className="lg:flex items-center space-x-6 text-back">
                    <a href="" className="hover:text-darkBlue ">
                        Login
                    </a>
                    <a href="" className="bg-lightGreen px-8 py-3 font-bold rounded text-black  hover:opacity-70">
                        Signup
                    </a>
                </div>
            </div>
        </nav>
        
    );
}

export default Navbar;