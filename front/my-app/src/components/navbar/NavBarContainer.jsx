import React, { useState, useEffect } from 'react'

import NavBar from './NavBar'
import NavBarAdmin from './NavBarAdmin'

const NavBarContainer = ({ isAdmin }) => {

    const [ isAdminState, setIsAdminState ] = useState(false)

    useEffect(() => {

        setIsAdminState(isAdmin)

    }, [isAdmin])

    return isAdminState ? <NavBarAdmin /> : <NavBar />
    
}

export default NavBarContainer