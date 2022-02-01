import React from 'react';

import './sign-in.scss';

import FormInput from '../form-input';
import CustomButton from '../custom-button';

import { signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            email: '',
            password: ''
        }
    }

    handleSubmit = event => {
        event.preventDefault();

        this.setState({email: '', password: ''});
    }

    handleChange = event => {
        const { value, name } = event.target;
        this.setState({ [name]: value})
    }

    render() {
        return (
            <div className="sign-in">
                <h2>I already have an account</h2>
                <span>Sign in with your email and password</span>
                
                <form onSubmit={this.handleSubmit}>
                    <FormInput 
                        type="email" 
                        name="email" 
                        label="email"
                        handleChange={this.handleChange} 
                        value={this.state.email} 
                        required
                    />
                    <FormInput 
                        type="password" 
                        name="password"
                        label="password"
                        handleChange={this.handleChange} 
                        value={this.state.password} 
                        required
                    />
                    <div className="buttons">
                        <CustomButton type="submit" value="Submit Form">Sign In</CustomButton>
                        <CustomButton onClick={signInWithGoogle} isGoogleSignIn>
                            Sign in with Google
                        </CustomButton>
                    </div>
                    
                </form>
            </div>
        )
    }
}

export default SignIn;