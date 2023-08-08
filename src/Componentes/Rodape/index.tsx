import React from 'react';
import './rodape.css';

const Rodape: React.FC = () => {
    return (
        <footer className="footer">
            <section>
                <ul>
                    <li>
                        <a href="facebook.com" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/facebook.png" alt="Facebook" />
                        </a>
                    </li>
                    <li>
                        <a href="twitter.com" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/twitter.png" alt="Twitter" />
                        </a>
                    </li>
                    <li>
                        <a href="instagram.com" target="_blank" rel="noopener noreferrer">
                            <img src="/imagens/instagram.png" alt="Instagram" />
                        </a>
                    </li>
                </ul>
            </section>
            <section>
                <span>Espécie &amp; Animais</span>
            </section>
            <section>
                <p>
                    Desenvolvido por @CristinaJung
                </p>
            </section>
        </footer>
    );
};

export default Rodape;
