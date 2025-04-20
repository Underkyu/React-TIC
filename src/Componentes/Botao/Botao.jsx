import style from './botao.module.css';
import { TIPO_BOTAO } from './constantes'


const Botao = (props) => {
    const {
        texto,
        tipo = TIPO_BOTAO.PRIMARIO,
        onClick,
        ...outrasProps
    } = props;

    return (
        <button
            tipo = {tipo}
            className={style.Botao}
            onClick={onClick}
            {...outrasProps}
        >
            {texto}
        </button>
    );
};

export { Botao };