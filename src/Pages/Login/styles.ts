import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    background: #05AC6D;
`;

export const Form = styled.form`
    display: flex;
    flex-direction: column;
    justify-content: center;
    text-align: center;
    width: 100%;
    padding: 40px 200px;
    box-shadow: 1px 5px 29px -13px rgb(0 0 0 / 25%);
    border-radius: 4px;
    margin: 0 200px;
    background: #FFF;

    div{ 
        display: flex;
        flex-direction: column;
    }

    input{
        background: #EFEFEF;
        border-radius: 6px;
        padding: 6px 10px;
        border: none;
        height: 30px;
        margin:  12px 0;
    }

    label{ 
        color: #50555A;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 18px;
    }

    button{
        border-radius: 6px;
        padding: 10px 20px;
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #FFFFFF;
        background: #05AC6D;
        opacity: 0.8;
        transition: all 0.5s ease;
        border: none;
        margin: 20px 0;
        
        &:hover{
            cursor: pointer;
            filter: brightness(1.1);
        }
    }

    .ButtonRegister{
        font-family: 'Roboto';
        font-style: normal;
        font-weight: bold;
        font-size: 16px;
        color: #05AC6D;
        background: transparent;
        transition: all 0.5s ease;
        text-decoration: underline;
        margin: 0;
        
        &:hover{
            cursor: pointer;
            filter: brightness(1.1);
        }
    }
`;