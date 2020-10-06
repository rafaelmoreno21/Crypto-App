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



const useCoin = (label, stateInit, options) => {

    // State de nuestro custom hook

    const [state, updateState] = useState(stateInit);

    const Select = () => (
        <Fragment>

            <Label>{label}</Label>
            <Select1
                onChange={e => updateState(e.target.value)}
                value={state}
            >

                <option value="">- Select -</option>
                {options.map(option => (
                    <option key={option.code} value={option.code}>{option.name}</option>
                ))}
            </Select1>
        </Fragment>
    );
    // Retornar state, interfaz y fn que modifica el state
    return [state, Select, updateState];
}

export default useCoin;