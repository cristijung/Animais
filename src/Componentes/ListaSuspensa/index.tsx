import React from 'react';
import './lista-suspensa.css';

interface ListaSuspensaProps {
    label: string;
    items: string[];
    valor: string;
    aoAlterado: (valor: string) => void;
    obrigatorio?: boolean;
}

const ListaSuspensa: React.FC<ListaSuspensaProps> = ({
    label,
    items,
    valor,
    aoAlterado,
    obrigatorio = false,
}) => {
    return (
        <div className="lista-suspensa">
            <label>{label}</label>
            <select
                required={obrigatorio}
                value={valor}
                onChange={(evento) => aoAlterado(evento.target.value)}
            >
                <option />
                {items.map((item) => (
                    <option key={item}>{item}</option>
                ))}
            </select>
        </div>
    );
};

export default ListaSuspensa;
