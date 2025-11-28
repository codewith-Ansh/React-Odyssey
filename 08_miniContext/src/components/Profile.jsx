import React from 'react'
import UserContext from '../context/UserContext'
import { useContext, useState } from 'react'

function Profile() {
    const { user } = useContext(UserContext);
    if(!user){
        return <div> <br />Please Login</div>
    }
    
    return (
        <div>
            <h3>Welcome {user.username}</h3>
            <h3>Your password {user.password}</h3>
        </div>
    )
}

export default Profile