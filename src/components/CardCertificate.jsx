import React, { useState, useEffect } from 'react'
import styled from 'styled-components'

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
        <Card>
            <div className="container-image" onClick={toggleModal}>
                <img src={image} alt="" />
                <span className="icon">👁️‍🗨️</span>
            </div>
            <div className="container-info">
                <h3>{name}</h3>
                <p>Duración: {hours} hrs</p>
                <p>Año: {year}</p>
            </div>
            {showModal && (
                <Modal>
                    <ModalContent>
                        <CloseBtn onClick={toggleModal}>×</CloseBtn>
                        <img src={image} alt="" />
                    </ModalContent>
                </Modal>
            )}
        </Card>
    )
}

export default CardCertificate

const Card = styled.section`
    position: relative;
    display: flex;
    gap: 1em;
    .container-image {
        position: relative;
        img {
            width: 150px;
            transition: filter 0.3s ease;
            cursor: pointer;
        }
        .icon {
            transition: all .3s ease;
            display: none;
            position: absolute;
            left: 50%;
            bottom: 50%;
            transform: translate(-50%, 50%);
            z-index: 1;
        }
        &:hover {
            img {
                filter: blur(1px);
            }
            .icon {
                display: block;
            }
        }
    }
    .container-info {
        display: flex;
        flex-direction: column;
        gap: .3em;
    }
    @media (max-width: 700px) {
        span,h3, p{
            font-size: .9em;
        }
    }
`

const Modal = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100vw;
    height: 100vh;
    background-color: rgba(0, 0, 0, 0.7);
    z-index: 999;
`;

const ModalContent = styled.div`
    position: relative;
    padding: 20px;
    /* background-color: red; */
    border-radius: 5px;
    width: 100%;
    height: 100%;
    /* overflow: auto; */
    display: flex;
    justify-content: center;
    align-items: center;

    img{
        width: 60%;
        @media (width <= 700px) {
            width:100%
      }
    }

`;

const CloseBtn = styled.span`
    position: absolute;
    top: 10px;
    right: 10px;
    border: 1px solid #fff;
    border-radius: 100%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    color: #fff;
    font-size: 24px;
    &:hover {
        background-color: #ffffff42;
    }

    @media (width <= 700px) {

      }
`;
