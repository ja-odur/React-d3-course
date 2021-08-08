import React from 'react';

export const AxisBottom = ({ xScale, innerHeight, tickFormat, tickOffet = 3 }) => (
    xScale.ticks(8).map(tickValue => (
        <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)}, ${0})`}>
            <line y2={innerHeight} />
            <text
                y={innerHeight + tickOffet}
                style={{textAnchor: 'middle'}}
                dy=".71em"
            >
                {tickFormat(tickValue)}
            </text>
        </g>
    ))
);
