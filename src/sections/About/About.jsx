import React from 'react'
import Section from '../../components/Section'
import { basics } from '../../../cv.json'

function About() {
    const { summary } = basics;
    return (
        <Section title="Sobre mi">
            <div className="bg-white rounded-xl border-l-4 border-accent-500 p-8 shadow-soft hover:shadow-md transition-shadow duration-300">
                <p className="text-lg text-gray-700 leading-relaxed">{summary}</p>
            </div>
        </Section>
    )
}

export default About

