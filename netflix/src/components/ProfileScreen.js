import React from 'react'
import { useSelector } from 'react-redux'
import { auth } from '../Firebase'
import './css/profilescreen.css'
import { selectUser } from './features/userSlice'
import Nav from './Nav'
import Planscreen from './Planscreen'

function ProfileScreen() {
    const user = useSelector(selectUser);
    return(
        <div className="profilescreen">
            <Nav />
            <div className="profilescreen_body">
                <h1>Edit Profile</h1>
                <div className="profilescreen_info">
                    <img src="https://pbs.twimg.com/profile_images/1240119990411550720/hBEe3tdn_400x400.png" alt="" />
                    <div className="profilescreen_details">
                        <h2>{user.email}</h2>
                        <div className="profilescreen_plans">
                            <h3>Plans</h3>
                           {/* <PlanScreen /> */}
                            <button onClick={() => auth.signOut()} className="profilescreen_signout">Sign Out</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProfileScreen