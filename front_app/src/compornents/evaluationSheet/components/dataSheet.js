import React from 'react';
import ReactDataSheet from 'react-datasheet';
import Select from 'react-select';
import {
  sheetTitle,
  sheetContents,
  sheetCommonItems,
  sheetItems,
  headers
} from '../constants/sheetItems'
import { calcurateSum, calcurateRate } from './util/calcurate';
import 'react-datasheet/lib/react-datasheet.css';

/**
 * 
 * @param {*} sheetData 
 * @returns 
 */
function generateCommonRecords(sheetData) {
  const generateCell = (value, className) => (
    {
      readOnly: true,
      component: (
        <div className={className} >
          {value}
        </div>
      ),
      forceComponent: true
    }
  );
  return [
    [
      { readOnly: true, colSpan: 2, value: `${sheetCommonItems['sumpts']}` },
      generateCell(calcurateSum(sheetData, 'self'), 'sumpts'),
      generateCell(calcurateSum(sheetData, 'boss'), 'sumpts'),
      generateCell(calcurateSum(sheetData, 'final'), 'sumpts'),
    ], [
      { readOnly: true, colSpan: 2, value: `${sheetCommonItems['applicabilityrate']}` },
      generateCell(calcurateRate(sheetData, 'self'), 'applicabilityrate'),
      generateCell(calcurateRate(sheetData, 'boss'), 'applicabilityrate'),
      generateCell(calcurateRate(sheetData, 'final'), 'applicabilityrate'),
    ]
  ];
}

/**
 * 
 * @param {*} sheetData 
 * @param {*} sheetContent 
 * @param {*} changeSheetData 
 * @returns 
 */
function generateSelectrecords(sheetData, sheetContent, changeSheetData) {

  const generateSelect = (key, pointType) => {
    return (
      <Select
        closeMenuOnSelect={false}
        placeholder={'Point Select'}
        options={[
          { label: '1', value: 1 },
          { label: '2', value: 2 },
          { label: '3', value: 3 },
          { label: '4', value: 4 },
          { label: '5', value: 5 }
        ]}
        onChange={change => {
          changeSheetData(
            {
              sheetContent,
              pointType,
              key,
              value: change.value
            }
          );
        }}
      />
    )
  };

  const records = [];
  Object.keys(sheetItems[sheetContent]).forEach((item, key) => {
    const record = [];
    record.push({ readOnly: true, value: `${key + 1}` });
    record.push({ readOnly: true, value: `${sheetItems[sheetContent][item]}` })
    record.push({ value: sheetData['self'][key], component: generateSelect(key, 'self') });
    record.push({ value: sheetData['boss'][key], component: generateSelect(key, 'boss') });
    record.push({ value: sheetData['final'][key], component: generateSelect(key, 'final') });
    records.push(record);
  });
  return records;
}

function DataSheet(props) {
  const { sheetNum, data } = props;
  const sheetContent = sheetContents[sheetNum];
  const sheetData = data[sheetContent];
  // ポイントのセレクトをだすレコード生成
  const selectRecords = generateSelectrecords(sheetData, sheetContent, props.changeSheetData);
  // 合計、適用率のレコード生成
  const commonRecords = generateCommonRecords(sheetData);
  const grid = [headers, ...selectRecords, ...commonRecords];

  return (
    <div className='container datasheet'>
      <div className='container datasheet title'>
        {`${sheetTitle[sheetNum]}`}
      </div>
      <ReactDataSheet
        data={grid}
        valueRenderer={cell => cell.value}
      />
    </div >
  );
}

export default DataSheet;