import React from 'react';
import { useData } from "./useData";
import { extent, scaleLinear, format } from "d3";
import { AxisBottom } from "./AxisBottom";
import { AxisLeft } from "./AxisLeft";
import { Marks } from "./Marks";

const width = 960;
const height = 500;
const margin = {top: 20, right: 30, bottom: 65, left: 90}
const xAxisLabelOffset = 50;
const yAxisLabelOffset = 40;

const innerHeight = height - margin.top - margin.bottom;
const innerWidth  = width - margin.left - margin.right;

const xValue = d => d.petal_length;
const xAxisLabel = 'Petal Length';

const yValue = d => d.sepal_width;
const yAxisLabel = 'Sepal Width';


const siFormat = format('.2s');
const xAxisTickFormat = tickValue => siFormat(tickValue).replace('G', 'B');


export const App = () => {
    const data = useData();

    if(!data) {
        return <pre>Loading...</pre>
    }

    const xScale = scaleLinear()
        .domain(extent(data, xValue))
        .range([0, innerWidth])
        .nice();

    const yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([0, innerHeight]);

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <AxisBottom
                    xScale={xScale}
                    innerHeight={innerHeight}
                    tickFormat={xAxisTickFormat}
                    tickOffet={7}
                />
                <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={5} />
                <text
                    className={'axis-label'}
                    x={innerWidth / 2}
                    y={innerHeight + xAxisLabelOffset}
                    style={{textAnchor: 'middle'}}
                >
                    {xAxisLabel}
                </text>
                <text
                    className={'axis-label'}
                    style={{textAnchor: 'middle'}}
                    transform={`translate(${-yAxisLabelOffset}, ${innerHeight / 2}) rotate(-90)`}
                >
                    {yAxisLabel}
                </text>
                <Marks
                    data={data}
                    xScale={xScale}
                    yScale={yScale}
                    xValue={xValue}
                    yValue={yValue}
                    circleRadius={7}
                    tooltipFormat={xAxisTickFormat}
                />

            </g>
        </svg>
    )
}