import { ChangeEvent, SyntheticEvent, useState } from 'react';
import './App.css';
import CardList from './Components/CardList/CardList';
import Footer from './Components/Footer/Footer';
import Search from './Components/Search/Search';
import { CompanySearch } from './company';
import { searchCompanies } from './api';
// import { AxiosResponse } from 'axios';

function App() {

  const [search, setSearch] = useState<string>('');
  const [searchResult, setSearchResult] = useState<CompanySearch[]>([]);
  const [serverError, setServerError] = useState('');

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }

  const onClick = async (e: SyntheticEvent) => {
    try {

      const result = await searchCompanies(search) || {data: []};
      if (typeof result === 'string') {
        setSearchResult(result);
      }
      else if (Array.isArray(result.data)) {
        setSearchResult(result.data);
      }
      console.log('Search result: ',searchResult);
    }
    catch(error:any) {
      setServerError(error.message);
      console.log(error.message);
    }
  }

  return (
    <div className="App">
      <Search onClick={onClick} search={search} handleChange={handleChange}/>
      <CardList searchResults={searchResult} />
      {serverError && <h1>Unable to connect to API</h1>}
      <Footer />
    </div>
  );
};

export default App;
