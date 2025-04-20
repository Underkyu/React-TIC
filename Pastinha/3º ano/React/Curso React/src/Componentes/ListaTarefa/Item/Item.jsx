import { useState } from "react";
import { useAppContext } from "../../../hooks";
import { Botao, TIPO_BOTAO } from "../../Botao";
import style from './item.module.css'
import { CampoTexto } from "../../CampoTexto";
import { Loading } from "../../Loading";

const Item = (props) =>{

    const {id, nome} = props;

    const {editarTarefa, removerTarefa, loadingEditar, loadingDeletar} = useAppContext();

    const [estaEditando, setEstaEditando] = useState(false);

    const onBlurTarefa = (event) => {
        const nomeTarefa = event.currentTarget.value;

        editarTarefa(id,nomeTarefa)
        setEstaEditando(false)
    }

    const loadingEstaEditando = loadingEditar == id;
    const loadingEstaDeletando = loadingDeletar ==id;

    return(
            <li className={style.Item}>
                {!loadingEstaEditando && estaEditando &&(
                    <CampoTexto onBlur= {onBlurTarefa}
                                defaultValue={nome}
                                autoFocus
                    />
                )}
                {!loadingEstaEditando && !estaEditando &&(
                    <span onDoubleClick={() => setEstaEditando(true)}>{nome}</span>
                )}

                {loadingEstaEditando && (
                    <Loading />
                )}

                <Botao 
                texto = {loadingEstaDeletando ? <Loading /> : '-'}
                tipo = {TIPO_BOTAO.SECUNDARIO} 
                onClick = {() => removerTarefa(id)}
                />
            </li>
    );
};

export {Item};