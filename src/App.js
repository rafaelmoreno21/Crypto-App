import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import img from './cryptomonedas.png'
import Form from './components/Form';
import Quotes from './components/Quotes';
import Spinner from './components/Spinner';
const Container = styled.div`
  max-width:900px;
  margin:0 auto;
  @media (min-width:992px){
    display:grid;
    grid-template-columns:repeat(2,1fr);
    column-gap:2rem;
  }
`;

const Img = styled.img`
  max-width:100%;
  margin-top:5rem;
`;

const Heading = styled.h1`
  font-family: 'Bebas Neue', cursive;
  color: #FFF;
  text-align:left;
  font-weight: 700;
  font-size: 50px;
  margin-bottom: 50px;
  margin-top: 80px;
  &::after {
    content: '';
    width: 395px;
    height: 6px;
    background-color: #66A2FE;
    display:block;
  }
`;



function App() {

  const [coins, saveCoins] = useState('');
  const [cryptos, saveCryptos] = useState('');
  const [results, saveResults] = useState({});
  const [loading, saveLoading] = useState(false);


  useEffect(() => {

    const quotesCryptos = async () => {
      if (coins === '') return;

      //Consult API
      const url = `https://min-api.cryptocompare.com/data/pricemultifull?fsyms=${cryptos}&tsyms=${coins}`;
      const result = await axios.get(url);

      saveLoading(true);

      setTimeout(() => {
        saveLoading(false);

        saveResults(result.data.DISPLAY[cryptos][coins]);
      }, 3000);
    }
    quotesCryptos();

  }, [coins, cryptos])


  const component = (loading) ? <Spinner /> : <Quotes results={results} />


  return (
    <Container>
      <div>
        <Img
          src={img}
          alt="Img cryto"
        />
      </div>
      <div>
        <Heading>Cryptocurrency Quotes</Heading>

        <Form
          saveCoins={saveCoins}
          saveCryptos={saveCryptos}

        />
        {component}
      </div>


    </Container>
  );
}

export default App;
