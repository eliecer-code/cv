import React from 'react'
import Section from '../../components/Section'
import styled from 'styled-components'
import CardCertificate from '../../components/CardCertificate';
import { certificates } from '../../../cv.json'

function Certificates() {
    return (
        <Section title="Certificados">
            <GridContainer>
                {
                    certificates.map(({ name, image, year, hours }) => {
                        return (
                            <CardCertificate
                                key={name}
                                name={name}
                                image={image}
                                year={year}
                                hours={hours}
                            />
                        )
                    })
                }
            </GridContainer>
        </Section>
    )
}

export default Certificates

const GridContainer = styled.section`
    display: flex;
    flex-direction: column;
    gap: 1em;
`
