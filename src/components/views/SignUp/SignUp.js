import React from 'react';
import InfoSection from '../../organismes/InfoSections';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import Pricing from '../../organismes/Pricing';

const SignUp = () => {
    return (
        <>
            <InfoSection {...homeObjOne} />
            <InfoSection {...homeObjTwo} />

        </>
    );
};

export default SignUp;