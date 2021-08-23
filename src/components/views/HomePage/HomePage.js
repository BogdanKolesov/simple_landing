import React from 'react';
import InfoSection from '../../organismes/InfoSections';
import { homeObjOne } from './Data';

const HomePage = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
        </>
    );
};

export default HomePage;