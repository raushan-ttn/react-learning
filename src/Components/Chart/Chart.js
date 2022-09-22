import React from "react";
import ChartBar from "./CharBar";
import "./Chart.css";

const Chart = (props) => {
    const ChartDataValue = props.dataPoints.map(dataPoint => dataPoint.value);

    const maximumValue = Math.max(...ChartDataValue);
    const ChartBarData = props.dataPoints.map(dataPoint => {
        // console.log(dataPoint,'ChartdataPoint')
        return (
            <ChartBar
                key={dataPoint.label}
                value={dataPoint.value}
                maxValue={maximumValue}
                label={dataPoint.label}
            />
        )
    });
    return (
        <div className="chart">{ChartBarData}</div>
    );
};

export default Chart;