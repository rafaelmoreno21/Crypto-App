import React, { Fragment, useState } from 'react';
import styled from '@emotion/styled';

const Label = styled.label`
    font-family:'Bebas Neue',cursive;
    color:#FFF;
    text-transform:uppercase;
    font-weight:bold;
    font-size:2.4rem;
    margin-top:2rem;
    display:block;
`;

const Select1 = styled.select`
    width: 100%;
    display:block;
    padding: 1rem;
    -webkit-appearance: none;
    border-radius: 10px;
    border: none;
    font-size: 1.2rem;
`;



const useCrypto = (label, stateInit, options) => {

    // State de nuestro custom hook

    const [state, updateState] = useState(stateInit);

    const SelectCrypto = () => (

        <Fragment>

            <Label>{label}</Label>
            <Select1
                onChange={e => updateState(e.target.value)}
                value={state}
            >

                <option value="">- Select -</option>
                {options.map(option => (
                    <option key={option.CoinInfo.Id} value={option.CoinInfo.Name}>{option.CoinInfo.FullName}</option>
                ))}
            </Select1>
        </Fragment>
    );
    // Retornar state, interfaz y fn que modifica el state
    return [state, SelectCrypto, updateState];
}

export default useCrypto;