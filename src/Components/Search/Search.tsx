import React, { ChangeEvent, SyntheticEvent } from 'react';
import './Search.css';

type Props = {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props): JSX.Element => {

    return (
        <>
            <form className="searchBar" onSubmit={onSearchSubmit}>
                <input type="text" value={search} onChange={handleSearchChange}/>
            </form>
        </>
        // <div className="searchBar">
        //     <input type="text" value={search} 
        //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
        //         handleChange(e)} />
        //     <button onClick={e => onClick(e)}>Get data</button>
        // </div>
    );
};

export default Search;