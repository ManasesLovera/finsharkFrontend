import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { CompanyProfile } from '../../company';
import { getCompanyProfile } from '../../api';

type Props = {

};

const CompanyPage = (props: Props) => {
    let { ticket } = useParams();
    const [company, setCompany] = useState<CompanyProfile>();

    useEffect( () => {
        const getProfileInit = async () => {
            const result = await getCompanyProfile(ticket!);
            setCompany(result?.data[0]);
        }
        getProfileInit();
    },[ticket, company]);

    return (
        <>
            {
                company ? (
                    <div>
                        <h1>{company.companyName}</h1>
                        <div>
                            <div>
                                <strong>Industry:</strong> {company.industry}
                            </div>
                            <div>
                                <strong>Sector:</strong> {company.sector}
                            </div>
                            <div>
                                <strong>Country:</strong> {company.country}
                            </div>
                            <div>
                                <strong>Exchange:</strong> {company.exchange}
                            </div>
                            <div>
                                <strong>Price:</strong> {company.price}
                            </div>
                            <div>
                                <strong>Market capitalization:</strong> {company.mktCap}
                            </div>
                            <div>
                                <strong>Description:</strong> {company.description}
                            </div>
                        </div>
                    </div>
                ) : (
                    <div></div>
                )
            }
        </>
    );
}

export default CompanyPage;