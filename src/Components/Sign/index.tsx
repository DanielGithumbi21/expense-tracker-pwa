import React, { useState } from 'react'
import SignUp from './SignUp'
import Login from './Login'
import SignBanner from './SignBanner'

const Sign = () => {

    const [isSignup, setIsSignup] = useState<Boolean>(false)

    const switchMode = () => setIsSignup((prev: Boolean) => !prev)
    return (
        <div className="container-fluid">
            <div className="row padding">
                <div className="col-lg-6">
                    {
                        isSignup ? <SignUp switchMode={switchMode} /> : <Login switchMode={switchMode} />
                    }
                </div>
                <div className="col-lg-6">
                    <SignBanner />
                </div>
            </div>
        </div>
    )
}

export default Sign