import { connect } from 'react-redux';
import evaluationSheet from '../components/evaluationSheet';
import {
  changeSheetData,
  changeSheetType,
  changeRaderType,
} from '../modules/action';

function mapStateToProps(state) {
  return {
    sheetType: state.evaluation.sheetType,
    raderChecked: state.evaluation.raderChecked,
    evaluation: { 
      sheetData: state.evaluation.sheetData, 
      oldSheetData: state.evaluation.oldSheetData,
    }
  };
}

function mapDispatchToProps(dispatch) {
  return {
    changeSheetData: data => dispatch(changeSheetData(data)),
    changeSheetType: sheetType => dispatch(changeSheetType(sheetType)),
    changeRaderType: ({raderType, checked}) => dispatch(changeRaderType({raderType, checked})),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(evaluationSheet);