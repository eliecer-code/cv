import React from 'react'
import styled from 'styled-components'
import { basics } from '../../../cv.json'
// import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { TbWorld } from "react-icons/tb";
import Section from '../Section';


function Header() {

    const { name, label, image, email, phone, url, summary, location, profiles } = basics
    const { address, postalCode, city, region } = location
    const { network, username } = profiles
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
                    <footer className="icons">
                        {
                            email && (
                                <a
                                    href={`mailto:${email}`}
                                    title={`Enviar correo a ${name} a la direccion ${email}`}
                                    target='__blank'
                                    rel='noopener noreferrer'
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
                                >
                                    <MdOutlineLocalPhone />
                                </a>
                            )
                        }

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
        
        span{
            display: flex;
            align-items: center;
            gap: .1em;
        }
        .icons{
            display: flex;
            gap: .4em;
            margin-top: 1em;
            
            a{
                padding: 6px;
                border: 1px solid #cfcfcf;
                border-radius: 3px;

                &:hover{
                    /* background: #d4d4d4; */
                    box-shadow: 2px 1px 5px #d4d4d4;
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
`