import React, { useRef } from 'react';
import Header from './components/Header';
import Certificacao from './components/Certificacao';
import Contacto from './components/Contacto';
import Portfolio from './components/Portfolio';

function App() {
    const portfolioRef = useRef(null);
    const certificacaoRef = useRef(null);
    const contactoRef = useRef(null);

    const scrollTo = (ref) => {
        ref.current?.scrollIntoView({ behavior: 'smooth' });
    };

    return (
        <div>
            <Header 
                onNavigate={{
                    portfolio: () => scrollTo(portfolioRef),
                    certificacao: () => scrollTo(certificacaoRef),
                    contacto: () => scrollTo(contactoRef)
                }} 
            />

            <section id="portfolio" ref={portfolioRef}>
                <Portfolio />
            </section>

            <section ref={certificacaoRef}>
                <Certificacao />
            </section>

            <section ref={contactoRef}>
                <Contacto />
            </section>
        </div>
    );
}

export default App;
