import React from 'react'
import Section from '../Section'
import { skills } from '../../../cv.json'
import styled from 'styled-components'

function Habilities() {
    return (
        <Section title="Skills">
            <Ul>
                {
                    skills.map(({ name }) => {
                        return (
                            <li key={name}>{name}</li>
                        )
                    })
                }
            </Ul>
        </Section>
    )
}

export default Habilities

const Ul = styled.ul`
    display: flex;
    gap: 1rem;
    flex-wrap: wrap;

    li{
        padding: 4px 8px;
        /* border: 1px solid; */
        box-shadow: 1px 1px 5px gray;
    }
`
