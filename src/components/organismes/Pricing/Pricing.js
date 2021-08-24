import React from 'react';
import styled from 'styled-components';
import { Button, Heading } from '../../atoms';
import { FaLeaf, FaGrinStars, FaGrinTongueWink } from "react-icons/fa";

const PricingSection = styled.section`
    background: #0000CD;
    padding-top: 20px;
    padding-bottom: 20px;
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;
const PricingHeader = styled(Heading)`
    color: #fff;
`;

const PricingContainer = styled.div`
    width: 80%;
    display: flex;
    justify-content: space-around;
    align-items: center;
    padding-top: 50px;
    padding-bottom: 50px;
    background: inherit;
    @media screen and (max-width:860px){
        flex-direction: column;
        width: 100%;
    }
`;

const PricingItem = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    padding: 5px 8px;
    max-width: 310px;
    background-color: #101522;
    border: 2px solid blue;
    border-radius: 10px;
    padding-bottom: 15px;
`;

const PriceIcon = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 5.1rem;
    padding: 5px;
    color: #fff;
`;

const PricingTitle = styled.h3`
    width: 100%;
    text-align: center;
    font-size: 23px;
    padding: 3px;
    color: #fff;
`;
const PricingSubtitle = styled.p`
    width: 80%;
    color: #fff;
    padding: 2px;
    text-align: left;
    margin-top: 15px;
    margin-bottom: 15px;
`;

const PricingList = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    margin: 4px;
    width: 80%;
    margin-bottom: 32px;
`;

const PricingListItem = styled.p`
    text-align: left;
    padding: 2px;
    color: #808080;
`;


const Pricing = () => {
    return (

        <PricingSection>
            <PricingHeader>Sales for you!</PricingHeader>
            <PricingContainer>

                <PricingItem>
                    <PriceIcon>
                        <FaLeaf />
                    </PriceIcon>
                    <PricingTitle>
                        For Sale!
                    </PricingTitle>
                    <PricingSubtitle>
                        Get it!
                    </PricingSubtitle>
                    <PricingList>
                        <PricingListItem>
                            100 peaces Lorem ipsum dolor sit amet.
                        </PricingListItem>
                        <PricingListItem>
                            Lorem ipsum dolor sit.
                        </PricingListItem>
                        <PricingListItem>
                            Lorem ipsum dolor sit amet consectetur.
                        </PricingListItem>
                        <PricingListItem>
                            Lorem ipsum dolor sit.
                        </PricingListItem>
                    </PricingList>
                    <Button>Choose plan</Button>
                </PricingItem>

                <PricingItem>
                    <PriceIcon>
                        <FaGrinStars />
                    </PriceIcon>
                    <PricingTitle>
                        For Sale!
                    </PricingTitle>
                    <PricingSubtitle>
                        Get it!
                    </PricingSubtitle>
                    <PricingList>
                        <PricingListItem>
                            100 peaces Lorem ipsum dolor sit amet.
                        </PricingListItem>
                        <PricingListItem>
                            Lorem ipsum dolor sit.
                        </PricingListItem>
                        <PricingListItem>
                            Lorem ipsum dolor sit amet consectetur.
                        </PricingListItem>
                        <PricingListItem>
                            Lorem ipsum dolor sit.
                        </PricingListItem>
                    </PricingList>
                    <Button>Choose plan</Button>
                </PricingItem>

                <PricingItem>
                    <PriceIcon>
                        <FaGrinTongueWink />
                    </PriceIcon>
                    <PricingTitle>
                        For Sale!
                    </PricingTitle>
                    <PricingSubtitle>
                        Get it!
                    </PricingSubtitle>
                    <PricingList>
                        <PricingListItem>
                            100 peaces Lorem ipsum dolor sit amet.
                        </PricingListItem>
                        <PricingListItem>
                            Lorem ipsum dolor sit.
                        </PricingListItem>
                        <PricingListItem>
                            Lorem ipsum dolor sit amet consectetur.
                        </PricingListItem>
                        <PricingListItem>
                            Lorem ipsum dolor sit.
                        </PricingListItem>
                    </PricingList>
                    <Button>Choose plan</Button>
                </PricingItem>
            </PricingContainer>
        </PricingSection>

    );
};

export default Pricing;