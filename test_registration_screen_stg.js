const { chromium } = require("playwright");

(async () => {
  const browser = await chromium.launch({ headless: false });

  const context = await browser.newContext({
    httpCredentials: {
      username: "athlete",
      password: "uV4taCn9",
    },
  });

  const page = await context.newPage();

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

  for (const testCase of testCases) {
    console.log(`--------テスト開始: ${testCase.name}--------`);

    await page.goto("https://stg-athlete-career.mynavi.jp/register/");

    await page.fill('input[name="name"]', testCase.nameInput);
    await page.selectOption('select[name="birth_year"]', testCase.birthYear);
    await page.selectOption('select[name="birth_month"]', testCase.birthMonth);
    await page.selectOption('select[name="birth_day"]', testCase.birthDay);
    await page.fill('input[name="zip"]', testCase.zip);
    await page.selectOption('select[name="prefecture"]', testCase.prefectureId);
    await page.fill('input[name="address"]', testCase.address);
    await page.fill('input[name="portable_tel"]', testCase.phone);
    await page.fill('input[name="portable_email"]', testCase.email);
    await page.fill('input[name="portable_email_re"]', testCase.emailRe);
    await page.selectOption(
      'select[name="educations_school_category_id"]',
      testCase.schoolCategory
    );
    await page.fill('input[name="educations_school"]', testCase.schoolName);
    await page.fill('input[name="educations_course"]', testCase.courseName);
    await page.selectOption(
      'select[name="educations_entrance_date_y"]',
      testCase.entranceYear
    );
    await page.selectOption(
      'select[name="educations_entrance_date_m"]',
      testCase.entranceMonth
    );

    await page.fill('input[name="sport_name"]', testCase.freeTextItems11);
    await page.fill('textarea[name="score"]', testCase.textareaItems15);
    await page.fill('input[name="hope_place"]', testCase.hopePlace);
    await page.fill('textarea[name="other"]', testCase.textareaItems10);
    await page.fill('textarea[name="qualification"]', testCase.qualification);
    await page.fill('textarea[name="hobby"]', testCase.hobby);

    await page.evaluate(() => {
      const checkbox = document.querySelector("#agree");
      if (checkbox) {
        checkbox.checked = true;

        const vueInstance = checkbox.__vue__;
        if (vueInstance && vueInstance.$data) {
          vueInstance.$data.formValue.agree = "1";
        }

        checkbox.dispatchEvent(new Event("change", { bubbles: true }));
      }
    });

    await page.evaluate(() => {
      const radioButtonValue = "0";
      const radioButtons = document.querySelectorAll(
        '#educations_status input[type="radio"]'
      );

      radioButtons.forEach((radio) => {
        if (radio.value === radioButtonValue) {
          radio.checked = true;
          radio.dispatchEvent(new Event("change", { bubbles: true }));
        }
      });
    });

    await page.click("#js-btn-confirm");

    const errorVisible = await page.isVisible(
      `p.error-msg.icon-alert.error-message.is-error.is-show[data-error=${testCase.errorName}]`
    );

    if (errorVisible) {
      const errorMessage = await page.textContent(
        "p.error-message.is-error.is-show"
      );
      console.log("エラーメッセージが表示されています: ", errorMessage);

      const expectedMessage = testCase.expectedMessage;
      if (errorMessage.trim() === expectedMessage) {
        console.log(
          "\x1b[34m%s\x1b[0m",
          "エラーメッセージが正しく出力されています"
        );
      } else {
        console.log(
          "\x1b[31m%s\x1b[0m",
          `エラーメッセージが異なります。期待: "${expectedMessage}", 実際: "${errorMessage}"`
        );
      }
    } else {
      console.log(
        "\x1b[31m%s\x1b[0m",
        `エラーメッセージは表示されていません。テストケース：${testCase.name}`
      );
    }
  }

  await browser.close();
})();
