import React, { useRef, useState } from 'react';
import Header from './components/Header';
import Certificacao from './components/Certificacao';
import Contacto from './components/Contacto';
import Portfolio from './components/Portfolio';

function App() {
    const portfolioRef = useRef(null);
    const certificacaoRef = useRef(null);
    const contactoRef = useRef(null);
    const [showAllCerts, setShowAllCerts] = useState(false);

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
                <Certificacao showAll={showAllCerts} />
                {!showAllCerts && (
                    <div style={{ textAlign: 'center', margin: '20px' }}>
                        <button onClick={() => setShowAllCerts(true)} style={{ background: '#f6a7ff', color: '#000', padding: '10px 20px', borderRadius: '5px', border: 'none' }}>
                            Ver mais certificações
                        </button>
                    </div>
                )}
            </section>

            <section ref={contactoRef}>
                <Contacto />
            </section>
        </div>
    );
}

export default App;
