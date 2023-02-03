import React, { useContext, useState } from 'react'
import SignBanner from './SignBanner'
import SignInPage from './SignInPage'
import SignUpPage from './SignUpPage'
import { DataContext } from '../../context/ContextProvider'

const Sign = () => {
    const [isSignUp, setIsSignUp] = useState(false)
    const [showPassword, setShowPassword] = useState(false)
    const { smallScreen } = useContext(DataContext)
    const handleShowPassword = () => {
        setShowPassword((prev) => !prev)
    }
    const switchMode = () => {
        setIsSignUp((prev) => !prev)
    }
    return (
        <React.Fragment>
            {
                smallScreen ?
                    <>

                        {
                            isSignUp ?
                                <SignUpPage switchmode={switchMode} showPassword={showPassword} handleShowPassword={handleShowPassword} />
                                :
                                <SignInPage switchmode={switchMode} showPassword={showPassword} handleShowPassword={handleShowPassword} />
                        }
                    </> :
                    <div className="row padding">

                        <div className="col-lg-6">
                            <SignBanner />
                        </div>
                        <div className="col-lg-6">

                            {
                                isSignUp ?
                                    <SignUpPage  switchmode={switchMode} showPassword={showPassword} handleShowPassword={handleShowPassword} />
                                    :
                                    <SignInPage switchmode={switchMode} showPassword={showPassword} handleShowPassword={handleShowPassword} />
                            }
                        </div>
                    </div>
            }

        </React.Fragment>
    )
}

export default Sign