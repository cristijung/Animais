import React, { useState } from 'react';
import Botao from '../Botao';
import Campo from '../Campo';
import ListaSuspensa from '../ListaSuspensa';
import './formulario.css';

interface Time {
    nome: string;
    cor: string;
}

interface FormularioProps {
    aoCadastrar: (data: {
        nome: string;
        cargo: string;
        imagem: string;
        time: string;
    }) => void;
    times: Time[];
    cadastrarTime: (time: Time) => void;
}

const Formulario: React.FC<FormularioProps> = ({
    aoCadastrar,
    times,
    cadastrarTime,
}) => {
    const [nome, setNome] = useState('');
    const [cargo, setCargo] = useState('');
    const [imagem, setImagem] = useState('');
    const [time, setTime] = useState('');
    const [nomeTime, setNomeTime] = useState('');
    const [corTime, setCorTime] = useState('');

    const aoSubmeter = (evento: React.FormEvent) => {
        evento.preventDefault();
        console.log('form enviado', nome, cargo, imagem, time);
        aoCadastrar({
            nome,
            cargo,
            imagem,
            time,
        });
    };

    return (
        <section className="formulario-container">
            <form className="formulario" onSubmit={aoSubmeter}>
                <h2>Preencha os dados para criar o card de animais.</h2>
                <Campo
                    obrigatorio
                    label="Animal"
                    placeholder="Digite o tipo de animal "
                    valor={nome}
                    aoAlterado={(valor) => setNome(valor)}
                />
                <Campo
                    obrigatorio={true}
                    label="Raça"
                    placeholder="Digite a raça "
                    valor={cargo}
                    aoAlterado={(valor) => setCargo(valor)}
                />
                <Campo
                    label="Imagem"
                    placeholder="Informe o endereço da imagem "
                    aoAlterado={(valor) => setImagem(valor)}
                />
                <ListaSuspensa
                    obrigatorio
                    label="Espécie"
                    items={times}
                    valor={time}
                    aoAlterado={(valor) => setTime(valor)}
                />
                <Botao texto="Criar card de animal" />
            </form>

            <form
                className="formulario"
                onSubmit={(e) => {
                    e.preventDefault();
                    cadastrarTime({ nome: nomeTime, cor: corTime });
                }}
            >
                <h2>Preencha os dados para criar um novo time.</h2>
                <Campo
                    obrigatorio
                    label="Espécie"
                    placeholder="Digite o nome da espécie"
                    valor={nomeTime}
                    aoAlterado={(valor) => setNomeTime(valor)}
                />
                <Campo
                    obrigatorio
                    label="Cor"
                    type="color"
                    placeholder="Digite sua cor"
                    valor={corTime}
                    aoAlterado={(valor) => setCorTime(valor)}
                />
                <Botao texto="Criar seção de espécie" />
            </form>
        </section>
    );
};

export default Formulario;
