import React from 'react';
import './botao.css';

interface BotaoProps {
    texto: string;
}

const Botao: React.FC<BotaoProps> = ({ texto }) => {
    return <button className="botao">
        {texto}
    </button>;
};

export default Botao;
