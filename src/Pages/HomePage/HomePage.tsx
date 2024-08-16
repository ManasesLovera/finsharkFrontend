import React from 'react';
import Hero from '../../Components/Hero/Hero';

type Props = {

};

const HomePage : React.FC<Props> = (props: Props) : JSX.Element => {
    return (
        <>
            <Hero />
        </>
    );
};

export default HomePage;