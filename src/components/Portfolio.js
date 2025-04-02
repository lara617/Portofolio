import React from 'react';
import './Portfolio.css'; // Importa o CSS para estilização
import fotoCara from '../images/fotocara.jpg'; // Ajuste o caminho conforme necessário

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <img 
                src={fotoCara} 
                alt="Lara Pires" 
                style={{
                    width: '206px',
                    height: '206px',
                    borderRadius: '50%',
                    marginRight: '16px',
                    objectFit: 'cover' // Mantém a proporção da imagem
                }}
            />
            <div>
                <h1 className="portfolio-title">Portfolio</h1>
                <h3 className="portfolio-subtitle">Lara Pires, 17 anos</h3>
                <p className="portfolio-description">Desenvolvedora apaixonada por tecnologia e inovação.</p>
            </div>
        </div>
    );
};

export default Portfolio;