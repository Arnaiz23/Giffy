import React from "react";
import ListOfGifs from "components/ListOfGifs";

import { useGifs } from "hooks/useGifs";

export default function SearchResults({ params }) {

    const { keyword } = params
    const { loading, gifs } = useGifs({ keyword })

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
    </React.Fragment>

}