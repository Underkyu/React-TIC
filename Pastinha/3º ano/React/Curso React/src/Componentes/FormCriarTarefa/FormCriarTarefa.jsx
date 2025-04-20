import { useState } from "react";
import { Botao, CampoTexto, Loading} from "../../Componentes";
import style from './formCriarTarefa.module.css'
import {useAppContext} from '../../hooks'

const FormCriarTarefa = () => {
    const {adicionarTarefa, loadingCriar} = useAppContext();

    const [nomeTarefa, setNomeTarefa] = useState('Chigiri');

    const submit = (event) =>{
        event.preventDefault();

        if(!nomeTarefa){
            return;
        }
        
        adicionarTarefa(nomeTarefa)

        setNomeTarefa('');
    }

    
    const onChangeNomeTarefa = (event) =>{
        setNomeTarefa(event.currentTarget.value)
    }

    return(
        <form action="" className={style.FormCriarTarefa} onSubmit={submit/* função submit */}>
            <CampoTexto value={nomeTarefa} onChange={onChangeNomeTarefa}/>
            <Botao texto={loadingCriar ? <Loading /> : '+'} />
        </form>
    );
};

export {FormCriarTarefa};