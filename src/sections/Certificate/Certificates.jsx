import React from 'react'
import Section from '../../components/Section'
import { certificates } from '../../../cv.json'
import CardCertificate from '../../components/CardCertificate'

function Certificates() {
    return (
        <Section title="Certificados">
            <div className="grid gap-6 grid-cols-1 md:grid-cols-2">
                {certificates.map(({ image, year, hours, name }) => (
                    <CardCertificate
                        key={name}
                        image={image}
                        year={year}
                        hours={hours}
                        name={name}
                    />
                ))}
            </div>
        </Section>
    )
}

export default Certificates
