import React from "react";
import ChartBar from "./CharBar";
import "./Chart.css";

const Chart = (props) => {
    const ChartBar = props.dataPoints.map(dataPoint => {
        return (
            <ChartBar
                value={dataPoint.value}
                maxValue={null}
                label={dataPoint.label}
            />
        )
    });
    return (
        <div className="chart">{ChartBar}</div>
    );
};

export default Chart;