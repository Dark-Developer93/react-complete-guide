import React from "react";

import ChartBar from "./ChartBar";
import "./Chart.ccs";

const Chart = (props) => {
  const dataPointsValues = props.dataPoints.map((datapoint) => datapoint.value);
  const totalMaximum = Math.max();
  return (
    <div className="chart">
      {props.dataPoints.map((datapoint) => {
        <ChartBar
          key={datapoint.label}
          value={datapoint.value}
          maxValue={null}
          label={datapoint.label}
        />;
      })}
    </div>
  );
};

export default Chart;
