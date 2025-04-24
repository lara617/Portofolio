import React, { useEffect, useState } from 'react';

const Certificacao = ({ showAll }) => {
    const badgeIds = [
        "611b4469-886d-4ecd-b993-20a49a6faf2e",
        "8a29d0f3-ae8e-4e2e-8856-8e590741f488",
        "f3762f25-e073-4a58-b699-485856474e9f",
        "fd85efb8-ef6a-405e-addd-340d640388a7",
        "187a5dec-a111-4580-9b7b-ab98e1f4204c",
        "7629369d-8bcd-4950-b051-ed209897d71e",
        "e539da65-db28-4686-882c-3d3963166d77"
    ];

    const [showContainer, setShowContainer] = useState(Array(badgeIds.length).fill(false));
    const [containerText] = useState([
        "Texto do certificado 1",
        "Texto do certificado 2",
        "Texto do certificado 3",
        "Texto do certificado 4",
        "Texto do certificado 5",
        "Texto do certificado 6",
        "Texto do certificado 7"
    ]);

    useEffect(() => {
        const script = document.createElement("script");
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    const handleToggleContainer = (index) => {
        const newStates = [...showContainer];
        newStates[index] = !newStates[index];
        setShowContainer(newStates);
    };

    const handleCloseContainer = (index) => {
        const newStates = [...showContainer];
        newStates[index] = false;
        setShowContainer(newStates);
    };

    const badgesToShow = showAll ? badgeIds : badgeIds.slice(0, 3);

    return (
        <div>
            <h1>Certificação</h1>
            <p>Estas são as minhas Certificações</p>

            <div
                style={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'flex-start',
                    gap: '20px',
                    maxWidth: '1080px',
                    margin: '0 auto',
                }}
            >
                {badgesToShow.map((badgeId, index) => (
                    <div
                        key={index}
                        style={{
                            width: '20%',
                            minWidth: '280px',
                            padding: '20px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            backgroundColor: '#f9f9f9',
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                        }}
                    >
                        <div
                            data-iframe-width="100%"
                            data-iframe-height="337.5"
                            data-share-badge-id={badgeId}
                            data-share-badge-host="https://www.credly.com"
                            style={{ marginBottom: '10px', width: '100%' }}
                        ></div>

                        <button
                            onClick={() => handleToggleContainer(index)}
                            style={{
                                padding: '10px 20px',
                                backgroundColor: '#f6a7ff',
                                color: '#000',
                                border: 'none',
                                borderRadius: '5px',
                                cursor: 'pointer'
                            }}
                        >
                            Mostrar Container
                        </button>

                        {showContainer[index] && (
                            <div
                                style={{
                                    position: 'fixed',
                                    top: '58%',
                                    left: '50%',
                                    transform: 'translate(-50%, -50%)',
                                    backgroundColor: '#fff',
                                    padding: '20px',
                                    borderRadius: '10px',
                                    boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.3)',
                                    zIndex: 1000,
                                    maxWidth: '350px',
                                    width: '90%',
                                }}
                            >
                                <button
                                    onClick={() => handleCloseContainer(index)}
                                    style={{
                                        position: 'absolute',
                                        top: '10px',
                                        right: '10px',
                                        border: 'none',
                                        background: 'transparent',
                                        fontSize: '20px',
                                        cursor: 'pointer'
                                    }}
                                >
                                    ✖
                                </button>
                                <p>{containerText[index]}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Certificacao;
