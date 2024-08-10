import axios from 'axios';
import { CompanySearch } from './company';

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (query: string) => {
    try {
        return await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${query}&apikey=${process.env.REACT_APP_API_KEY}`
        );
    }
    catch (error:any) {
        console.log("error message: ", error.message);
    }
}