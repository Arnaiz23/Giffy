import React, { useState, useEffect } from "react";

import Gif from './Gif';

export default function ListOfGifs({ gifs }) {

    return <React.Fragment>
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
    </React.Fragment>
}