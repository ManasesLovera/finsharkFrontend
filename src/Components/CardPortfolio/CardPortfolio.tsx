import React from 'react';

type Props = {
    portfolioValue: string;
};

const CardPortfolio = ({portfolioValue}: Props) => {
    return (
        <>
            <h4>{portfolioValue}</h4>
            <button>X</button>
        </>
    )
}

export default CardPortfolio;