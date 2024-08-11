import React, { SyntheticEvent } from 'react';

type Props = {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
};

const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
    return (
        <>
            <form onSubmit={onPortfolioDelete}>
                <input hidden={false} value={portfolioValue} />
                <button onClick={e => onPortfolioDelete(e)}>X</button>
            </form>
        </>
    )
};

export default DeletePortfolio;