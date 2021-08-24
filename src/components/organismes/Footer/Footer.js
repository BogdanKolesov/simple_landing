import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../atoms/';
import { Form } from '../../molecules';
import { Link } from 'react-router-dom';

const FooterContainer = styled.div`
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

const FooterLinksContainer = styled.div`
    width: 100%;
    max-width: 1000px;
    display: flex;
    justify-content: center;

    @media screen and (max-width: 820px){
        padding-top: 32px;
    }
`;

const FooterLinksWrapper = styled.div`
    display: flex;

    @media screen and (max-width: 820px){
        align-items: center;
        justify-content: center;
        flex-wrap: wrap;
    }
`;

const FooterLinkItems = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    margin: 16px;
    text-align: left;
    box-sizing: border-box;
    @media screen and (max-width: 420px){
    margin: 0;
    padding: 10px;
    width: 100%;
    }
`;

const FooterLinkTitle = styled.h3`
    margin-bottom: 16px;
    color: #fff;
`;

const FooterLink = styled(Link)`
    color: #fff;
    text-decoration: none;
    margin-bottom: 0.5rem;
    &:hover{
        color: #0467fb;
        transition: 0.3s ease-out;
    }
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
            <FooterLinksContainer>
                <FooterLinksWrapper>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            About us:
                        </FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/testimonial'>Testimonials</FooterLink>
                        <FooterLink to='/careers'>Careers</FooterLink>
                        <FooterLink to='/investors'>Investors</FooterLink>
                        <FooterLink to='/terms'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Contact us:
                        </FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/testimonial'>Testimonials</FooterLink>
                        <FooterLink to='/careers'>Careers</FooterLink>
                        <FooterLink to='/investors'>Investors</FooterLink>
                        <FooterLink to='/terms'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Videos:
                        </FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/testimonial'>Testimonials</FooterLink>
                        <FooterLink to='/careers'>Careers</FooterLink>
                        <FooterLink to='/investors'>Investors</FooterLink>
                        <FooterLink to='/terms'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                    <FooterLinkItems>
                        <FooterLinkTitle>
                            Social media:
                        </FooterLinkTitle>
                        <FooterLink to='/sign-up'>How it works</FooterLink>
                        <FooterLink to='/testimonial'>Testimonials</FooterLink>
                        <FooterLink to='/careers'>Careers</FooterLink>
                        <FooterLink to='/investors'>Investors</FooterLink>
                        <FooterLink to='/terms'>Terms of Service</FooterLink>
                    </FooterLinkItems>
                </FooterLinksWrapper>
            </FooterLinksContainer>
        </FooterContainer>
    );
};

export default Footer;