import React, {useState} from 'react';

type Props = {};

const Search: React.FC<Props> = (props:Props): JSX.Element => {

    const [search, setSearch] = useState<string>('');
    return (
        <div>
            <input type="text" value={search} onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)} />
            <button onClick={(e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => console.log(e)}>This is a button</button>
        </div>
    );
}

export default Search;