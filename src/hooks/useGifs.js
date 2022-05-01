import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGIFS";
import GifsContext from "../context/GifsContext";

export function useGifs({ keyword } = { keyword: null }) {

    const [loading, setLoading] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)
    // const [gifs, setGifs] = useState([])

    useEffect(() => {
        setLoading(true)

        const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "Spy x family"
        console.log("Actualizando los gifs...");
        getGifs({ keyword : keywordToUse}).then(gifs => {
            setGifs(gifs)
            setLoading(false)
            if(keyword !== null) localStorage.setItem("lastKeyword", keyword)
        })
    }, [keyword, setGifs])

    return { loading, gifs }

}