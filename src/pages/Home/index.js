import TrendingSearches from "components/TrendingSearches";
import React, { useEffect, useState } from "react";
import { Link, useLocation } from "wouter";
import ListOfGifs from "../../components/ListOfGifs";
import { useGifs } from "../../hooks/useGifs";

import './Home.css'

const POPULAR_GIFS = ["aomine", "pandas"]

export default function Home() {
    const [keyword, setKeyword] = useState('')
    const [path, pushLocation] = useLocation()
    const { loading, gifs } = useGifs()

    const handleSubmit = evt => {
        evt.preventDefault()
        console.log(keyword);
        pushLocation(`/search/${keyword}`)
    }

    const handleChange = evt => {
        setKeyword(evt.target.value)
    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <input type="Submit"  value='Buscar' className="inputSearch" />
                <input onChange={handleChange} type='text' value={keyword} placeholder="Search any keyword" />
            </form>
            <h3>Los gifs más populares</h3>
            {/* <ul>
                {POPULAR_GIFS.map((popularGif) => (
                    <li key={popularGif}>
                        <Link to={`/search/${popularGif}`}>Gifs de {popularGif}</Link>
                    </li>
                ))}
            </ul> */}
            <TrendingSearches />
            <h3>Última busqueda</h3>
            <ListOfGifs gifs={gifs} />
        </>
    )
}