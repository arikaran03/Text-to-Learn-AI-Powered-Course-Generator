import React from 'react'
import { useAuth0 } from "@auth0/auth0-react";

export const Profile = () => {
    const {isLoading, user, isAuthenticated} = useAuth0(); 
    if(isLoading){return <div>loading ...</div>; }

    return (
        isAuthenticated && (
            <div>
                <img src={user.picture} alt={user.name}/>
                <h2>{user.name}</h2>
                <p>{user.email}</p>
            </div>
        )
  )
}
export default Profile;