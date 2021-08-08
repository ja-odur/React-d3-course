import React from 'react';
import { useData } from "./useData";
import { extent, scaleTime, scaleLinear, timeFormat } from "d3";
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

const xValue = d => d.timestamp;
const xAxisLabel = 'Time';

const yValue = d => d.temperature;
const yAxisLabel = 'Temperature';


// const siFormat = timeFormat('%a');
// const siFormat = timeFormat('%d %b');
const xAxisTickFormat = timeFormat('%d %b');


export const App = () => {
    const data = useData();

    if(!data) {
        return <pre>Loading...</pre>
    }

    const xScale = scaleTime()
        .domain(extent(data, xValue))
        .range([0, innerWidth])
        .nice();

    const yScale = scaleLinear()
        .domain(extent(data, yValue))
        .range([innerHeight, 0])
        .nice();

    return (
        <svg width={width} height={height}>
            <g transform={`translate(${margin.left}, ${margin.top})`}>
                <AxisBottom
                    xScale={xScale}
                    innerHeight={innerHeight}
                    tickFormat={xAxisTickFormat}
                    tickOffet={7}
                />
                <AxisLeft yScale={yScale} innerWidth={innerWidth} tickOffset={7} />
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
                    circleRadius={3}
                    tooltipFormat={xAxisTickFormat}
                />

            </g>
        </svg>
    )
}