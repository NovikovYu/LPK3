import SignUpForm from '@/feature/sign-up-form';
import { NextPage } from 'next';

import * as React from 'react';
        
 const SignUp:NextPage = () => {
    return (
        <div className="registration-form">
            <SignUpForm /> 
        </div>
    );
};

export default SignUp;