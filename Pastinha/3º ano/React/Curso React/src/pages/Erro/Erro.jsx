import { FormCriarTarefa, ListaTarefas } from "../../Componentes";
import style from './erro.module.css';

const Erro = () => {
    return(
        <div className={style.Erro}>
         <h1>404</h1>
         <h2>Página não encontrada</h2>
        </div>
    );
};

export {Erro};