import React from 'react'
import PropTypes from 'prop-types';
import Nav from "../NavBar"
import Avatar from './Avatar'
import UserMenu from "./UserMenu"


function UserLayout({children}) {
    return (
        <div>
            <Nav />
            <div className='max-w-6xl mx-auto py-8 flex' >
                <div   >
                    <Avatar />
                    <UserMenu/>
                </div>
                <div className='px-4 md:px-8'>
                    {children}
                </div>
            </div>
        </div>
    )
}

export default UserLayout


UserLayout.propTypes = {
    children: PropTypes.node.isRequired
  }