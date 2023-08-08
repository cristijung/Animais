import { AiFillCloseCircle, AiFillHeart, AiOutlineHeart } from 'react-icons/ai';
import './colaborador.css';

interface ColaboradorProps {
    colaborador: {
        id: number;
        imagem: string;
        nome: string;
        cargo: string;
        favorito: boolean;
    };
    corDeFundo: string;
    aoDeletar: (id: number) => void;
    aoFavoritar: (id: number) => void;
}

const Colaborador: React.FC<ColaboradorProps> = ({
    colaborador,
    corDeFundo,
    aoDeletar,
    aoFavoritar,
}) => {
    function favoritar() {
        aoFavoritar(colaborador.id);
    }

    const propsfavorito = {
        size: 25,
        onClick: favoritar,
    };

    return (
        <div className="colaborador">
            <AiFillCloseCircle
                size={25}
                className="deletar"
                onClick={() => aoDeletar(colaborador.id)}
            />
            <div className="cabecalho" style={{ backgroundColor: corDeFundo }}>
                <img src={colaborador.imagem} alt={colaborador.nome} />
            </div>
            <div className="rodape">
                <h4>{colaborador.nome}</h4>
                <h5>{colaborador.cargo}</h5>
                <div className='favoritar'>
                    {colaborador.favorito
                        ? <AiFillHeart {...propsfavorito} color='#f00' />
                        : <AiOutlineHeart {...propsfavorito} />
                    }
                </div>
            </div>
        </div>
    );
};

export default Colaborador;

// Toda vez que importamos algo sem {} é porque este componente vem de um export default.
// Quando importamos com {} a informação vem sempre de uma lib, por exemplo, desta forma
// é como se estivéssemos 'limitando' o que estamos importando.
// Bom lembrar que um componente (módulo) só pode ter UM export default, mas pode ter
// vários exports para aplicar.
