import React, { ChangeEvent, SyntheticEvent } from 'react';
import './Search.css';

type Props = {
    onSearchSubmit: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleSearchChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({onSearchSubmit, search, handleSearchChange}: Props): JSX.Element => {

    return (
        <section className="relative bg-gray-100">
            <div className="max-w-4xl mx-auto p-6 space-y-6">
                <form 
                    className="form relative flex flex-col w-full p-10 space-y-4 bg-blue-500 rounded-lg md:flex-row md:space-y-0 md:space-x-3" 
                    onSubmit={onSearchSubmit}>
                    <input className="flex-1 p-3 border rounded border-solid border-gray-600 focus:outline-none" type="text" value={search} onChange={handleSearchChange}/>
                </form>
            </div>
        </section>
        // <div className="searchBar">
        //     <input type="text" value={search} 
        //         onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
        //         handleChange(e)} />
        //     <button onClick={e => onClick(e)}>Get data</button>
        // </div>
    );
};

export default Search;