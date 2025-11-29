import React from 'react'
import Section from '../../components/Section'
import { experience } from '../../../cv.json'

function Experience() {
    return (
        <Section title="Experiencia">
            <div className="space-y-8">
                {experience.map(({ company, area, startDate, endDate, functions }) => {
                    const dateExperience = `${startDate} - ${endDate}`;

                    return (
                        <div
                            key={company}
                            className="relative pl-8 pb-8 border-l-2 border-primary-200 last:pb-0 group hover:border-primary-500 transition-colors duration-300"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-primary-500 border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>

                            {/* Content Card */}
                            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-hover card-hover">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">{area}</h3>
                                        <p className="text-primary-600 font-medium">{company}</p>
                                    </div>
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-lg font-medium self-start">
                                        {dateExperience}
                                    </span>
                                </div>

                                <ul className="space-y-2">
                                    {functions.map((func, index) => (
                                        <li key={index} className="flex items-start gap-2 text-gray-700">
                                            <span className="text-primary-500 mt-1.5">•</span>
                                            <span className="flex-1 leading-relaxed">{func}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    )
}

export default Experience
