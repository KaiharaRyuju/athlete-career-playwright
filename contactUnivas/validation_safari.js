const { testCases } = require("./testData.js");
const { webkit } = require("playwright");

(async () => {
  const browser = await webkit.launch({
    headless: false,
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

    // await page.goto("https://stg-athlete-career.mynavi.jp/contact_univas/", {
    //   timeout: 60000,
    // });

    await page.goto("http://localhost:3000/contact_univas/", {
      timeout: 60000,
    });

    await page.fill('input[name="last_name"]', testCase.lastNameInput);
    await page.fill('input[name="first_name"]', testCase.firstNameInput);
    await page.fill('input[name="last_name_kana"]', testCase.lastNameKanaInput);
    await page.fill('input[name="first_name_kana"]', testCase.firstNameKanaInput);

    await page.selectOption('select[name="birth_year"]', testCase.birthYear);
    await page.selectOption('select[name="birth_month"]', testCase.birthMonth);
    await page.selectOption('select[name="birth_day"]', testCase.birthDay);

    await page.fill('input[name="portable_tel"]', testCase.phone);
    await page.fill('input[name="portable_email"]', testCase.email);
    await page.fill('input[name="portable_email_re"]', testCase.emailRe);

    await page.fill(
      'input[name="educations_school"]',
      testCase.educations_school
    );

    await page.fill('input[name="sport_name"]', testCase.sport_name);

    await page.selectOption(
      'select[name="graduation_year"]',
      testCase.graduation_year
    );

    await page.fill('textarea[name="memo"]', testCase.memo);

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

    if (testCase.sex_id.length > 0) {
      await page.evaluate(() => {
        const radioButtonValue = "1";
        const radioButtons = document.querySelectorAll(
          'input[name="sex_id"][type="radio"]'
        );

        radioButtons.forEach((radio) => {
          if (radio.value === radioButtonValue) {
            radio.checked = true;
            radio.dispatchEvent(new Event("change", { bubbles: true }));
          }
        });
      });
    } else {
      await page.evaluate(() => {
        const radioButtonValue = "";
        const radioButtons = document.querySelectorAll(
          'input[name="sex_id"][type="radio"]'
        );

        radioButtons.forEach((radio) => {
          if (radio.value === radioButtonValue) {
            radio.checked = true;
            radio.dispatchEvent(new Event("change", { bubbles: true }));
          }
        });
      });
    }

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
