import React, { FormEvent, useState } from "react";
import { Link } from "react-router-dom";

import {
    Container,
    Form,
} from './styles';

export function Register(){
    const [userName,  setUserName] = useState('');
    const [email,  setEmail] = useState('');
    const [password,  setPassword] = useState('');
    const [comapnnyName,  setComapnnyName] = useState('');
    const [phone,  setPhone] = useState('');

    function handleFormSubmit(event: FormEvent){
        event.preventDefault();
        console.log(userName, password)
    }

    return(
        <Container>
            <Form onSubmit={handleFormSubmit}>
                <div>
                    <label htmlFor="username">Nome de usuário</label>
                    <input type="text" id="username" value={userName} onChange={event => setUserName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="email">E-mail</label>
                    <input type="text" id="email" value={email} onChange={event => setEmail(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="comapnnyName">Nome da empresa</label>
                    <input type="text" id="comapnnyName" value={comapnnyName} onChange={event => setComapnnyName(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="phone">Telefone</label>
                    <input type="text" id="phone" value={phone} onChange={event => setPhone(event.target.value)} />
                </div>
                <div>
                    <label htmlFor="password">Senha</label>
                    <input type="text" id="password" value={password} onChange={event => setPassword(event.target.value)} />
                </div>
                <button type="submit">Criar conta</button>
                <Link to="/" className="ButtonRegister">Já tenho conta</Link>
            </Form>
        </Container>
    )
}