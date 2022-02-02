import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { api } from "../../Services/api";
import ReactLoading from 'react-loading';

import {
    Container,
    NavBar,
    Content,
    Convites,
    Convite,
    NomeUser,
    Email,
    Users,
    User,
    TitleConvite,
    AceitarConvite,
    TitleContatos,
    Convidar,
    EndCard,
} from './styles';

interface Perfil {
    email: string;
    id: number;
    nome: string;
    pode_convidar: boolean;
}

export function Perfis(){
    const navigate = useNavigate();
    const [perfis, setPerfis] = useState<Perfil[]>([]);
    const [convites, setConvites] = useState<Perfil[]>([]);
    const [loadingUsers, setLoadingUsers] = useState(false);
    const [loadingConvites, setLoadingConvites] = useState(false);


    function getPerfil(){
        api.get('/perfis/')
        .then((resp: any) => {
            // console.log(resp)
            setPerfis(resp.data)
            setLoadingUsers(false);
        })
        .catch((error: any) => {
            console.log(error)
        })
    }

    function getConvites(){
        api.get('/convites/')
        .then((resp: any) => {
            console.log(resp)
            setConvites(resp.data)
            setLoadingConvites(false);
        })
        .catch((error: any) => {
            console.log(error)
        })
    }

    useEffect(() => {
        setLoadingUsers(true);
        setLoadingConvites(true);

        getPerfil();
        getConvites();
    },[])
    
    return(
        <Container>
            <NavBar>
                <Link className="links" to="/home">Home</Link>
                <Link className="links" to="/" onClick={() => localStorage.clear()}>Logout</Link>
            </NavBar>
            <Content>
                {
                    loadingUsers ?
                    <ReactLoading type="spin" color="#2CAC6C" /> 
                    :
                    <Users>

                        {
                            perfis.map(perfil => {
                                return(
                                    <User key={perfil.id}>
                                        <NomeUser>{perfil.nome}</NomeUser>
                                        <EndCard>
                                            <Email>{perfil.email}</Email>
                                            {
                                                perfil.pode_convidar ? <Convidar>+</Convidar> : ''
                                            }
                                        </EndCard>
                                    </User>
                                )
                            })
                        }
                    </Users>
                }

                {
                    loadingConvites ?
                    <ReactLoading type="spin" color="#2CAC6C" />  
                    :
                    <Convites>
                        <TitleConvite>Convites</TitleConvite>
                        {
                            convites.length > 0 ?
                            convites.map(convite => {
                                return(
                                    <Convite key={convite.id}>
                                        <NomeUser>Daniel</NomeUser>
                                        <AceitarConvite>Aceitar</AceitarConvite>
                                    </Convite>
                                )
                            })
                            :
                            <p>Sem convites</p>
                        }
                    </Convites>
                }
            </Content>
            <TitleContatos>Contatos</TitleContatos>
            <Content>
                <Users>
                    <User>
                        <NomeUser>Daniel</NomeUser>
                        <Email>daniel@gmail.com</Email>
                    </User>
                    <User>
                        <NomeUser>Daniel</NomeUser>
                        <Email>daniel@gmail.com</Email>
                    </User>
                </Users>
            </Content>
        </Container>
    )
}