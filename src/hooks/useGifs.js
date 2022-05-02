import { useContext, useEffect, useState } from "react";
import getGifs from "../services/getGIFS";
import GifsContext from "../context/GifsContext";

const INITIAL_PAGE = 0

export function useGifs({ keyword } = { keyword: null }) {

    const [loading, setLoading] = useState(false)
    const [loadingNextPage, setLoadingNextPage] = useState(false)
    const {gifs, setGifs} = useContext(GifsContext)
    const [page, setPage] = useState(0)
    // const [gifs, setGifs] = useState([])

    const keywordToUse = keyword || localStorage.getItem("lastKeyword") || "Spy x family"

    useEffect(() => {
        setLoading(true)

        getGifs({ keyword : keywordToUse}).then(gifs => {
            setGifs(gifs)
            setLoading(false)
            if(keyword !== null) localStorage.setItem("lastKeyword", keyword)
        })
    }, [keyword, keywordToUse, setGifs])

    useEffect(() => {
        if(page === INITIAL_PAGE) return

        setLoadingNextPage(true)
        
        getGifs({keyword: keywordToUse, page})
            .then(nextGifs => {
                setGifs(prevGifs => prevGifs.concat(nextGifs))
                // setGifs(nextGifs)
                setLoadingNextPage(false)
            })
    }, [page, keywordToUse])

    return { loading, loadingNextPage, gifs, setPage }

}