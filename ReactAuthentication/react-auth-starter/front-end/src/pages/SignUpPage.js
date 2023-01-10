import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToken } from '../auth/useToken';
import axios from 'axios';

function SignUpPage(){
    const [token, setToken] = useToken();
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const onSignUpClicked = async() => {
        const response = await axios.post('/api/signup', {
            email: emailValue,
            password: passwordValue
        });
        const { token } = response.data;
        //console.log(token);
        setToken(token);
        history.push('/')
        
    }

    const history = useHistory();
    return (
        <div className='content-container'>
            <h1>
                SignUpPage
            </h1>
            <input value={emailValue} onChange={e => setEmailValue(e.target.value)} placeholder="someone@email.com"  />
            <input value={passwordValue} onChange={e => setPasswordValue(e.target.value)} type="password"
                   placeholder='Password'/>
            <button disabled={!emailValue || !passwordValue} onClick={onSignUpClicked} >Sign Up</button>
            <button onClick={ () => history.push('/login')}>Already have an Account ? Login Up</button>
        </div>
    )
}
export default SignUpPage;