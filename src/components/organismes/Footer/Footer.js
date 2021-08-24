import React from 'react';
import styled from 'styled-components';
import { Container, Button, Input } from '../../atoms/';
import { Form } from '../../molecules';

const FooterContainer = styled(Container)`
    background-color: #101522;
    padding: 4rem 0 2rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const FotterSubscription = styled.section`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    margin-bottom: 24px;
    color: #fff;
`;

const FooterSubHeading = styled.p`
    font-family: 'Trebuchet MS', 'Lucida Sans Unicode', 'Luciad Grande', 'Lucida Sans', Arial, sans-serif;
    margin-bottom: 24px;
    font-size: 24px;
`;

const FooterSubText = styled.p`
    margin-bottom: 24px;
    font-size: 20px;
`;


const Footer = () => {
    return (
        <FooterContainer>
            <FotterSubscription>
                <FooterSubHeading>
                    Join our exclusive membership to receive the lastest news and trends
                </FooterSubHeading>
                <FooterSubText>
                    You can unsubscribe at anytime
                </FooterSubText>
                <Form>
                    <Input name='email' type='email' placeholder='Your Email' />
                    <Button fontBig>Subscribe!</Button>
                </Form>
            </FotterSubscription>
        </FooterContainer>
    );
};

export default Footer;