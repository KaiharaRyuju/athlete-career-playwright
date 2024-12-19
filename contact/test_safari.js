const { testCasesStep1, testCasesStep2, testCasesStep3, testCasesStep4, testCasesStep5 } = require("./testData");
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

  for (const testCase of testCasesStep1) {
    console.log(`--------テスト開始: ${testCase.name}--------`);

    // await page.goto("https://athlete-career.mynavi.jp/contact/");
    await page.goto("http://localhost:3000/contact");

    await page.selectOption(
        'select[name="graduation_year"]',
        testCase.graduationYear
    );

    await page.click("#js-btn-next");

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

  for (const testCase of testCasesStep2) {
    console.log(`--------テスト開始: ${testCase.name}--------`);

    // await page.goto("https://athlete-career.mynavi.jp/contact/");
    await page.goto("http://localhost:3000/contact");

    await page.selectOption(
        'select[name="graduation_year"]',
        "卒業済み"
    );

    await page.click("#js-btn-next");

    await page.fill('input[name="sport_name"]', testCase.sportName);

    await page.click("#js-btn-next");


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

  for (const testCase of testCasesStep3) {
    console.log(`--------テスト開始: ${testCase.name}--------`);

    // await page.goto("https://athlete-career.mynavi.jp/contact/");
    await page.goto("http://localhost:3000/contact");

    await page.selectOption(
        'select[name="graduation_year"]',
        "卒業済み"
    );

    await page.click("#js-btn-next");

    await page.fill('input[name="sport_name"]', "バレーボール");

    await page.click("#js-btn-next");

    await page.fill('input[name="last_name"]', testCase.lastNameInput);
    await page.fill('input[name="first_name"]', testCase.firstNameInput);
    await page.fill('input[name="last_name_kana"]', testCase.lastNameKanaInput);
    await page.fill('input[name="first_name_kana"]', testCase.firstNameKanaInput);

    await page.selectOption('select[name="birth_year"]', testCase.birthYear);
    await page.selectOption('select[name="birth_month"]', testCase.birthMonth);
    await page.selectOption('select[name="birth_day"]', testCase.birthDay);

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

    await page.click("#js-btn-next");

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

  for (const testCase of testCasesStep4) {
    console.log(`--------テスト開始: ${testCase.name}--------`);

    // await page.goto("https://athlete-career.mynavi.jp/contact/");
    await page.goto("http://localhost:3000/contact");

    await page.selectOption(
        'select[name="graduation_year"]',
        "卒業済み"
    );

    await page.click("#js-btn-next");

    await page.fill('input[name="sport_name"]', "バレーボール");

    await page.click("#js-btn-next");

    await page.fill('input[name="last_name"]', "テスト");
    await page.fill('input[name="first_name"]', "テスト");
    await page.fill('input[name="last_name_kana"]', "テスト");
    await page.fill('input[name="first_name_kana"]', "テスト");

    await page.selectOption('select[name="birth_year"]', "1997");
    await page.selectOption('select[name="birth_month"]', "10");
    await page.selectOption('select[name="birth_day"]', "29");

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

    await page.click("#js-btn-next");

    await page.fill('input[name="portable_tel"]', testCase.phone);
    await page.fill('input[name="portable_email"]', testCase.email);
    await page.fill('input[name="portable_email_re"]', testCase.emailRe);

    await page.click("#js-btn-next");


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

  for (const testCase of testCasesStep5) {
    console.log(`--------テスト開始: ${testCase.name}--------`);

    // await page.goto("https://athlete-career.mynavi.jp/contact/");
    await page.goto("http://localhost:3000/contact");

    await page.selectOption(
        'select[name="graduation_year"]',
        "卒業済み"
    );

    await page.click("#js-btn-next");

    await page.fill('input[name="sport_name"]', "バレーボール");

    await page.click("#js-btn-next");

    await page.fill('input[name="last_name"]', "テスト");
    await page.fill('input[name="first_name"]', "テスト");
    await page.fill('input[name="last_name_kana"]', "テスト");
    await page.fill('input[name="first_name_kana"]', "テスト");

    await page.selectOption('select[name="birth_year"]', "1997");
    await page.selectOption('select[name="birth_month"]', "10");
    await page.selectOption('select[name="birth_day"]', "29");

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

    await page.click("#js-btn-next");

    await page.fill('input[name="portable_tel"]', "09012345678");
    await page.fill('input[name="portable_email"]', "kaihara.ryuju.mz@mynavi.jp");
    await page.fill('input[name="portable_email_re"]', "kaihara.ryuju.mz@mynavi.jp");

    await page.click("#js-btn-next");

    await page.selectOption(
      'select[name="infor_media"]',
      testCase.inforMedia
    );

    let checkbox = ""

    await page.evaluate(() => {
      checkbox = document.querySelector("#agree");
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
      const button = document.querySelector("#js-btn-confirm");
      if (button) {
        button.disabled = false;
        button.click();
      }
    });

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
