import React from 'react'
import Section from '../../components/Section'
import { projects } from '../../../cv.json'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";

function Projects() {
    return (
        <Section title="Proyectos">
            <GridContainer>
                {
                    projects.map(({ name, description, url, github, isActive, highlights }) => {
                        return (
                            <div className="card" key={name}>
                                <header>
                                    <h3>

                                        <a
                                            href={`${url}`}
                                            target='__blank'
                                            title='Ver demo'
                                        >{name}
                                        </a>
                                        {isActive === true ? <span className='point'>🟢</span> : ""}
                                    </h3>
                                    <p>{description}</p>
                                </header>
                                <footer className="demo">
                                    <p className='source'>{highlights}</p>
                                    <a
                                        href={`${github}`}
                                        target='__blank'
                                        title='Ver codigo fuente en Github'
                                    >{<FaGithub />}</a>
                                </footer>
                            </div>
                        )
                    })
                }

            </GridContainer>
        </Section>
    )
}

export default Projects

const GridContainer = styled.section`
    display: grid;
    gap: 1em;
    grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));

    .card{
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        gap: 1em;
        box-shadow: 1px 1px 5px gray;
        padding: 1em;

        header{
            display: flex;
            flex-direction: column;
            /* flex: 1; */
            gap: 1em;
            h3{
                display: flex;
                align-items: center;
                gap: .3em;
                .point{
                    font-size: .5em;
                }
            }

            
        }
        
        footer{
            display:flex;
            flex-direction: column;
            .source{
                background: #eeeeee;
                font-size: .9em;
                margin-bottom: 1em;
                padding: 2px;
                border-radius: 3px;
                /* display: inline; */

            }
            a{
                font-size: 1.5em;
            }
        }
    }
`
