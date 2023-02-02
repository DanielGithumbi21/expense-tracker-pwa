import React, { useState } from 'react'
import SignBanner from './SignBanner'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'

const Sign = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)

    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }
    const switchMode = () => {
        setIsSignUp((prev) => !prev)
    }
    return (
        <React.Fragment>
            <div className="row padding">
                <div className="col-lg-6">
                    <SignBanner />
                </div>
                <div className="col-lg-6">

                    {
                        isSignUp ?
                            <SignUpPage switchmode={switchMode} showPassword={showPassword} handleShowPassword={handleShowPassword} />
                            :
                            <SignInPage switchmode={switchMode} showPassword={showPassword} handleShowPassword={handleShowPassword} />
                    }
                </div>
            </div>
        </React.Fragment>
    )
}

export default Sign