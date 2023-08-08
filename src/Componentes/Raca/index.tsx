import React from 'react';
import Colaborador from '../Animal';
import './time.css';
import hexToRgba from 'hex-to-rgba'; //PRECISA SE INSTALAÇÃO  npm install --save hex-to-rgba

interface TimeProps {
    time: {
        id: number;
        nome: string;
        cor: string;
    };
    colaboradores: Array<{
        id: number;
        nome: string;
        cargo: string;
        imagem: string;
        favorito: boolean;
    }>;
    aoDeletar: (id: number) => void;
    mudarCor: (cor: string, id: number) => void;
    aoFavoritar: (id: number) => void;
}

const Time: React.FC<TimeProps> = ({
    time,
    colaboradores,
    aoDeletar,
    mudarCor,
    aoFavoritar,
}) => {
    return (
        colaboradores.length > 0 && (
            <section
                className='time'
                style={{
                    backgroundImage: 'url(/imagens/fundo.png)',
                    backgroundColor: hexToRgba(time.cor, '0.6'),
                }}
            >
                <input
                    onChange={(e) => mudarCor(e.target.value, time.id)}
                    value={time.cor}
                    type='color'
                    className='input-cor'
                />
                <h3 style={{ borderColor: time.cor }}>{time.nome}</h3>
                <div className='colaboradores'>
                    {colaboradores.map((colaborador, indice) => {
                        return (
                            <Colaborador
                                key={indice}
                                colaborador={colaborador}
                                corDeFundo={time.cor}
                                aoDeletar={aoDeletar}
                                aoFavoritar={aoFavoritar}
                            />
                        );
                    })}
                </div>
            </section>
        )
    );
};

export default Time;
