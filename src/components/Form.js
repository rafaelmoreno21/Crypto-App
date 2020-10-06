import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Error from './Error';
import useCoin from '../hooks/useCoin';
import PropTypes from 'prop-types';
import axios from 'axios';
import useCrypto from '../hooks/useCrypto'

const Button = styled.input`
    margin-top: 20px;
    font-weight: bold;
    font-size: 20px;
    padding: 10px;
    background-color: #66a2fe;
    border: none;
    width: 100%;
    border-radius: 10px;
    color: #FFF;
    transition: background-color .3s ease;
    &:hover {
        background-color: #326AC0;
        cursor:pointer;
    }
`;


const Form = ({ saveCoins, saveCryptos }) => {

    const [listcrypto, saveCrypto] = useState([]);
    const [error, saveError] = useState(false);

    const COINS = [
        { code: 'USD', name: 'United states dollar' },
        { code: 'MXN', name: 'Mexican peso' },
        { code: 'EUR', name: 'Euro' },
        { code: 'GBP', name: 'Pound sterling' }
    ]
    // Utilizar useCoin
    const [coin, SelectCoin] = useCoin('Choose your currency', '', COINS);

    const [crypto, SelectCrypto] = useCrypto('Choose your crypto', '', listcrypto)


    useEffect(() => {
        const consultAPI = async () => {
            const url = 'https://min-api.cryptocompare.com/data/top/mktcapfull?limit=10&tsym=USD';
            const result = await axios.get(url)
            saveCrypto(result.data.Data);
        }
        consultAPI();
    }, [crypto])


    const quoteCurrency = e => {
        e.preventDefault();

        if (coin === '' || crypto === '') {
            saveError(true);
            return;
        }
        saveError(false);
        saveCoins(coin);
        saveCryptos(crypto);

    }




    return (
        <form
            onSubmit={quoteCurrency}

        >
            {error ? <Error message="All fields is required" /> : null}


            <SelectCoin />
            <SelectCrypto />

            <Button
                type="submit"
                value="Calcute"
            />
        </form>
    );
};

Form.propTypes = {
    saveCoins: PropTypes.func.isRequired,
    saveCryptos: PropTypes.func.isRequired
};



export default Form;




