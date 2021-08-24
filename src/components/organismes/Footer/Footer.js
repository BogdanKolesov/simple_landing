import React from 'react';
import styled from 'styled-components';
import { Button, Input } from '../../atoms/';
import { Form } from '../../molecules';
import { Link } from 'react-router-dom';
import { FaFacebook, FaInstagram, FaTwitter, FaYoutube, FaGithub } from 'react-icons/fa';

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
    width: 100% ;
    display: flex;
    justify-content: space-around;

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

const SocailMedia = styled.section`
    min-width: 1000px;
    width: 100%;
`;

const SocialMediaWrap = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 90%;
    max-width: 1000px;
    margin: 40px auto 0 auto;

    @media screen and (max-width:820px){
        flex-direction: column;
    }
`;

const SocialLogo = styled(Link)`
    color: #fff;
    justify-self: start;
    cursor: pointer;
    text-decoration: none;
    font-size: 2rem;
    display: flex;
    align-items: center;
    margin-bottom: 16px;
`;
const SocialIcon = styled.div`
    margin-right: 10px;
`;

const WebsiteRights = styled.small`
    color: #fff;
    margin-bottom: 16px;
`;

const SocialIcons = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: 240px;
`;

const SocialIconLink = styled.a`
    color: #fff;
    font-size: 24px;
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
            <SocailMedia>
                <SocialMediaWrap>
                    <SocialLogo to='/'>
                        <SocialIcon />
                        Logotype
                    </SocialLogo>
                    <WebsiteRights>Crated by Bogdan Kolesov in 2021</WebsiteRights>
                    <SocialIcons>
                        <SocialIconLink href='/' target='_blank' aria-label='Facebook'>
                            <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Instagram'>
                            <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Youtube'>
                            <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Twitter'>
                            <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='/' target='_blank' aria-label='Github'>
                            <FaGithub />
                        </SocialIconLink>
                    </SocialIcons>
                </SocialMediaWrap>
            </SocailMedia>
        </FooterContainer>
    );
};

export default Footer;