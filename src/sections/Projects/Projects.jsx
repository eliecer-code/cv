import React from 'react'
import Section from '../../components/Section'
import { projects } from '../../../cv.json'
import { FaGithub } from "react-icons/fa";
import TooltipCustomized from '../../components/TooltipCustomized';

function Projects() {
    return (
        <Section title="Proyectos">
            <TooltipCustomized id="look-code" />
            <TooltipCustomized id="look-demo" />
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                {projects.map(({ name, description, url, github, isActive, highlights }) => (
                    <div
                        key={name}
                        className="group bg-white rounded-xl border-t-4 border-primary-500 p-6 shadow-card hover:shadow-hover card-hover flex flex-col h-full"
                    >
                        <div className="flex-1 space-y-4">
                            <div className="flex items-start justify-between gap-2">
                                <h3 className="text-xl font-semibold text-gray-900 group-hover:text-primary-600 transition-colors">
                                    <a
                                        href={url}
                                        target='_blank'
                                        rel="noopener noreferrer"
                                        data-tooltip-id="look-demo"
                                        data-tooltip-content="Ver demo"
                                        data-tooltip-place="bottom"
                                    >
                                        {name}
                                    </a>
                                </h3>
                                {isActive && (
                                    <span className="flex items-center gap-1 text-xs bg-emerald-100 text-emerald-700 px-2 py-1 rounded-full font-medium">
                                        <span className="w-2 h-2 bg-emerald-500 rounded-full animate-pulse-slow"></span>
                                        Activo
                                    </span>
                                )}
                            </div>
                            <p className="text-gray-600 leading-relaxed">{description}</p>
                        </div>

                        <div className="mt-6 pt-4 border-t border-gray-100 flex items-center justify-between">
                            <span className="inline-flex items-center gap-2 px-3 py-1 text-sm bg-gradient-to-r from-blue-500 to-cyan-500 text-white rounded-lg font-medium">
                                {highlights}
                            </span>
                            <a
                                href={github}
                                target='_blank'
                                rel="noopener noreferrer"
                                data-tooltip-id="look-code"
                                data-tooltip-content="Ver código fuente en GitHub"
                                data-tooltip-place="right"
                                className="flex items-center justify-center w-10 h-10 rounded-full bg-gray-100 text-gray-700 hover:bg-gradient-to-r hover:from-primary-500 hover:to-purple-600 hover:text-white transition-all duration-300"
                            >
                                <FaGithub className="text-xl" />
                            </a>
                        </div>
                    </div>
                ))}
            </div>
        </Section>
    )
}

export default Projects
