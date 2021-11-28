import React from "react";
import "chartjs-plugin-datalabels";
import { Bar } from "react-chartjs-2";
import { calcurateSum } from './util/calcurate';
import {
  sheetContents,
  raderLabels,
  dataSheetlabels,
  months,
} from '../constants/sheetItems'

function BarChart(props){
    const { data: evaluation, raderChecked } = props;
    const { sheetData, oldSheetData } = evaluation;
    function generateSum(sheetData, columnType) {
    const data = [];
    Object.keys(sheetContents).forEach((itemKey) => {
      data.push(calcurateSum(sheetData[sheetContents[itemKey]], columnType));
    });
    return data;
  }

// 指定した月の合計（評価基準毎）＋　適用率
// ３ヶ月毎の推移（合計と適用率）、評価基準毎
  function generateSum_test(sheetData, columnType) {
    const data = [];
    Object.keys(sheetContents).forEach((itemKey) => {
      data.push(calcurateSum(sheetData[sheetContents[itemKey]], columnType));
    });
    return data;
  }


    const data = {
      labels: months,
      datasets: [
        {
          type: 'bar',
          label: dataSheetlabels[1],
          data: generateSum(sheetData, 'self'),
          stack: 'Stack 0',
          backgroundColor: "rgb(255, 99, 132, 0.6)"
        },
        {
          type: 'bar',
          label: dataSheetlabels[2],
          data: generateSum(sheetData, 'boss'),
          stack: 'Stack 1',
          backgroundColor: "rgb(54, 162, 235, 0.6)",
          yAxisID: "y-axis-1",
        },
        {
          type: 'bar',
          label: dataSheetlabels[3],
          data: generateSum(sheetData, 'final'),
          stack: 'Stack 2',
          backgroundColor: "rgb(178,255,102, 0.6)",
          yAxisID: "y-axis-1",
        },
        {
          type: 'line',
          label: dataSheetlabels[3],
          data: generateSum(sheetData, 'final'),
          stack: 'Stack 3',
          backgroundColor: "rgb(178,255,102, 0.6)",
          yAxisID: "y-axis-2",
          position: "right",
        }
      ]
    };

    const options = {
      plugins: {
        datalabels: {
          display: true,
          color: "black",
          align: "end",
          anchor: "end",
          font: { size: "14" }
        }
      },
      scales: {
        yAxes: [
          {
            stacked: true
          }
        ],
        xAxes: [
          {
            stacked: true
          }
        ]
      }
    };
    return (
      <div>
        <Bar data={data} options={options} />
      </div>
    );
  }

export default BarChart;
