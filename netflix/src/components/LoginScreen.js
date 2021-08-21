import React, { useState } from 'react'
import './css/Loginscreen.css'
import SignUpScreen from './SignUpScreen';
{/*https://www.bajajfinservmarkets.in/content/dam/emistoremarketplace/index/20-02-2020/netflix/Netflix-Banner_1080x419.jpg?impolicy=pqmedium */}
function Loginscreen() {
    const [signIn, setSignIn] = useState(false);

    return (
        <div className="loginscreen">
            <div className="loginscreen_background">
                <img className="loginscreen_logo" src="http://assets.stickpng.com/images/580b57fcd9996e24bc43c529.png" alt="" />
                <button onClick={() => setSignIn(true)} className="loginscreen_button">Sign In</button>
                <div className="loginscreen_gradient" />
            </div>
            <div className="loginscreen_body">
                {signIn ? (
                    <SignUpScreen />
                ): (
                    <>
                    <h1>Unlimited films, TV programmes and more.</h1>
                    <h2>Watch anywhere. cancle at any time.</h2>
                    <h3>Ready to watch? Enter your Email to create or restart your membership.</h3>
                    <div className="loginscreen_input">
                        <form>
                            <input type='email' placeholder="Email address" />
                            <button onClick={() => setSignIn(true)} className="loginscreen_getstarted">GET STARTED</button>
                        </form>
                    </div>
                </>
                )}
                
            </div>
        </div>
    )
}

export default Loginscreen