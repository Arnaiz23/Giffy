import React, {useContext} from "react";
import Gif from "../../components/Gif";
import GifsContext from "../../context/GifsContext";

export default function Detail({ params }){

    const {gifs} = useContext(GifsContext)

    const { id } = params

    const gif = gifs.find(singleGif => singleGif.id === id)

    return <>
        <Gif {...gif} />
    </>
    
}