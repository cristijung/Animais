import React from 'react';
import './campo.css';

interface CampoProps {
    type?: string;
    label: string;
    placeholder?: string;
    valor: string;
    aoAlterado: (valor: string) => void;
    obrigatorio?: boolean;
}

const Campo: React.FC<CampoProps> = ({
    type = 'text',
    label,
    placeholder,
    valor,
    aoAlterado,
    obrigatorio = false,
}) => {
    return (
        <div className={`campo campo-${type}`}>
            <label>{label}</label>
            <input
                type={type}
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
                required={obrigatorio}
                placeholder={placeholder}
            />
        </div>
    );
};

export default Campo;
