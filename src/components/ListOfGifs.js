import React, { useState, useEffect } from "react";

import Gif from './Gif';
import './ListOfGifs.css'

export default function ListOfGifs({ gifs }) {

    return <div className="gifGrid">
        {
            (
                gifs.map(({ id, title, url }) =>
                    <Gif
                        title={title}
                        url={url}
                        id={id}
                        key={id}
                    />
                ))
        }
    </div>
}