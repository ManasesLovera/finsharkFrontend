import React from 'react';

type Props = {};

const Footer: React.FC<Props> = (props: Props) : JSX.Element => {

    return (
        <div className="fixed bottom-0 bg-white w-full p-2">
            Data provided by Financial Modeling Prep
        </div>
    )
};

export default Footer;