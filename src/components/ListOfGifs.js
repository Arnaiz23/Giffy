import React, { useState, useEffect } from "react";

import Gif from './Gif';
import getGifs from '../services/getGIFS';

export default function ListOfGifs({ params }) {
    const [loading, setLoading] = useState(false)

    const { keyword } = params

    const [gifs, setGifs] = useState([])

    // ! useEffect -> se ejecuta cada vez que el componente se renderize (ComponentDidMount)
    // ? useEffect ( funcion, dependencias)

    /* useEffect(() => {
        console.log("Actualizando los gifs...");
        getGifs({ keyword }).then(gifs => setGifs(gifs))
    }, []) */ /* De esta manera, solo cambia una vez aunque cambies la keyword */

    useEffect(() => {
        setLoading(true)
        console.log("Actualizando los gifs...");
        getGifs({ keyword }).then(gifs => {
            setGifs(gifs)
            setLoading(false)
        })
    }, [keyword])

    if(loading) return <i>Cargando...</i>

    return <React.Fragment>
        {
            gifs.map(({ id, title, url }) => <Gif
                title={title}
                url={url}
                id={id}
                key={id}
            />)
        }
    </React.Fragment>
}