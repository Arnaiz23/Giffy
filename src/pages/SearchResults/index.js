import React from "react";
import ListOfGifs from "components/ListOfGifs";

import { useGifs } from "hooks/useGifs";

export default function SearchResults({ params }) {

    const { keyword } = params
    const { loading, gifs, setPage } = useGifs({ keyword })

    const handleNextPage = () => setPage(prevPage => prevPage + 1)

    return <React.Fragment>
        {loading
            ? <i>Cargando...</i>
            : (
                <>
                    <h2>{decodeURI(keyword)}</h2>
                    <ListOfGifs gifs={gifs} />
                </>
            )
        }
        <button onClick={handleNextPage}>Get next page</button>
    </React.Fragment>

}