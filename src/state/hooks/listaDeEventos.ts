import { useRecoilValue } from "recoil";
import { eventosFitradosState } from "../seletores";

const useListaDeEventos=()=>{
    return useRecoilValue(eventosFitradosState)

}

export default useListaDeEventos;