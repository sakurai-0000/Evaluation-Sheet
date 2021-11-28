import { handleActions } from 'redux-actions';
import {
  CHANGE_SHEET_DATA,
  CHANGE_SHEET_TYPE,
  CHANGE_RADER_TYPE,
} from '../constants/actionTypes';

const initialState = {
  sheetData: {
    developSheetItems: {
      self: [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 2],
      boss: [2, 3, 4, 4, 5, 4, 3, 2, 1, 3, 2],
      final: [4, 4, 4, 4, 4, 4, 3, 2, 1, 3, 2],
    },
    managementSheetItems: {
      self: [1, 2, 3, 4, 5, 4, 3, 2],
      boss: [2, 3, 4, 4, 5, 1, 2, 3],
      final: [4, 4, 4, 4, 4, 2, 5, 3],
    },
    organizationSheetItems: {
      self: [1, 2, 3, 4, 5],
      boss: [2, 3, 4, 4, 5],
      final: [4, 4, 4, 4, 4],
    },
    skillSheetItems: {
      self: [1, 2, 3, 4, 5],
      boss: [2, 3, 4, 4, 5],
      final: [4, 4, 4, 4, 4],
    },
    otherSheetItems: {
      self: [1, 2, 3, 4, 5, 1, 2],
      boss: [2, 3, 4, 4, 5, 3, 4],
      final: [4, 4, 4, 4, 4, 5, 4],
    },
  },
  oldSheetData: {
    march: {
      developSheetItems: {
        self: [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 2],
        boss: [2, 3, 4, 4, 5, 4, 3, 2, 1, 3, 2],
        final: [4, 4, 4, 4, 4, 4, 3, 2, 1, 3, 2],
      },
      managementSheetItems: {
        self: [1, 2, 3, 4, 5, 4, 3, 2],
        boss: [2, 3, 4, 4, 5, 1, 2, 3],
        final: [4, 4, 4, 4, 4, 2, 5, 3],
      },
      organizationSheetItems: {
        self: [1, 2, 3, 4, 5],
        boss: [2, 3, 4, 4, 5],
        final: [4, 4, 4, 4, 4],
      },
      skillSheetItems: {
        self: [1, 2, 3, 4, 5],
        boss: [2, 3, 4, 4, 5],
        final: [4, 4, 4, 4, 4],
      },
      otherSheetItems: {
        self: [1, 2, 3, 4, 5, 1, 2],
        boss: [2, 3, 4, 4, 5, 3, 4],
        final: [4, 4, 4, 4, 4, 5, 4],
      },
    },
    jun: {
      developSheetItems: {
        self: [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 2],
        boss: [2, 3, 4, 4, 5, 4, 3, 2, 1, 3, 2],
        final: [4, 4, 4, 4, 4, 4, 3, 2, 1, 3, 2],
      },
      managementSheetItems: {
        self: [1, 2, 3, 4, 5, 4, 3, 2],
        boss: [2, 3, 4, 4, 5, 1, 2, 3],
        final: [4, 4, 4, 4, 4, 2, 5, 3],
      },
      organizationSheetItems: {
        self: [1, 2, 3, 4, 5],
        boss: [2, 3, 4, 4, 5],
        final: [4, 4, 4, 4, 4],
      },
      skillSheetItems: {
        self: [1, 2, 3, 4, 5],
        boss: [2, 3, 4, 4, 5],
        final: [4, 4, 4, 4, 4],
      },
      otherSheetItems: {
        self: [1, 2, 3, 4, 5, 1, 2],
        boss: [2, 3, 4, 4, 5, 3, 4],
        final: [4, 4, 4, 4, 4, 5, 4],
      },
    },
    september: {
      developSheetItems: {
        self: [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 2],
        boss: [2, 3, 4, 4, 5, 4, 3, 2, 1, 3, 2],
        final: [4, 4, 4, 4, 4, 4, 3, 2, 1, 3, 2],
      },
      managementSheetItems: {
        self: [1, 2, 3, 4, 5, 4, 3, 2],
        boss: [2, 3, 4, 4, 5, 1, 2, 3],
        final: [4, 4, 4, 4, 4, 2, 5, 3],
      },
      organizationSheetItems: {
        self: [1, 2, 3, 4, 5],
        boss: [2, 3, 4, 4, 5],
        final: [4, 4, 4, 4, 4],
      },
      skillSheetItems: {
        self: [1, 2, 3, 4, 5],
        boss: [2, 3, 4, 4, 5],
        final: [4, 4, 4, 4, 4],
      },
      otherSheetItems: {
        self: [1, 2, 3, 4, 5, 1, 2],
        boss: [2, 3, 4, 4, 5, 3, 4],
        final: [4, 4, 4, 4, 4, 5, 4],
      },
    },
    december: {
      developSheetItems: {
        self: [1, 2, 3, 4, 5, 4, 3, 2, 1, 3, 2],
        boss: [2, 3, 4, 4, 5, 4, 3, 2, 1, 3, 2],
        final: [4, 4, 4, 4, 4, 4, 3, 2, 1, 3, 2],
      },
      managementSheetItems: {
        self: [1, 2, 3, 4, 5, 4, 3, 2],
        boss: [2, 3, 4, 4, 5, 1, 2, 3],
        final: [4, 4, 4, 4, 4, 2, 5, 3],
      },
      organizationSheetItems: {
        self: [1, 2, 3, 4, 5],
        boss: [2, 3, 4, 4, 5],
        final: [4, 4, 4, 4, 4],
      },
      skillSheetItems: {
        self: [1, 2, 3, 4, 5],
        boss: [2, 3, 4, 4, 5],
        final: [4, 4, 4, 4, 4],
      },
      otherSheetItems: {
        self: [1, 2, 3, 4, 5, 1, 2],
        boss: [2, 3, 4, 4, 5, 3, 4],
        final: [4, 4, 4, 4, 4, 5, 4],
      },
    },
  },
  sheetType: 2,
  raderChecked: {
    self: true,
    boss: true,
    final: true,
  }
}

export default handleActions({
  [CHANGE_SHEET_TYPE]: (state, action) => {
    const result = { ...state };
    result.sheetType = action.payload;
    return result;
  },
  [CHANGE_SHEET_DATA]: (state, action) => {
    const { sheetContent, pointType, key, value } = action.payload;
    const result = { ...state };
    const newData = state.sheetData[sheetContent][pointType].map((el, index) => index === key ? value : el);
    const newSheetData = { ...state.sheetData };
    newSheetData[sheetContent][pointType] = newData;
    result.sheetData = {
      ...result.sheetData,
      newSheetData,
    }
    return result;
  },
  [CHANGE_RADER_TYPE]: (state, action) => {
    const { raderType, checked } = action.payload;
    const result = { ...state };
    const newRaderChecked = result.raderChecked;
    newRaderChecked[raderType] = checked;
    result.raderChecked = {
      ...result.raderChecked,
      newRaderChecked,
    };
    return result;
  },
}, initialState);