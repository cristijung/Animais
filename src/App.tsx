import React, { useState } from 'react';
import Banner from './Componentes/Banner';
import Formulario from './Componentes/Formulario';
import Rodape from './Componentes/Rodape';
import Time from './Componentes/Raca';
import { v4 as uuidv4 } from 'uuid';

interface Colaborador {
  id: number;
  favorito: boolean;
  nome: string;
  cargo: string;
  imagem: string;
  time: string;
}

interface Time {
  id: string;
  nome: string;
  cor: string;
}

function App() {
  const [times, setTimes] = useState<Time[]>([
    {
      id: uuidv4(),
      nome: 'Mamíferos',
      cor: '#57C278',
    },
    {
      id: uuidv4(),
      nome: 'Aves',
      cor: '#82CFFA'
    },
    {
      id: uuidv4(),
      nome: 'Peixes',
      cor: '#A6D157'
    },
    {
      id: uuidv4(),
      nome: 'Anfíbios',
      cor: '#E06B69'
    },
    {
      id: uuidv4(),
      nome: 'Répteis',
      cor: '#DB6EBF'
    },
    {
      id: uuidv4(),
      nome: 'Equinodermos',
      cor: '#FFBA05'
    },
    {
      id: uuidv4(),
      nome: 'Poríferos',
      cor: '#FF8A29'
    },
   
  ]);

  const inicial = [
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[0].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[1].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[1].nome
    },    
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cavalo Marinho',
      cargo: 'São peixes ósseos do gênero Hippocampus são cheios de peculiaridades: além da morfologia irreverente, recordando um cavalo, as espécies deste gênero apresentam cuidado parental realizado pelo macho, que carrega em sua bolsa incubadora os ovos fecundados.',
      imagem: 'https://www.infoescola.com/wp-content/uploads/2008/05/cavalo-marinho-109485932-480x600.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Kinguio Telescópio',
      cargo: 'O kinguio telescópio é conhecido como peixe-telescópio ou peixe dragão. Sua origem é chinesa, mas também foi uma espécie bastante desenvolvida no Japão por meio de várias técnicas de reprodução. Atualmente, o Japão conta com 30 variedades de kinguio.',
      imagem: 'https://pm1.narvii.com/6981/23b83440a31458e3bb1ff84115249a4f6c225bccr1-427-640v2_hq.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Polvo',
      cargo: 'Os polvos são moluscos da classe Cephalopoda. Esses animais destacam-se por sua forma peculiar e por apresentar incríveis meios de defesa. Estima-se que existam, no mínimo, 100 espécies diferentes de polvos.',
      imagem: 'https://img.freepik.com/fotos-premium/um-polvo-gigante-do-oceano-ilustracoes-3d_533101-92.jpg?w=2000',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Tubarão',
      cargo: 'Tubarão-branco é uma espécie de tubarão lamniforme. Trata-se do maior peixe predador existente nos oceanos. Os tubarões brancos são bem conhecidos por seu tamanho e fama de assassino.',
      imagem: 'https://i.pinimg.com/564x/dc/33/35/dc33359eca7e0fb321d52800bfcfa14f--shark-jaws-sharks.jpg',
      time: times[2].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[3].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[4].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Gato/Felino - Maine Coon',
      cargo: 'Maine Coon é uma raça de gato originária do nordeste dos Estados Unidos.',
      imagem: 'https://mega.ibxk.com.br/2016/08/23/23184723908456.jpg?ims=610x',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Cachorro/Canino - Dachshund',
      cargo: 'Dachshund ou teckel, também apelidado de cão-salsicha, é uma raça de cães oriunda da Alemanha.',
      imagem: 'https://www.petz.com.br/cachorro/racas/dachshund/img/dachshund-guia-racas.webp',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Lobo - Canino',
      cargo: 'É parente bem próximo do cão doméstico e acredita-se que este tenha se originado através da domesticação de lobos cinzentos. ',
      imagem: '	https://www.infoescola.com/wp-content/uploads/2008/05/lobo-360x450.jpg',
      time: times[5].nome
    },
    {
      id: uuidv4(),
      favorito: false,
      nome: 'Raposa - Canino',
      cargo: 'A raposa tem uma aparência que lembra os cachorros de estimação. Alguns tipos podem apresentar um perigo para o ser humano é necessário ficar um pouco distante para a sua própria proteção.',
      imagem: 'http://4.bp.blogspot.com/-JW33BOQRVpE/UwxXYVpmXFI/AAAAAAAAA9M/aF_a4vKcf3U/s1600/Feneco+II.jpg',
      time: times[5].nome
    },
  ]


  const [colaboradores, setColaboradores] = useState<Colaborador[]>([
    // ... initial collaborators
  ]);

  function deletarColaborador(id: number) {
    setColaboradores(colaboradores.filter((colaborador) => colaborador.id !== id));
  }

  function mudarCorDoTime(cor: string, id: string) {
    setTimes(
      times.map((time) => {
        if (time.id === id) {
          time.cor = cor;
        }
        return time;
      })
    );
  }

  function cadastrarTime(novoTime: Time) {
    setTimes([...times, { ...novoTime, id: uuidv4() }]);
  }

  function resolverFavorito(id: number) {
    setColaboradores(
      colaboradores.map((colaborador) => {
        if (colaborador.id === id) colaborador.favorito = !colaborador.favorito;
        return colaborador;
      })
    );
  }

  return (
    <div>
      <Banner />
      <Formulario
        cadastrarTime={cadastrarTime}
        times={times.map((time) => time.nome)}
        aoCadastrar={(colaborador) => setColaboradores([...colaboradores, colaborador])}
      />
      <section className="times">
        <h1>Espécie & Animais</h1>
        {times.map((time, indice) => (
          <Time
            aoFavoritar={resolverFavorito}
            mudarCor={mudarCorDoTime}
            key={indice}
            time={time}
            colaboradores={colaboradores.filter((colaborador) => colaborador.time === time.nome)}
            aoDeletar={deletarColaborador}
          />
        ))}
      </section>
      <Rodape />
    </div>
  );
}

export default App;
