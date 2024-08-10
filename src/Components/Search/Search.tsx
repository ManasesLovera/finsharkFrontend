import React, { ChangeEvent, SyntheticEvent } from 'react';

type Props = {
    onClick: (e: SyntheticEvent) => void;
    search: string | undefined;
    handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
};

const Search: React.FC<Props> = ({onClick, search, handleChange}: Props): JSX.Element => {

    return (
        <div>
            <input type="text" value={search} 
                onChange={(e: React.ChangeEvent<HTMLInputElement>) => 
                handleChange(e)} />
            <button onClick={e => onClick(e)}>This is a button</button>
        </div>
    );
};

export default Search;