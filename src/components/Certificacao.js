import React, { useEffect, useState, useMemo } from 'react';

const Certificacao = () => {
    const badgeIds = useMemo(() => [
        "611b4469-886d-4ecd-b993-20a49a6faf2e",
        "8a29d0f3-ae8e-4e2e-8856-8e590741f488",
        "f3762f25-e073-4a58-b699-485856474e9f",
        "fd85efb8-ef6a-405e-addd-340d640388a7",
        "e539da65-db28-4686-882c-3d3963166d77",
        "187a5dec-a111-4580-9b7b-ab98e1f4204c",
        "7629369d-8bcd-4950-b051-ed209897d71e",
        "a9e1b57a-3724-4964-ba61-457a92d7b7e6"
    ], []);

    const containerText = [
        "Texto do certificado 1",
        "Texto do certificado 2",
        "Texto do certificado 3",
        "Texto do certificado 4",
        "Texto do certificado 5",
        "Texto do certificado 6",
        "Texto do certificado 7",
        "Texto do certificado 8"
    ];

    const [showTextIndex, setShowTextIndex] = useState(null);
    const [scriptLoaded, setScriptLoaded] = useState(false);

    useEffect(() => {
        if (!window.Credly) {
            const script = document.createElement('script');
            script.src = "//cdn.credly.com/assets/utilities/embed.js";
            script.async = true;
            script.onload = () => setScriptLoaded(true);
            document.body.appendChild(script);
        } else {
            setScriptLoaded(true);
        }
    }, []);

    useEffect(() => {
        if (scriptLoaded) {
            setTimeout(() => {
                window.Credly?.Widget?.process?.();
            }, 100);
        }
    }, [scriptLoaded]);

    return (
        <section style={{ padding: '20px', background: '#fff' }}> {/* Fundo branco para a seção */}
            {/* Contêiner principal com fundo cinza */}
            <div className="certificacao-container" style={{
                maxWidth: '1400px',
                margin: '20px auto',
                padding: '40px',
                backgroundColor: '#f2f2f2', // Fundo cinza no contêiner
                borderRadius: '10px',
                boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
            }}>
                {/* Título e descrição */}
                <h1 style={{ textAlign: 'center' }}>Certificação</h1>
                <h3 style={{ textAlign: 'center' }}>Estas são as minhas Certificações</h3>

                {/* Container de certificados com 3 por linha */}
                <div style={{
                    display: 'grid',
                    gridTemplateColumns: 'repeat(3, 1fr)', // 3 por linha
                    gap: '20px',
                    margin: '0 auto'
                }}>
                    {badgeIds.map((badgeId, index) => (
                        <div key={badgeId} style={{
                            padding: '20px',
                            border: '1px solid #ccc',
                            borderRadius: '10px',
                            backgroundColor: '#fff', // Fundo branco nos cartões de certificação
                            display: 'flex',
                            flexDirection: 'column',
                            alignItems: 'center',
                            position: 'relative'
                        }}>
                            {/* Badge do Credly */}
                            <div
                                data-iframe-width="100%"
                                data-iframe-height="337.5"
                                data-share-badge-id={badgeId}
                                data-share-badge-host="https://www.credly.com"
                                style={{ width: '100%' }}
                            ></div>

                            {/* Botão para ver mais */}
                            <button
                                onClick={() => setShowTextIndex(index)}
                                style={{
                                    marginTop: '10px',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    backgroundColor: '#d466d1',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                Ver mais
                            </button>
                        </div>
                    ))}
                </div>

                {/* Overlay com texto do certificado */}
                {showTextIndex !== null && (
                    <div style={{
                        position: 'fixed',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        backgroundColor: 'rgba(0,0,0,0.7)',
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                        zIndex: 9999,
                        animation: 'fadeIn 0.5s ease' // Animação de fade in
                    }}>
                        <div style={{
                            backgroundColor: '#fff',
                            padding: '30px',
                            borderRadius: '10px',
                            textAlign: 'center',
                            maxWidth: '500px',
                            width: '90%'
                        }}>
                            <p>{containerText[showTextIndex]}</p>
                            <button
                                onClick={() => setShowTextIndex(null)}
                                style={{
                                    marginTop: '20px',
                                    padding: '10px 20px',
                                    borderRadius: '5px',
                                    border: 'none',
                                    backgroundColor: '#d466d1',
                                    color: '#fff',
                                    cursor: 'pointer'
                                }}
                            >
                                Fechar
                            </button>
                        </div>
                    </div>
                )}

                {/* CSS da animação */}
                <style>
                    {`
                    @keyframes fadeIn {
                        from { opacity: 0; }
                        to { opacity: 1; }
                    }
                    `}
                </style>
            </div>
        </section>
    );
};

export default Certificacao;
