import React from "react";
import DataSheet from './dataSheet';
import Selects from './selects';
import 'react-datasheet/lib/react-datasheet.css';

function DataSheets(props) {
  return (
    <div className='container datasheets'>
      <Selects
        sheetNum={props.sheetType}
        changeSheetType={props.changeSheetType}
      />
      <DataSheet
        data={props.data}
        sheetNum={props.sheetType}
        changeSheetData={props.changeSheetData}
      />
    </div >
  );
}

export default DataSheets;
