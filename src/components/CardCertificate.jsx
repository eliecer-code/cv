import React, { useState, useEffect } from 'react'

function CardCertificate({ image, year, hours, name }) {
    const [showModal, setShowModal] = useState(false);

    useEffect(() => {
        const handleKeyPress = (event) => {
            if (event.key === 'Escape') {
                setShowModal(false);
            }
        };

        window.addEventListener('keydown', handleKeyPress);

        return () => {
            window.removeEventListener('keydown', handleKeyPress);
        };
    }, []);

    const toggleModal = () => {
        setShowModal(!showModal);
    };

    useEffect(() => {
        if (showModal) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [showModal]);

    return (
        <>
            <div className="group bg-white rounded-xl p-5 shadow-card hover:shadow-hover card-hover flex gap-5">
                {/* Certificate Preview */}
                <div className="relative flex-shrink-0 cursor-pointer" onClick={toggleModal}>
                    <div className="relative overflow-hidden rounded-lg">
                        <img
                            src={image}
                            alt={name}
                            className="w-36 h-auto object-cover transition-all duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                            <span className="text-4xl">👁️‍🗨️</span>
                        </div>
                    </div>
                </div>

                {/* Certificate Info */}
                <div className="flex-1 flex flex-col justify-center space-y-2">
                    <h3 className="font-semibold text-gray-900 leading-tight">{name}</h3>
                    <div className="flex flex-wrap gap-2">
                        <span className="inline-flex items-center gap-1 text-xs bg-primary-100 text-primary-700 px-2 py-1 rounded-md font-medium">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                            </svg>
                            {hours} hrs
                        </span>
                        <span className="inline-flex items-center gap-1 text-xs bg-gray-100 text-gray-700 px-2 py-1 rounded-md font-medium">
                            <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                            </svg>
                            {year}
                        </span>
                    </div>
                </div>
            </div>

            {/* Modal */}
            {showModal && (
                <div
                    className="fixed inset-0 z-[999] bg-black/80 backdrop-blur-sm flex items-center justify-center p-4 animate-fade-in"
                    onClick={toggleModal}
                >
                    <div
                        className="relative w-full max-w-4xl animate-scale-in"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <img
                            src={image}
                            alt={name}
                            className="w-full h-auto rounded-xl shadow-2xl"
                        />
                        <button
                            onClick={toggleModal}
                            className="absolute top-4 right-4 w-10 h-10 flex items-center justify-center rounded-full bg-black/50 backdrop-blur-sm border border-white/20 text-white text-2xl hover:bg-black/70 transition-colors duration-300"
                        >
                            ×
                        </button>
                    </div>
                </div>
            )}
        </>
    )
}

export default CardCertificate
