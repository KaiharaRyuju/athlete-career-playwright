const { testCases } = require("./testData.js");
const { chromium } = require("playwright");

(async () => {
  const edgePath =
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge";
  const browser = await chromium.launch({
    headless: false,
    executablePath: edgePath,
  });

  const context = await browser.newContext({
    httpCredentials: {
      username: "athlete",
      password: "uV4taCn9",
    },
  });

  const page = await context.newPage();

  for (const testCase of testCases) {
    console.log(`--------テスト開始: ${testCase.name}--------`);

    // await page.goto("https://athlete-career.mynavi.jp/register/");
    await page.goto("https://stg-athlete-career.mynavi.jp/register/");

    await page.fill('input[name="last_name"]', testCase.lastNameInput);
    await page.fill('input[name="first_name"]', testCase.firstNameInput);
    await page.fill('input[name="last_name_kana"]', testCase.lastNameKanaInput);
    await page.fill('input[name="first_name_kana"]', testCase.firstNameKanaInput);

    await page.selectOption('select[name="birth_year"]', testCase.birthYear);
    await page.selectOption('select[name="birth_month"]', testCase.birthMonth);
    await page.selectOption('select[name="birth_day"]', testCase.birthDay);
    await page.fill('input[name="zip"]', testCase.zip);
    await page.selectOption('select[name="prefecture"]', testCase.prefectureId);
    await page.fill('input[name="city"]', testCase.city);
    await page.fill('input[name="address"]', testCase.address);
    await page.fill('input[name="building"]', testCase.building);
    
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
    await page.selectOption('select[name="hope_place"]', testCase.hopePlace);
    await page.fill('textarea[name="hope_place_memo"]', testCase.hopePlaceMemo);
    await page.fill('textarea[name="other"]', testCase.other);
    await page.fill('textarea[name="qualification"]', testCase.qualification);
    await page.fill('textarea[name="hobby"]', testCase.hobby);
    await page.fill('textarea[name="skill"]', testCase.skill);

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
