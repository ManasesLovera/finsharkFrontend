import React, { SyntheticEvent } from 'react';
import CardPortfolio from '../CardPortfolio/CardPortfolio';
import './ListPortfolio.css';

type Props = {
    portfolioValues: string[];
    onPortfolioDelete: (e: SyntheticEvent) => void;
};

const ListPortfolio = ({portfolioValues, onPortfolioDelete}: Props) => {
    return (
        <>
            <h3>My Portfolio</h3>
            <ul>
                {portfolioValues &&
                    portfolioValues.map( (portfolioValue ) => {
                        return <CardPortfolio 
                                    onPortfolioDelete={onPortfolioDelete} 
                                    portfolioValue={portfolioValue} />
                    })}
            </ul>
        </>
    )
}

export default ListPortfolio;