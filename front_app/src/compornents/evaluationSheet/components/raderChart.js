import React from 'react';
import { Radar } from 'react-chartjs-2';
import {
  sheetContents,
  raderLabels,
  dataSheetlabels,
} from '../constants/sheetItems'
import { calcurateRate } from './util/calcurate';

function generateRate(sheetData, columnType) {
  const data = [];
  Object.keys(sheetContents).forEach((itemKey) => {
    data.push(calcurateRate(sheetData[sheetContents[itemKey]], columnType));
  });
  return data;
}
function RaderChart(props) {
  const { data: sheetData, raderChecked } = props;

  const stateuseState = ({
    chartData: {
      labels: raderLabels,
      datasets: [
        {
          label: dataSheetlabels[1],
          data: raderChecked['self'] ? generateRate(sheetData, 'self') : [],
          backgroundColor: 'rgba(255,99,132,0.6)',
          borderColor: 'rgba(255,99,132,0.6)',
        },
        {
          label: dataSheetlabels[2],
          data: raderChecked['boss'] ? generateRate(sheetData, 'boss') : [],
          backgroundColor: 'rgba(54,162,235,0.6)',
          borderColor: 'rgba(54,162,235,0.6)',
        },
        {
          label: dataSheetlabels[3],
          data: raderChecked['final'] ? generateRate(sheetData, 'final') : [],
          backgroundColor: 'rgba(178,255,102,0.6)',
          borderColor: 'rgba(178,255,102,0.6)',
        }
      ]
    },
  });

  return (
    <div className='container rader'>
      <Radar
        data={stateuseState.chartData}
        options={{
          scale: {
            legend: {
              labels: {
                fontSize: 100
              },
              position: 'bottom'
            },
            ticks: {
              min: 0,
              max: 12,
              stepSize: 2,
              showLabelBackdrop: false,
              backdropColor: 'rgba(203, 197, 11, 1)'
            },
            angleLines: {
              color: 'rgba(0, 255, 255, .3)',
              lineWidth: 1
            },
            gridLines: {
              color: 'rgba(0, 255, 255, .3)',
              circular: true
            },
          }
        }}
      />
    </div >
  );
}

export default RaderChart;
