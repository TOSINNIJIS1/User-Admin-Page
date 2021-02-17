import React from 'react'
import { Nav, NavLink, Bars, NavMenu, NavButton, NavButtonLink } from './navStyle';
import './nav.css';

function NavBars() {
    return (
        <div className='navContainer'>
            {/* LOGO */}

            <Nav>
                <NavLink to='/'>
                    <h1 className='logo'> Logo </h1>
                </NavLink>
                
                <Bars />
                {/* NAV */}

                <NavMenu>

                    <NavLink to='/about' activeStyle>
                        About
                    </NavLink>

                    <NavLink to='/features' activeStyle>
                        Features
                    </NavLink>

                    <NavLink to='/homes' activeStyle>
                        Our Homes
                    </NavLink>

                    <NavLink to='/faq' activeStyle>
                        FAQ
                    </NavLink>
                </NavMenu>
                {/* Registration */}

                <NavButton>
                    <NavButtonLink to='/register'> 
                    <span className='register'> Sign Up </span>
                    </NavButtonLink>
                    
                    <NavButtonLink to='/login'> 
                    <span className='login'> Login </span>
                    </NavButtonLink>
                </NavButton>
            </Nav>

        </div>
    )
}

export default NavBars