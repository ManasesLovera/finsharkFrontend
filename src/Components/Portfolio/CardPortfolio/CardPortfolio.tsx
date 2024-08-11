import React, { SyntheticEvent } from 'react';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

type Props = {
    myKey: number;
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
};

const CardPortfolio = ({myKey, portfolioValue, onPortfolioDelete}: Props) => {
    return (
        <li key={myKey}>
            <h4>{portfolioValue}</h4>
            {/* <DeletePortfolio 
                onPortfolioDelete={onPortfolioDelete}
                portfolioValue={portfolioValue} /> */}
            <button onClick={e => onPortfolioDelete(e)}>X</button>
        </li>
    )
}

export default CardPortfolio;