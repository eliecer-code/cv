import React from 'react'
import Section from '../../components/Section'
import { skills } from '../../../cv.json'

const gradients = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-green-500 to-emerald-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-blue-500',
    'from-pink-500 to-rose-500',
]

function Habilities() {
    return (
        <Section title="Skills">
            <div className="flex flex-wrap gap-3">
                {skills.map(({ name }, index) => (
                    <span
                        key={name}
                        className={`inline-block px-4 py-2 bg-gradient-to-r ${gradients[index % gradients.length]} text-white rounded-lg font-medium shadow-md hover:shadow-lg hover:scale-105 transition-all duration-300 cursor-default`}
                    >
                        {name}
                    </span>
                ))}
            </div>
        </Section>
    )
}

export default Habilities
