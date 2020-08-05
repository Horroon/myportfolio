import React, { useState } from 'react';
import { Input } from './input';

export const Login: React.FC<{ API: string }> = ({ API }): JSX.Element => {
    
    const [email, setEmail] = useState<string>('');
    const [password, setPassword] = useState<string>('');

    const loginMe = () => {
        if (email && password) {
            fetch(API)
                .then(res => res.json)
                .then(data => console.log(data))
                .catch(err => console.error('login err>'))
        } else {
            //show message here
        }
    }

    return <div>
        <Input id={"eml-id"} name="Email" onchange={(e) => setEmail(e.target.value)} />
        <Input id={"eml-id"} name="password" onchange={(e) => setPassword(e.target.value)} />
        <button onClick={() => loginMe()}> Login</button>
    </div>
}