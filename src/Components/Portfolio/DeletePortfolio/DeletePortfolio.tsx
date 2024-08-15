import React, { SyntheticEvent } from 'react';

type Props = {
    onPortfolioDelete: (e: SyntheticEvent) => void;
    portfolioValue: string;
};

const DeletePortfolio = ({onPortfolioDelete, portfolioValue}: Props) => {
    return (
        <>
            <form onSubmit={onPortfolioDelete}>
                <input hidden={true} value={portfolioValue} />
                <button className="block w-full py-3 text-white duration-200 border rounded-lg bg-red-500 hover:text-red-500 hover:bg-white border-red-500">
                    Remove
                </button>
            </form>
        </>
    )
};

export default DeletePortfolio;