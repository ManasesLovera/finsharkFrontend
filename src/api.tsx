import axios from 'axios';
import { CompanySearch } from './company';

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (search: string) => {

    console.log(search);

    const data = await axios.get<SearchResponse>(
        `https://financialmodelingprep.com/api/v3/search?query=${search}&apikey=${process.env.REACT_APP_API_KEY}`
    );
    
    return data;
    
}