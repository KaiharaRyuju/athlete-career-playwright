const testCases = [
  {
    name: "名前の空白エラーチェック",
    nameInput: "",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "name",
    expectedMessage: "氏名を入力してください",
  },
  {
    name: "名前の50文字以上エラーチェック",
    nameInput:
      "テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "name",
    expectedMessage: "氏名は50文字以内で入力してください",
  },
  {
    name: "生年月日(月)の空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "birth_month",
    expectedMessage: "生年月日(月)を選択してください",
  },
  {
    name: "生年月日(日)の空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "birth_day",
    expectedMessage: "生年月日(日)を選択してください",
  },
  {
    name: "郵便番号の空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "zip",
    expectedMessage: "郵便番号を入力してください",
  },
  {
    name: "郵便番号の7文字未満エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "146009",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "zip",
    expectedMessage:
      "郵便番号は7文字の半角数字で、ハイフンなしで入力してください",
  },
  {
    name: "郵便番号の7文字以上エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "146009146009",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "zip",
    expectedMessage:
      "郵便番号は7文字の半角数字で、ハイフンなしで入力してください",
  },
  {
    name: "郵便番号の半角数字エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460テスト",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "zip",
    expectedMessage:
      "郵便番号は7文字の半角数字で、ハイフンなしで入力してください",
  },
  {
    name: "郵便番号のハイフンエラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460-92",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "zip",
    expectedMessage:
      "郵便番号は7文字の半角数字で、ハイフンなしで入力してください",
  },
  {
    name: "都道府県の空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "prefecture",
    expectedMessage: "都道府県を選択してください",
  },
  {
    name: "市区町村の空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "address",
    expectedMessage: "市町村・番地・建物名を入力してください",
  },
  {
    name: "市区町村の200文字以上エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address:
      "テストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテストテスト",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "address",
    expectedMessage: "市町村・番地・建物名は200文字以内で入力してください",
  },
  {
    name: "電話番号の空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "portable_tel",
    expectedMessage: "電話番号を入力してください",
  },
  {
    name: "電話番号の10文字未満エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "080123",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "portable_tel",
    expectedMessage:
      "電話番号は10文字以上・11文字以内の半角数字・ハイフンなしで入力してください",
  },
  {
    name: "電話番号の11文字以上エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "0801234567890",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "portable_tel",
    expectedMessage:
      "電話番号は10文字以上・11文字以内の半角数字・ハイフンなしで入力してください",
  },
  {
    name: "メールアドレスの空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "portable_email",
    expectedMessage: "メールアドレスを入力してください",
  },
  {
    name: "メールアドレスの形式エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mzmynavi.jp",
    emailRe: "kaihara.ryuju.mzmynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "portable_email",
    expectedMessage: "メールアドレスの形式で入力してください",
  },
  {
    name: "メールアドレスの256文字以上エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email:
      "kaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mzkaihara.ryuju.mz@mynavi.jp",
    emailRe: "",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "portable_email",
    expectedMessage: "メールアドレスは256文字以内で入力してください",
  },
  {
    name: "確認用メールアドレスの空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "portable_email_re",
    expectedMessage: "確認用メールアドレスを入力してください",
  },
  {
    name: "確認用メールアドレスとメールアドレスが異なるエラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryujumz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "portable_email_re",
    expectedMessage: "確認用メールアドレスがメールアドレスと異なります",
  },
  {
    name: "学校区分の空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "",
    schoolName: "",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "educations_school_category_id",
    expectedMessage: "学校区分を選択してください",
  },
  {
    name: "学校名の空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "educations_school",
    expectedMessage: "学校名を入力してください",
  },
  {
    name: "学校名の50文字以上エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName:
      "マイナビ大学マイナビ大学マイナビ大学マイナビ大学マイナビ大学マイナビ大学マイナビ大学マイナビ大学マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "educations_school",
    expectedMessage: "学校名は50文字以内で入力してください",
  },
  {
    name: "学部・学科名の50文字以上エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName:
      "マイナビ学部・マイナビ学科名マイナビ学部・マイナビ学科名マイナビ学部・マイナビ学科名マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "educations_course",
    expectedMessage: "学部・学科名は50文字以内で入力してください",
  },
  {
    name: "競技名の空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "sport_name",
    expectedMessage: "競技名を入力してください",
  },
  {
    name: "競技名の50文字以上エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11:
      "バレーボールバレーボールバレーボールバレーボールバレーボールバレーボールバレーボールバレーボールバレーボールバレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "sport_name",
    expectedMessage: "競技名は50文字以内で入力してください",
  },
  {
    name: "戦績の500文字以上エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15:
      "2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。2019年マイナビ大会で優勝しました。",
    hopePlace: "東京か神奈川",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "score",
    expectedMessage: "戦績は500文字以内で入力してください",
  },
  {
    name: "希望勤務地の空白エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "hope_place",
    expectedMessage: "希望勤務地を入力してください",
  },
  {
    name: "希望勤務地の100文字以上エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace:
      "希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地希望勤務地",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    errorName: "hope_place",
    expectedMessage: "希望勤務地は100文字以内で入力してください",
  },
  {
    name: "資格・スキルの500文字以上エラーチェック",
    nameInput: "テスト太郎",
    birthYear: "1997",
    birthMonth: "10",
    birthDay: "29",
    zip: "1460092",
    prefectureId: "13",
    address: "マイナビ区",
    phone: "08012345678",
    email: "kaihara.ryuju.mz@mynavi.jp",
    emailRe: "kaihara.ryuju.mz@mynavi.jp",
    schoolCategory: "2",
    schoolName: "マイナビ大学",
    courseName: "マイナビ学部・マイナビ学科名",
    entranceYear: "2000",
    entranceMonth: "10",
    freeTextItems11: "バレーボール",
    textareaItems15: "2019年マイナビ大会で優勝しました。",
    hopePlace: "希望勤務地",
    textareaItems10: "午後から練習があるので午前中だけの勤務がいいです。",
    qualification: "プログラミングスキル",
    hobby: "バレーは小学校からやってました。",
    qualification:
      "資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル資格・スキル",
    errorName: "qualification",
    expectedMessage: "資格・スキルは500文字以内で入力してください",
  },
];
module.exports = { testCases };
