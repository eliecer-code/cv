import React from 'react'
import Section from '../Section'
import { basics } from '../../../cv.json'
function About() {
    const { summary } = basics;
    return (
        <Section title="Sobre mi">
            <p>{summary}</p>
        </Section>
    )
}

export default About
