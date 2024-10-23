const { testCases } = require("./testDataProd.js");
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

  for (const testCase of testCases) {
    console.log(`--------テスト開始: ${testCase.name}--------`);

    await page.goto("https://athlete-career.mynavi.jp/register/");

    await page.fill('input[name="name"]', testCase.nameInput);
    await page.selectOption('select[name="birth_year"]', testCase.birthYear);
    await page.selectOption('select[name="birth_month"]', testCase.birthMonth);
    await page.selectOption('select[name="birth_day"]', testCase.birthDay);
    await page.fill('input[name="zip"]', testCase.zip);
    await page.selectOption(
      'select[name="prefecture_id"]',
      testCase.prefectureId
    );
    await page.fill('input[name="address"]', testCase.address);
    await page.fill('input[name="portable_tel"]', testCase.phone);
    await page.fill('input[name="portable_email"]', testCase.email);
    await page.fill('input[name="portable_email_re"]', testCase.emailRe);
    await page.selectOption(
      'select[name="educations-school_category_id-0"]',
      testCase.schoolCategory
    );
    await page.fill('input[name="educations-school-0"]', testCase.schoolName);
    await page.fill('input[name="educations-course-0"]', testCase.courseName);
    await page.selectOption(
      'select[name="educations-entrance_date_y-0"]',
      testCase.entranceYear
    );
    await page.selectOption(
      'select[name="educations-entrance_date_m-0"]',
      testCase.entranceMonth
    );
    await page.fill(
      'input[name="free_text_items_11"]',
      testCase.freeTextItems11
    );
    await page.fill(
      'textarea[name="free_textarea_items_15"]',
      testCase.textareaItems15
    );
    await page.fill('input[name="hope_place"]', testCase.hopePlace);
    await page.fill(
      'textarea[name="free_text_items_10"]',
      testCase.textareaItems10
    );
    await page.fill('textarea[name="qualification"]', testCase.qualification);
    await page.fill(
      'textarea[name="free_textarea_items_92"]',
      testCase.textareaItems92
    );

    const errorMessage = await page.textContent(".error-message");

    await page.click("#js-btn-confirm");

    const errorVisible = await page.isVisible(
      `div.error-message.is-show[data-error="${testCase.errorName}"]`
    );

    if (errorVisible) {
      const errorMessage = await page.textContent(
        `div.error-message.is-show[data-error=${testCase.errorName}] p.u-fz-xs-12rem.u-color-red-d`
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

    console.log(`テスト完了: ${errorMessage}`);
  }

  await browser.close();
})();
