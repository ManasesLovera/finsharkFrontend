import axios from 'axios';
import { CompanyProfile, CompanySearch } from './company';

interface SearchResponse {
    data: CompanySearch[];
}

export const searchCompanies = async (search: string) => {

    try {

        console.log(search);
    
        const data = await axios.get<SearchResponse>(
            `https://financialmodelingprep.com/api/v3/search?query=${search}&apikey=${process.env.REACT_APP_API_KEY}`
        );
        
        return data;
    }
    catch(error: any) {
        console.error(error);
    }
}

export const getCompanyProfile = async (query: string) => {
    try {
        const data = await axios.get<CompanyProfile[]>(`https://financialmodelingprep.com/api/v3/profile/${query}?apikey=${process.env.REACT_APP_API_KEY}`);
        return data;
    }
    catch (error: any) {
        console.error("Error message from API: ",error.message);
    }
}