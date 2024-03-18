import React from 'react';
import Section from '../../components/Section';
import { education } from '../../../cv.json';
import styled from 'styled-components';
import TooltipCustomized from '../../components/TooltipCustomized';

const Education = () => {
    return (
        <Section title="Educación">
            <TooltipCustomized id="visit-website" />
            {
                education.map(({ institution, url, startDate, endDate, area }) => {
                    const dateEducation = `${startDate} - ${endDate}`
                    return (
                        <Container key={institution}>
                            <div className="education-info">
                                <h3>
                                    <a
                                        href={url}
                                        target='__blank'
                                        data-tooltip-id='visit-website'
                                        data-tooltip-content="Visitar sitio web"
                                        data-tooltip-place='right'
                                    >
                                        {institution}
                                    </a>
                                </h3>
                                <span>{area}</span>
                            </div>
                            <div className="education-date">
                                <h4>{dateEducation}</h4>
                            </div>
                        </Container>
                    )
                })
            }
        </Section>
    );
};

export default Education;

const Container = styled.main`
    
    display: flex;
    justify-content: space-between;
    margin-top: 1.5em;


    .education-info{
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 1em;
        text-align: justify;
        h3{
            font-size: .8em;
            text-transform: uppercase;
        }

        li{
            list-style: disc;
            margin-left: 1.2em;
        }
    }

    .education-date{
        h4{
            font-size: .8em;
        }
    }

    @media (width <= 700px) {
        flex-direction: column-reverse;
        gap: 1em;
            .education-info{
                width: 100%;
            }
        }
`