import { BrowserRouter, Route } from 'react-router-dom';
import './App.css'
import {Cabecalho, Conteudo, Rodape, ListaTarefas} from './Componentes';
import { Inicial } from './pages';
import { Router } from './Router';
import { AppContextProvider } from './Contexts';

function App() {

  return (
    <AppContextProvider>
       <BrowserRouter>
        <Router />
      </BrowserRouter>
    </AppContextProvider>
  )
}

export default App;
