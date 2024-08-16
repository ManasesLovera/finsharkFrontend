import React, { ChangeEvent, SyntheticEvent, useState } from 'react';
import Search from '../../Components/Search/Search';
import ListPortfolio from '../../Components/Portfolio/ListPortfolio/ListPortfolio';
import CardList from '../../Components/CardList/CardList';
import Footer from '../../Components/Footer/Footer';
import { searchCompanies } from '../../api';
import { CompanySearch } from '../../company';

type Props = {

};

const SearchPage: React.FC<Props> = (props: Props) : JSX.Element => {

    const [search, setSearch] = useState<string>('');
    const [portfolioValues, setPortfolioValues] = useState<string[]>([]);
    const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
    const [serverError, setServerError] = useState('');

    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        setSearch(e.target.value);
    }
    const onPortfolioCreate = (e: any) => {
        e.preventDefault();
        const exists = portfolioValues.find( value => value === e.target[0].value);
        if (exists) return;
        const updatedPortfolio = [...portfolioValues, e.target[0].value];
        setPortfolioValues(updatedPortfolio);
    }

    const onPortfolioDelete = (e: any) => {
        e.preventDefault();
        const removed = portfolioValues.filter( value => value !== e.target[0].value);
        setPortfolioValues(removed);
    }

    const onSearchSubmit = async (e: SyntheticEvent) => {
        e.preventDefault();
        try {
        const result = await searchCompanies(search) || {data: []};
        if (typeof result === 'string') {
            setSearchResult(result);
        }
        else if (Array.isArray(result.data)) {
            setSearchResult(result.data);
        }
        }
        catch(error:any) {
        setServerError(error.message);
        console.log(error.message);
        }
    }
  
    return (
        <>
            <Search 
                onSearchSubmit={onSearchSubmit} 
                search={search} 
                handleSearchChange={handleSearchChange}/>
            <ListPortfolio 
                portfolioValues={portfolioValues} 
                onPortfolioDelete={onPortfolioDelete}/>
            <CardList 
                onPortfolioCreate={onPortfolioCreate} 
                searchResults={searchResult} />
            {serverError && <h1>Unable to connect to API</h1>}
            <Footer />
        </>
    );
}

export default SearchPage;