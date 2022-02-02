import React from 'react';

import './sign-in-and-sign-up.scss';

import SignUp from '../../components/sign-up';
import SignIn from '../../components/sign-in';

const SignInAndSignOut = () => (
    <div className="sign-in-and-sign-up">
        <SignIn/>
        <SignUp/>
    </div>
);

export default SignInAndSignOut;