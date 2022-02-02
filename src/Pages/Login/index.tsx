import React, { FormEvent, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import {api} from '../../Services/api';
import {login} from '../../Services/utils'

import {
    Container,
    Form,
} from './styles';

export function Login(){
    const [userName,  setUserName] = useState('');
    const [password,  setPassword] = useState('');
    const navigate = useNavigate();

    function handleFormSubmit(event: FormEvent){
        event.preventDefault();
        if(userName !== '' || password !== ''){
            api.post('/login/',{
                username: userName,
                password: password,
            })
            .then((resp: any) => {
                // console.log(resp)
                login(resp.data.token)
                navigate('/perfis');
                setUserName('');
                setPassword('');
            })
            .catch((error: any) => {
                console.log(error)
                alert('Usuário ou senha inválidos')
            })
        }else {
            alert('Digite um e-mail e senha válidos')
        }
    }

    return(
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="username">Nome de usuário</label>
                    <input type="text" id="username" value={userName} onChange={event => setUserName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="text" id="password" value={password} onChange={event => setPassword(event.target.value)} />
                </div>
                <button type="submit">Entrar</button>
                <Link to="/register" className="ButtonRegister">Criar conta</Link>
            </Form>
        </Container>
    )
}