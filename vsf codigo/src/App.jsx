import React, { useState, useEffect } from 'react';
import './App.css';

const filmes = [
  { id: 'a1b2c3d4-e5f6-7890-1234-567890abcdef', title: 'O Poderoso Chefão', description: 'Um clássico do cinema.' },
  { id: 'b2c3d4e5-f6a7-8901-2345-67890abcdef0', title: 'Um Sonho de Liberdade', description: 'A história da esperança.' },
  { id: 'c3d4e5f6-a7b8-9012-3456-7890abcdef01', title: 'A Origem', description: 'Um filme que mexe com a mente.' },
  { id: 'd4e5f6a7-b8c9-0123-4567-890abcdef012', title: 'Pulp Fiction', description: 'Um marco da década de 90.' },
  { id: 'e5f6a7b8-c9d0-1234-5678-90abcdef0123', title: 'Interestelar', description: 'Viagem no tempo e espaço.' },
  { id: 'f6a7b8c9-d0e1-2345-6789-0abcdef01234', title: 'Clube da Luta', description: 'Subversão e reflexão social.' },
  { id: 'a7b8c9d0-e1f2-3456-7890-abcdef012345', title: 'Matrix', description: 'Um mundo virtual surpreendente.' },
  { id: 'b8c9d0e1-f2a3-4567-8901-bcdef0123456', title: 'Forrest Gump', description: 'A vida é como uma caixa de chocolates.' },
  { id: 'c9d0e1f2-a3b4-5678-9012-cdef01234567', title: 'O Senhor dos Anéis: A Sociedade do Anel', description: 'O início de uma épica jornada.' },
  { id: 'd0e1f2a3-b4c5-6789-0123-def012345678', title: 'Star Wars: Uma Nova Esperança', description: 'A primeira aventura na galáxia muito, muito distante.' }
];

export default function App() {
  const [favoritos, setFavoritos] = useState([]);

  useEffect(() => {
    console.log("Filmes Favoritos atualizados com sucesso:", favoritos);
  }, [favoritos]);

  const toggleFavorito = (filmeId) => {
  setFavoritos((prevFavoritos) => {
    if (prevFavoritos.includes(filmeId)) {
      return prevFavoritos.filter((id) => id !== filmeId);
    } else {
      return [...prevFavoritos, filmeId];
    }
  });
};

  const mensagemTopo = () => {
    const total = favoritos.length;
    if (total === 0) return "Você ainda não favoritou nenhum filme.";
    if (total <= 2) return "Você tem alguns filmes favoritos!";
    if (total >= 3) return "Uau! Uma coleção impressionante de favoritos!";
    return null;
  };

  return (
    <div className="container">
      <h1 className="titulo">Lista de Filmes Favoritos!!</h1>

      <div className="secao">
        <h2 className="subtitulo">Seus Filmes Favoritos:</h2>
        <p className="mensagem">{mensagemTopo()}</p>
      </div>

      <div className="secao">
        <h2 className="subtitulo">Filmes Disponíveis:</h2>
        <ul className="lista">
          {filmes.map((filme) => (
            <li key={filme.id} className="filme">
              <div className="info">
                <strong>{filme.title}</strong>
                <p>{filme.description}</p>
              </div>
              <button
                onClick={() => toggleFavorito(filme.id)}
                className={`botao ${favoritos.includes(filme.id) ? 'desfavoritar' : 'favoritar'}`}
              >
                {favoritos.includes(filme.id) ? 'Desfavoritar' : 'Favoritar'}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
} 
