import React from 'react';
import styled from '@emotion/styled';
import PropTypes from 'prop-types';

const ResultDiv = styled.div`
    color: #FFF;
    font-family: Arial, Helvetica, sans-serif;
`;

const Info = styled.p`
    font-size: 18px;
    span {
        font-weight:bold;
    }
`;
const Price = styled.p`
    font-size: 30px;
    span {
        font-weight:bold;
    }
`;



const Quotes = ({ results }) => {
    if (Object.keys(results).length === 0) return null;
    return (
        <ResultDiv>
            <Price>The price is: <span>{results.PRICE}</span></Price>
            <Info>The highest Inforice of the day: <span>{results.HIGHDAY}</span></Info>
            <Info>the lowest price of the day: <span>{results.LOWDAY}</span></Info>
            <Info>Last 24 hours: <span>{results.CHANGE24HOUR}</span></Info>
        </ResultDiv>
    );
};

Quotes.propTypes = {
    results: PropTypes.object.isRequired,

};




export default Quotes;