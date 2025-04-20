import { Item } from "./Item";
import style from './listaTarefa.module.css';
import { useAppContext } from "../../hooks";
import { Loading } from "../Loading";

const ListaTarefas = () =>{

    const { tarefas, loadingCarregar } = useAppContext();

    return(
        <ul className={style.ListaTarefa}>
            {loadingCarregar && (
                <p>Carregando... <Loading /></p>
            )}
            {!loadingCarregar && !tarefas.length && (
                <p>Não há tarefas</p>
            )}
            {tarefas.map(itemList=> (
            <Item key={itemList.id}  
            id={itemList.id} 
            nome={itemList.nome} />))}
        </ul>
    );
};

export {ListaTarefas};