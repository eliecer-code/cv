import { experience } from '../../../cv.json'

import React from 'react'
import Section from '../Section'
import styled from 'styled-components'

function Experience() {
    return (
        <>
            <Section title="Experiencia laboral">
                {
                    experience.map(({ company, startDate, endDate, area, functions }) => {
                        const dateExperience = `${startDate} - ${endDate}`
                        return (
                            <Container key={company}>
                                <div className="work-experience-info">
                                    <h3><a href="">{company}</a></h3>
                                    <span>{area}</span>
                                    {
                                        functions.map((func, index) => (
                                            <li key={index}>{func}</li>
                                        ))
                                    }
                                </div>
                                <div className="work-experience-date">
                                    <span>{dateExperience}</span>
                                </div>
                            </Container>
                        )
                    })
                }
            </Section>
        </>
    )
}

export default Experience

const Container = styled.main`
    
    display: flex;
    justify-content: space-between;
    margin-top: 1.5em;


    .work-experience-info{
        width: 70%;
        display: flex;
        flex-direction: column;
        gap: 1em;
        text-align: justify;
        h3{
            font-size: .8em;
        }

        li{
            list-style: disc;
            margin-left: 1.2em;
        }
    }

    .work-experience-date{
    }

    @media (width <= 700px) {
            span{
                font-size: 1em;
            }
        }
`
