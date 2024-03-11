import React from 'react'
import Section from '../Section'
import { experience } from '../../../cv.json'
import styled from 'styled-components';
function Experience() {
    return (
        <Section title="Experiencia laboral">
            <ul>
                {experience.map(({ company, startDate, endDate, area, functions }) => {
                    const years = `${startDate} - ${endDate}`;
                    return (
                        <li key={company}>
                            <Article>
                                <header>
                                    <div>
                                        <h3>{company}</h3>
                                    </div>
                                    <span>{years}</span>
                                </header>
                                <footer>
                                    <span>{area}</span>
                                    <ul>
                                        {
                                            functions.map((func, index) => (
                                                <li key={index}>{func}</li>
                                            ))
                                        }
                                    </ul>
                                </footer>
                            </Article>
                        </li>
                    );
                })}
            </ul>
        </Section>
    )
}

export default Experience
const Article = styled.article`
    header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        
        div{
            width: 70vh;

        }

        @media (max-width: 700px) {
            span{
                font-size: 1em;
            }
        }
    }

    footer{
        ul{
            width: 70vh;
            li{
                list-style: disc;
                margin-left: 2em;
                text-align: justify;
                padding-top: 1em;
            }
        }

        @media (max-width: 700px) {
            span{
                font-size: 1em;
            }
        }
    }
`
