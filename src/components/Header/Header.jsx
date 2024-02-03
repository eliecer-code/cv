import React from 'react'
import styled from 'styled-components'
import { basics } from '../../../cv.json'
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Section from '../Section';


function Header() {
    function getIconByNetwork(network) {
        switch (network) {
            case 'LinkedIn':
                return <CiLinkedin key={network} />;
            case 'GitHub':
                return <FaGithub key={network} />;
            default:
                return null;
        }
    }

    const { name, label, image, email, phone, location, profiles } = basics
    const { city, region } = location
    return (
        <Section>

            <Container>

                <div className="profile-date">
                    <h1>{name}</h1>
                    <p>{label}</p>

                    <span>
                        <TbWorld />
                        {region}, {city}
                    </span>
                    <footer >
                        <div className="print">
                            <h4>Contáctame</h4>
                            {<span>{phone}</span>}
                            {<span>{email}</span>}
                            {profiles.map(({ url }) => {
                                return (
                                    <span key={url}>{url}</span>
                                )
                            })}

                        </div>
                        <div className="no-print">
                            {
                                email && (
                                    <a
                                        href={`mailto:${email}`}
                                        title={`Enviar correo a ${name} a la direccion ${email}`}
                                        target='__blank'
                                        rel='noopener noreferrer'
                                        key={email}
                                    >{<MdOutlineEmail />}</a>
                                )
                            }
                            {
                                phone && (
                                    <a
                                        href={`tel:${phone}`}
                                        title={`Llamar por teléfono a ${name} al número ${phone}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        key={phone}
                                    >
                                        <MdOutlineLocalPhone />
                                    </a>
                                )
                            }
                            {
                                profiles.map(({ network, url }) => {
                                    return (

                                        <a
                                            href={`${url}`}
                                            title={`Vista mi perfil de ${network}`}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            key={url}
                                        >
                                            {getIconByNetwork(network)}
                                        </a>
                                    )
                                })
                            }
                        </div>

                    </footer>
                </div>
                <figure>
                    <img src={image} alt="" />
                </figure>
            </Container>
        </Section>
    )
}

export default Header

const Container = styled.div`
    display: flex;
    justify-content: space-between;
    color: #d4d4d4;
    
    .profile-date{
        display: flex;
        flex-direction: column;
        /* gap: 1em; */
        p{
            font-size: 1.4em;
        }
        
        span{
            display: flex;
            align-items: center;
            gap: .1em;
        }
        footer{
            .print{
                display: none;
            }
            .no-print{
                display: flex;
                gap: .4em;
                margin-top: 1em;
                
                a{
                    padding: 4px;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    border: 1px solid #cfcfcf;
                    border-radius: 3px;
                    font-size: 1.2em;
    
                    &:hover{
                        /* background: #d4d4d4; */
                        box-shadow: 2px 1px 5px #d4d4d4;
                    }
                }
            }

            @media print{
                .print{
                    display: block;
                }
                    .no-print{
                        display: none;
                    }
    
                
            }
        }
    }

    figure{
        img{
            width: 120px;
            border-radius: 1em;
        }
    }

    @media (width <= 700px) {
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
    }
`