import React, { useEffect } from 'react';

const Certificacao = () => {
    useEffect(() => {
        // Carrega o script assíncrono da Credly para garantir que os iframes funcionem
        const script = document.createElement("script");
        script.src = "//cdn.credly.com/assets/utilities/embed.js";
        script.async = true;
        document.body.appendChild(script);

        // Remove o script quando o componente for desmontado
        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return (
        <div>
            <h1>Certificação</h1>
            <p>Estas são as minhas Certificações</p>

            {/* Embed do primeiro iframe de Certificação */}
            <div
                style={{ marginBottom: "20px" }}
                data-iframe-width="200" 
                data-iframe-height="350"
                data-share-badge-id="f3762f25-e073-4a58-b699-485856474e9f" 
                data-share-badge-host="https://www.credly.com"
            ></div>

            {/* Embed do segundo iframe de Certificação */}
            <div
                style={{ marginBottom: "20px" }}
                data-iframe-width="200" 
                data-iframe-height="350"
                data-share-badge-id="611b4469-886d-4ecd-b993-20a49a6faf2e" 
                data-share-badge-host="https://www.credly.com"
            ></div>

            {/* Embed do terceiro iframe de Certificação */}
            <div
                style={{ marginBottom: "20px" }}
                data-iframe-width="200" 
                data-iframe-height="350"
                data-share-badge-id="8a29d0f3-ae8e-4e2e-8856-8e590741f488" 
                data-share-badge-host="https://www.credly.com"
            ></div>
        </div>
    );
};

export default Certificacao;
