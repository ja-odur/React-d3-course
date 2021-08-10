import React from 'react';
// import { } from "d3";
import { useData } from "./useData";
import { Marks } from "./Marks";

const width = 960;
const height = 500;


export const App = () => {
    const data = useData();

    if(!data) {
        return <pre>Loading...</pre>
    }

    return (
        <svg width={width} height={height}>
            <Marks
                data={data}
            />
        </svg>
    )
}