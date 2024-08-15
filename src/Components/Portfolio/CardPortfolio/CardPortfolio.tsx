import React, { SyntheticEvent } from 'react';
import DeletePortfolio from '../DeletePortfolio/DeletePortfolio';

type Props = {
    portfolioValue: string;
    onPortfolioDelete: (e: SyntheticEvent) => void;
};

const CardPortfolio = ({portfolioValue, onPortfolioDelete}: Props) => {
    return (
        <div className="flex flex-col w-full p-8 space-y-4 text-center rounded-lg shadow-lg md:w-1/3">
            <h4>{portfolioValue}</h4>
            <DeletePortfolio 
                onPortfolioDelete={onPortfolioDelete}
                portfolioValue={portfolioValue} />
        </div>
    )
}

export default CardPortfolio;