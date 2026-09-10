import './App.css';
import { useState, useEffect, useCallback } from 'react';
import Axios from 'axios';
import CadastroAluno from './components/CadastroAluno';
import ListaAlunos from './components/ListaAlunos';

function App() {
  const [alunos, setAlunos] = useState([]);

  const fetchAlunos = useCallback(() => {
    Axios.get("http://localhost:3001/listar")
      .then((response) => {
        setAlunos(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, []);

  useEffect(() => {
    fetchAlunos();
  }, [fetchAlunos]);

  return (
    <div className="App">
      <CadastroAluno onCadastro={fetchAlunos}></CadastroAluno>

      <ListaAlunos alunos={alunos} setAlunos={setAlunos}></ListaAlunos>
    </div>
  );
}

export default App;