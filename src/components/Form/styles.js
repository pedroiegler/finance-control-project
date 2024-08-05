import styled from "styled-components";

export const Container = styled.div`
    max-width: 1320px;
    margin: 20px auto;
    width: 98%;
    background-color: #fff;
    box-shadow: 0px 0px 5px #ccc;
    border-radius: 5px;
    display: flex;
    justify-content: space-around;
    padding: 35px 0;
    gap: 10px;

    @media (max-width: 750px){
        display: grid;
    }
`;

export const InputContent = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
`;

export const Label = styled.label`
    font-size: 14px;
`;

export const Input = styled.input`
    outline: none;
    border-radius: 5px;
    padding: 8px;
    font-size: 14px;
    border: 1px solid #ccc;
    margin-left: 8px;
`;

export const RadioGroup = styled.div`
    display: flex;
    align-items: center;

    input{
        margin-left: 20px;
        margin-right: 6px;
        accent-color: black;
    }
`;

export const Button = styled.button`
    padding: 5px 18px;
    border: none;
    border-radius: 5px;
    cursor: pointer;
    font-size: 14px;
    color: white;
    background-color: #011375;
    transition: .1s;

    &:hover {
        background-color: #001069;
        transform: scale(1.02);
    }
`;