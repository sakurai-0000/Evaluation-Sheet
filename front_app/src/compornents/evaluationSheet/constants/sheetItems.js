export const sheetTitle = {
  1: '１．開発技術：開発フェーズ',
  2: '２．PJ推進：案件マネジメント',
  3: '３．Non Title',
  4: '４．Non Title',
  5: '５．その他：勤怠、コミュニケーション等',
};
export const sheetContents = {
  1: 'developSheetItems',
  2: 'managementSheetItems',
  3: 'organizationSheetItems',
  4: 'skillSheetItems',
  5: 'otherSheetItems',
}
export const sheetCommonItems = {
  sumpts: '合計（pts）',
  applicabilityrate: '適用率（％）',
};
export const sheetItems = {
  developSheetItems: {
    developSheetItem1: '対応可能: ユーザー要件定義',
    developSheetItem2: '対応可能: システム要件定義',
    developSheetItem3: '対応可能: 基本設計',
    developSheetItem4: '対応可能: 詳細設計',
    developSheetItem5: '対応可能: コーディング',
    developSheetItem6: '対応可能: 単体テスト、機能テスト',
    developSheetItem7: '対応可能: システム内結合テスト',
    developSheetItem8: '対応可能: システム間結合テスト',
    developSheetItem9: '対応可能: サイクルテスト、パフォーマンステスト、ユーザーテスト',
    developSheetItem10: '対応可能: 移行計画/移行実施',
    developSheetItem11: '対応可能: レビューアを担当できる',
  },
  managementSheetItems: {
    managementSheetItem1: '案件の工数見積ができる',
    managementSheetItem2: '案件の工数管理（コスト管理）ができる',
    managementSheetItem3: '案件の品質管理ができる',
    managementSheetItem4: '案件の納期遵守ができる',
    managementSheetItem5: '案件へのメンバーアサインのコントロールができる',
    managementSheetItem6: '案件の推進（進捗管理）ができる',
    managementSheetItem7: '複数案件の推進（進捗管理）ができる',
    managementSheetItem8: '管理担当した案件の金額（0:なし 1:100万以下 2:500万以下 3:1000万以下 4:5000万以下 5:左記以上）',
  },
  organizationSheetItems: {
    organizationSheetItem1: '制作中。。。',
  },
  skillSheetItems: {
    skillSheetItem1: '制作中。。。',
  },
  otherSheetItems: {
    otherSheetItem1: '勤怠状況に問題がない',
    otherSheetItem2: '問題解決のため、主体的に動くことができる',
    otherSheetItem3: '自分自身の価値向上のため、自己学習を日常的に行っている',
    otherSheetItem4: 'アンテナを高く持ち、世の中の動きを敏感にキャッチしている',
    otherSheetItem5: '他のメンバーのため、知識や情報をアウトプットしている',
    otherSheetItem6: 'ストレスに対し耐性があり、安定した精神状態を保つことができる',
    otherSheetItem7: '場の雰囲気を作ることができる（ムードメーカー）',
  },
}
export const headers = [
  { readOnly: true, value: ' ' },
  { readOnly: true, value: ' ' },
  { readOnly: true, value: '自己申告' },
  { readOnly: true, value: '上長評価' },
  { readOnly: true, value: '最終評価' },
];
export const raderLabels = ['開発技術', 'PJ推進', '組織運営', 'スキル', 'その他'];
export const dataSheetlabels = {
  1:'Self Assessment',
  2:'Boss Evaluation',
  3:'Final Evaluation',
}
export const months = [ 'March', 'Jun', 'September', 'December'];

export const months_ = { 
  march: 'March', 
  jun: 'Jun', 
  september: 'September', 
  december: 'December'
};