import React from 'react';
import './Portfolio.css'; // Importa o CSS para estilização
import fotoCara from '../images/fotocara.jpg'; // Ajuste o caminho conforme necessário

const Portfolio = () => {
    return (
        <div className="portfolio-container">
            <div className="image-container">
                <img 
                    src={fotoCara} 
                    alt="Lara Pires" 
                    className="portfolio-image"
                />
            </div>
            <div className="portfolio-info">
                <h1 className="portfolio-title">Portfólio</h1>
                <h3 className="portfolio-subtitle">Lara Pires, 17 anos</h3>
                <p className="portfolio-description">
                    Estudante na área de TI com motivação para aprender e crescer profissionalmente.
                    Perfil versátil e colaborativo, com ambição de apoiar a equipa e alcançar objetivos
                    comuns. 
                    
                    <h4>Habilidades Técnicas:</h4>
                    <ul>
              <li>Linguagens: Python (Java, C/C++ ainda em desenvolvimento)</li>
             <li>Frameworks: Flask</li>
            <li>Ferramentas: Git, GitHub, Node.js</li>
            <li>Outros: Firebase, React</li>
                    </ul>

                    Ensino profissional com foco em TI (2º ano).
                </p>
            </div>
        </div>
    );
};

export default Portfolio;
