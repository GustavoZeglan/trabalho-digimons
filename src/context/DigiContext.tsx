import {createContext, useState, ReactNode} from "react";
import {Digimon} from "../model/Digimon";

interface DigiProps {
    digimons: Digimon[]
    handleDigimons: (arr: Digimon[]) => void,
    page: number,
    handlePage: (page: number) => void,
}

const DigiContext = createContext<DigiProps>({} as DigiProps);

const DigiProvider = ({children}: { children: ReactNode }) => {

    const [digimons, setDigimons] = useState<Digimon[]>([]);
    const [page, setPage] = useState<number>(1);

    function handleDigimons(arr: Digimon[]) {
        setDigimons(arr);
    }

    function handlePage(page: number) {
        setPage(page);
    }

    return (
        <DigiContext.Provider value={{digimons, handleDigimons, page, handlePage}}>
            <>{children}</>
        </DigiContext.Provider>
    )

}

export {DigiProvider, DigiContext}