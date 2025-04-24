import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contacto = () => {
    return (
        <div id="contacto" style={styles.container}>
            <h1>Contacto</h1>
            <p>Podes encontrar-me nas redes sociais abaixo:</p>
            <div style={styles.iconContainer}>
                <a href="https://github.com/lara617" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaGithub size={40} />
                </a>
                <a href="https://www.instagram.com/lara._.617/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaInstagram size={40} />
                </a>
                <a href="https://www.linkedin.com/in/lara-pires-096062336/" target="_blank" rel="noopener noreferrer" style={styles.icon}>
                    <FaLinkedin size={40} />
                </a>
            </div>
        </div>
    );
};

const styles = {
    container: {
        padding: '60px 20px',
        textAlign: 'center',
        backgroundColor: '#f2f2f2',
        borderTop: '2px solid #ccc',
        marginTop: '60px'
    },
    iconContainer: {
        display: 'flex',
        justifyContent: 'center',
        gap: '40px',
        marginTop: '20px'
    },
    icon: {
        color: '#333',
        transition: 'transform 0.3s',
    }
};

export default Contacto; // Apenas uma exportação padrão
