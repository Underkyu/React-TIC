import { Route, Routes } from "react-router-dom";
import {Erro, Inicial, SobreNos} from "./pages"
import { LayoutPadrao } from "./Layouts";

const Router = () => {
    return(
        <Routes>
            <Route path="/" element={<LayoutPadrao />}>
            <Route path="/" element={<Inicial />} />
            <Route path="/SobreNos" element={<SobreNos />} />
            <Route path="*" element={<Erro />} />
            </Route>
        </Routes>
    );
};

export {Router}