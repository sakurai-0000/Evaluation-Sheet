import React from 'react';
import { StrictMode } from "react";
import RaderChart from './raderChart';
import DataSheets from './dataSheets';
import Switch from './switch';
import BarChart from './barChart';

function Main(props) {
  return (
    <div>
      <div className='container evaluationsheet'>
        <DataSheets
          data={props.evaluation.sheetData}
          sheetType={props.sheetType}
          changeSheetType={props.changeSheetType}
          changeSheetData={props.changeSheetData}
        />
        <div className='container rader switch'>
          <RaderChart
            data={props.evaluation.sheetData}
            raderChecked={props.raderChecked}
          />
          <Switch
            raderChecked={props.raderChecked}
            changeRaderType={props.changeRaderType}
          />
        </div>
      </div>
      <div className='container bar chart'>
      <StrictMode>
        <BarChart 
         data={props.evaluation}
         sheetType={props.sheetType}
         />
      </StrictMode>
    </div >  
    </div >
        );
}

        export default Main;
