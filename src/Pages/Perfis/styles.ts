import styled from 'styled-components';

export const Container = styled.div``;

export const NavBar = styled.div`
    width: 100%;
    background: #F0F0F0;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 15px;

    .links{
        color: #50555A;
        font-weight: bold;
        text-decoration: none;
        cursor: pointer;
    }
`;

export const Content = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 30px 150px;
`;

export const Users = styled.div`
    width: 40%;
`;

export const User = styled.div`
    padding: 15px 10px;
    border-radius: 6px;
    background: transparent;
    border: 1px solid #C4C4C4;
    display: flex;
    align-items: center;
    margin: 10px 0;
`;

export const NomeUser = styled.p`
    font-weight: bold;
    margin-right: 50px;
    color: #50555A;

`;

export const Email = styled.p``;

export const Convites = styled.div`
    width: 45%;
    background: #F0F0F0;
    border-radius: 6px;
`;

export const TitleConvite = styled.p`
    background: #2CAC6C;
    color: #FFF;
    font-weight: 600;
    border-radius: 8px;
    padding: 8px 4px;
    text-align: center;
`;


export const Convite = styled.div`
    padding: 15px;
    display: flex;
    justify-content: space-between;
`;

export const AceitarConvite = styled.button`
    background: #2CAC6C;
    color: #FFF;
    font-weight: 600;
    border-radius: 8px;
    padding: 8px 10px;
    border: none;
    cursor: pointer;
`;

export const Convidar = styled.button`
    background: #2CAC6C;
    color: #FFF;
    font-weight: 600;
    border-radius: 8px;
    padding: 8px 10px;
    border: none;
    cursor: pointer;
`;

export const TitleContatos = styled.h4`
    color: #50555A;
    font-weight: bold;
    font-size: 20px;
    padding: 0 150px;
`;

export const EndCard = styled.div`
    display: flex;
    justify-content: space-between;
    width: 100%;
`;