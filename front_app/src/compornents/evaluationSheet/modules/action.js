import { createAction } from  'redux-actions';
import * as TYPE from '../constants/actionTypes';

export const changeSheetData = createAction(
  TYPE.CHANGE_SHEET_DATA,
  data => data,
);

export const changeSheetType = createAction(
  TYPE.CHANGE_SHEET_TYPE,
  sheetType => sheetType,
);

export const changeRaderType = createAction(
  TYPE.CHANGE_RADER_TYPE,
  ({raderType, checked}) => ({raderType, checked}),
);
