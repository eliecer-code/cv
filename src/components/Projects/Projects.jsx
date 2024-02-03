import React from 'react'
import Section from '../Section'
import { projects } from '../../../cv.json'
import styled from 'styled-components'
import { FaGithub } from "react-icons/fa";

function Projects() {
    return (
        <Section title="Proyectos">
            <GridContainer>
                {
                    projects.map(({ name, description, url }) => {
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
                                    </h3>
                                    <p>{description}</p>
                                </header>
                                <footer className="demo">
                                    <a
                                        href="http://"
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
    gap: 2em;
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
            flex: 1;
            gap: 1em;
        }

        footer{
            a{
                font-size: 1.5em;
            }
        }
    }
`
