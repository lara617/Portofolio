import React from 'react';
import { FaGithub, FaInstagram, FaLinkedin, FaEnvelope } from 'react-icons/fa'; // Importando o ícone do email

const Contacto = () => {
    return (
        <section style={{ background: '#fff', padding: '20px' }}> {/* Fundo branco para a seção */}
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
                <div style={styles.emailContainer}>
                    <FaEnvelope size={40} />
                    <p style={styles.emailText}>laramp617@gmail.com</p>
                </div>
            </div>
        </section>
    );
};

const styles = {
    container: {
        padding: '30px 20px', // Reduzido para diminuir a altura do contêiner
        textAlign: 'center',
        backgroundColor: '#f2f2f2', // Fundo cinza no contêiner
        borderTop: '2px solid #ccc',
        marginTop: '60px',
        borderRadius: '10px',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        width: '100%', // Ajusta para 100% da largura disponível
        maxWidth: '1445px', // A largura máxima ajustada para 1100px
        margin: '0 auto', // Centraliza o contêiner
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
    },
    emailContainer: {
        display: 'flex', // Coloca o ícone e o texto na mesma linha
        alignItems: 'center', // Alinha verticalmente o ícone e o texto
        justifyContent: 'center', // Centraliza o conteúdo na linha
        marginTop: '20px', // Espaço entre os ícones sociais e o ícone de e-mail
    },
    emailText: {
        marginLeft: '10px', // Espaço entre o ícone e o texto
        fontSize: '18px', // Tamanho do texto
        color: '#333', // Cor do texto
    }
};

export default Contacto;
