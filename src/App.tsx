import { Select } from "antd";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";
import style from "./UnitsReport.module.scss";

const App = () => {
  const [selectedUnit, setSelectedUnit] = useState("Unit 1");

  const mockUnits = [
    { value: "Unit 1" },
    { value: "Unit 2" },
    { value: "Unit 3" },
  ];

  const options = {
    chart: {
      type: "column",
      width: 500,
      height: 350,
    },
    title: {
      text: "",
    },
    xAxis: {
      categories: ["", "", ""],
    },
    yAxis: {
      title: {
        text: "",
      },
    },
    plotOptions: {
      series: {
        stacking: "normal",
        pointWidth: 50,
      },
    },
    series: [
      {
        name: "New",
        data: [10],
      },
      {
        name: "Reviewed",
        data: [5],
      },
      {
        name: "Amended",
        data: [8],
      },
      {
        name: "Reviewing",
        data: [5],
      },
    ],
    credits: {
      enabled: false,
    },
  };

  return (
    <div className={style.container}>
      <div className={style.infoBlock}>
        <div className={style.selectContainer}>
          Select unit:
          <Select
            placeholder="Unit"
            defaultValue={selectedUnit}
            options={mockUnits}
            onChange={(value) => setSelectedUnit(value)}
          />
        </div>
        <div className={style.info}>
          <div className={style.title}> {selectedUnit}:</div>
          <div className={style.count}>20 submissions</div>
          <div className={style.infoItem}>
            Reviewed per months:<span>10</span>
          </div>
          <div className={style.infoItem}>
            Reviewed per year:<span>15</span>
          </div>
          <div className={style.infoItem}>
            Approval times:<span>7 days(in average)</span>
          </div>
        </div>
      </div>
      <HighchartsReact highcharts={Highcharts} options={options} />
    </div>
  );
};

export default App;

