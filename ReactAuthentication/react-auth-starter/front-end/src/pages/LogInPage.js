import axios from 'axios';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useToken } from '../auth/useToken';

function LogInPage(){
    const history = useHistory();
    const [token, setToken] = useToken();
    const [emailValue, setEmailValue] = useState('');
    const [passwordValue, setPasswordValue] = useState('');

    const onLogInClicked = async() => {
        const result = await axios.post("/api/login", {
            email: emailValue,
            password: passwordValue
        });
        const {token} = result.data;
        console.log(token);
        setToken(token);
        history.push('/');
    }

    
    return (
        <div className='content-container'>
            <h1>
                LogInPage
            </h1>
            <input value={emailValue} onChange={e => setEmailValue(e.target.value)} placeholder="someone@email.com"  />
            <input value={passwordValue} onChange={e => setPasswordValue(e.target.value)} type="password"
                   placeholder='Password'/>
            <button disabled={!emailValue || !passwordValue} onClick={onLogInClicked}>Log In</button>
            <button>Forgot Password ? </button>
            <button onClick={() => history.push('/signup')}>Sign Up</button>
        </div>
    )
};
export default LogInPage;