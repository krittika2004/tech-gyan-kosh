import React from 'react';
import { Navbar, TextInput, Button } from 'flowbite-react';
import { Link, useLocation } from 'react-router-dom';
import { AiOutlineSearch } from 'react-icons/ai';
import { FaMoon } from 'react-icons/fa';

const Header = () => {
    const location = useLocation();
    const path = location.pathname;

    return (
        <Navbar className='border-b-2 py-2 flex flex-row gap-x-10'>
            <Link to="/" className='self-center whitespace-nowrap font-semibold dark:text-white'>
                <span className='px-2 py-1 bg-gradient-to-r from-teal-400 to-sky-400 rounded-lg'>TechGyaan</span>
            </Link>
            <form className='ml-10'>
                <TextInput
                    type='text'
                    placeholder='Search'
                    rightIcon={AiOutlineSearch}
                    className='hidden lg:inline'
                />
            </form>
            <Button>
                <AiOutlineSearch className='w-12 h-12 lg:hidden' color='grey' pill />
            </Button>
            <div className='ml-48 flex gap-2  md:order-2'>
                <Button className='w-10 h-12 p-2 hidden sm:inline ' color="grey" pill>
                    <FaMoon />
                </Button>
                <Link to="/sign-in">
                    <Button className='bg-gradient-to-r from-cyan-400 to-sky-500 px-2 lg:rounded self-center' color="grey" pill>
                        SignIn
                    </Button>
                </Link>
                <Navbar.Toggle />
            </div>
            <Navbar.Collapse>
                <Navbar.Link active={path === "/"}>
                    <Link to='/'>Home</Link>
                </Navbar.Link>
                <Navbar.Link active={path === "/about"}>
                    <Link to='/about'>About</Link>
                </Navbar.Link>
                {/* <Navbar.Link active={path === "/projects"}>
                    <Link to='/projects'>Projects</Link>
                </Navbar.Link> */}
            </Navbar.Collapse>
        </Navbar>
    );
}

export default Header;
