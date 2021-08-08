import React from 'react';

export const AxisLeft = ({ yScale, innerWidth, tickOffset = 3 }) => (
    yScale.ticks().map(tickValue => (
        <g className="tick" transform={`translate(0, ${yScale(tickValue)})`}>
            <line x2={innerWidth} />
            <text
                key={tickValue}
                y={yScale(tickValue)}
                x={-tickOffset}
                style={{textAnchor: 'end'}}
                dy=".32em"
            >
                {tickValue}
            </text>
        </g>
    ))
);
