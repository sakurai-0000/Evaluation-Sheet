/**
 * 桁数は小数点第1位まで表示
 * @param {*} sheetData 
 * @param {*} columnType 
 * @returns 
 */
export const calcurateSum = (sheetData, columnType) => {
  return (sheetData[columnType].reduce((acc, cur) => acc + cur)).toFixed(1);
}

/**
 * 小数点第1位を四捨五入、桁数は小数点第1位まで表示
 * @param {*} sheetData 
 * @param {*} columnType 
 * @returns 
 */
export const calcurateRate = (sheetData, columnType) => {
  const sum = calcurateSum(sheetData, columnType);
  const recordsNum = sheetData[columnType].length;
  return (Math.round(sum / (recordsNum * 5) * 100 * 10) / 10).toFixed(1);
}