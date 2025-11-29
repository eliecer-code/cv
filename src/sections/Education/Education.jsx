import React from 'react'
import Section from '../../components/Section'
import { education } from '../../../cv.json'
import TooltipCustomized from '../../components/TooltipCustomized'

function Education() {
    return (
        <Section title="Educación">
            <TooltipCustomized id="visit-website" />
            <div className="space-y-8">
                {education.map(({ institution, area, studyType, startDate, endDate, url }) => {
                    const dateEducation = `${startDate} - ${endDate} `;

                    return (
                        <div
                            key={institution}
                            className="relative pl-8 pb-8 border-l-2 border-accent-200 last:pb-0 group hover:border-accent-500 transition-colors duration-300"
                        >
                            {/* Timeline Dot */}
                            <div className="absolute -left-[9px] top-0 w-4 h-4 rounded-full bg-accent-500 border-4 border-white shadow-md group-hover:scale-125 transition-transform duration-300"></div>

                            {/* Content Card */}
                            <div className="bg-white rounded-xl p-6 shadow-card hover:shadow-hover card-hover">
                                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-4">
                                    <div>
                                        <h3 className="text-xl font-semibold text-gray-900 mb-1">
                                            {studyType}
                                        </h3>
                                        <a
                                            href={url}
                                            target='_blank'
                                            rel="noopener noreferrer"
                                            data-tooltip-id='visit-website'
                                            data-tooltip-content="Visitar sitio web"
                                            data-tooltip-place='bottom'
                                            className="text-accent-600 font-medium hover:text-accent-700 transition-colors inline-flex items-center gap-1"
                                        >
                                            {institution}
                                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                                            </svg>
                                        </a>
                                    </div>
                                    <span className="text-sm text-gray-500 bg-gray-100 px-3 py-1 rounded-lg font-medium self-start">
                                        {dateEducation}
                                    </span>
                                </div>

                                <p className="text-gray-700 leading-relaxed">{area}</p>
                            </div>
                        </div>
                    );
                })}
            </div>
        </Section>
    )
}

export default Education