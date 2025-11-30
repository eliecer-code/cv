import React from 'react'
import { basics } from '../../../cv.json'
import { CiLinkedin } from "react-icons/ci";
import { MdOutlineEmail } from "react-icons/md";
import { MdOutlineLocalPhone } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { TbWorld } from "react-icons/tb";
import Section from '../../components/Section';
import TooltipCustomized from '../../components/TooltipCustomized';

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
            <TooltipCustomized id="send-email" />
            <TooltipCustomized id="call-me" />
            <TooltipCustomized id="contact-social" />

            <div className="relative">
                {/* Header Content */}
                <div className="flex flex-col md:flex-row items-center md:items-start gap-8 md:gap-12">
                    {/* Profile Image with Gradient Border */}
                    <div className="relative flex-shrink-0 animate-scale-in">
                        <div className="absolute inset-0 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full blur-lg opacity-40"></div>
                        <div className="relative p-1.5 bg-gradient-to-r from-primary-500 to-purple-600 rounded-full">
                            <img
                                src={image}
                                alt={name}
                                className="w-40 h-40 md:w-48 md:h-48 rounded-full object-cover border-4 border-white shadow-xl"
                            />
                        </div>
                    </div>

                    {/* Profile Info */}
                    <div className="flex-1 text-center md:text-left space-y-6 animate-slide-in">
                        {/* Name with Gradient */}
                        <div>
                            <h1 className="text-5xl md:text-6xl font-bold mb-3 text-gradient">
                                {name}
                            </h1>
                            <p className="text-2xl md:text-3xl text-gray-600 font-medium">
                                {label}
                            </p>
                        </div>

                        {/* Location */}
                        <div className="flex items-center justify-center  md:justify-start gap-2 text-gray-600">
                            <TbWorld className="text-xl text-primary-500" />
                            <span className="text-lg">{region}, {city}</span>
                        </div>

                        {/* Contact Buttons */}
                        <div className="flex flex-wrap justify-center gap-2 md:justify-start">
                            {email && (
                                <a
                                    href={`mailto:${email} `}
                                    data-tooltip-id="send-email"
                                    data-tooltip-content={`Enviar correo a ${name} `}
                                    data-tooltip-place="bottom"
                                    target='_blank'
                                    rel='noopener noreferrer'
                                    className="group flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-500 text-gray-700 rounded-lg font-medium shadow-sm hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-md transition-all duration-300"
                                >
                                    <MdOutlineEmail className="text-xl" />
                                    <span className="hidden sm:inline">Email</span>
                                </a>
                            )}
                            {phone && (
                                <a
                                    href={`tel:${phone} `}
                                    data-tooltip-id="call-me"
                                    data-tooltip-content={`Llamar por teléfono a ${name} `}
                                    data-tooltip-place="bottom"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-500 text-gray-700 rounded-lg font-medium shadow-sm hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-md transition-all duration-300"
                                >
                                    <MdOutlineLocalPhone className="text-xl" />
                                    <span className="hidden sm:inline">Teléfono</span>
                                </a>
                            )}
                            {profiles.map(({ network, url }) => (
                                <a
                                    href={url}
                                    data-tooltip-id="contact-social"
                                    data-tooltip-content={`Visita mi perfil de ${network} `}
                                    data-tooltip-place="bottom"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    key={url}
                                    className="group flex items-center gap-2 px-5 py-2.5 bg-white border-2 border-gray-500 text-gray-700 rounded-lg font-medium shadow-sm hover:bg-primary-500 hover:text-white hover:border-primary-500 hover:shadow-md transition-all duration-300"
                                >
                                    {getIconByNetwork(network)}
                                    <span className="hidden sm:inline">{network}</span>
                                </a>
                            ))}
                        </div>

                        {/* Print-only Contact Info */}
                        <div className="hidden print:block mt-6 space-y-2 text-gray-700">
                            <h4 className="font-semibold text-lg mb-2">Contáctame</h4>
                            {phone && <p>{phone}</p>}
                            {email && <p>{email}</p>}
                            {profiles.map(({ url }) => (
                                <p key={url} className="text-sm">{url}</p>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </Section>
    )
}

export default Header