import { Outlet } from "react-router-dom"
import { Cabecalho, Conteudo, Rodape } from "../../Componentes"
import { Inicial } from "../../pages"
import { useContext } from "react"
import { useAppContext } from "../../hooks"

const LayoutPadrao = () => {
  const {criador}=useAppContext();
    return(
    <>
    <Cabecalho/>
      <Conteudo>
        <Outlet />
      </Conteudo>
    <Rodape nomeAutor={criador}/>
    </>
    )   
}

export {LayoutPadrao}