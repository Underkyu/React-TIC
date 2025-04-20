import style from './cabecalho.module.css'

const CampoTexto = (props) => {
    return(
        <input type="text" 
        className= {style.CampoTexto}
        {...props}
        />
    );
};

export {CampoTexto};