import style from './rodape.module.css';

const anoAtual = (new Date()).getFullYear();

const Rodape = (props) =>{
    return(
        <div className= {style.Rodape}>
            <h1>
                React Basico - {anoAtual} - {props.nomeAutor}
            </h1>
        </div>
    );
};

export {Rodape}