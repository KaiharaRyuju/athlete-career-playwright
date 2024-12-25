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

    console.log(`--------テスト登録開始--------`);

    const testData = {
        last_name: "test貝原",
        first_name: "龍樹",
        last_name_kana: "テスト",
        first_name_kana: "リュウジュ",
        birth_year: "1997",
        birth_month: "10",
        birth_day: "29",
        portable_tel: "09012345678",
        portable_email: "kaihara.ryuju.mz@mynavi.jp",
        portable_email_re: "kaihara.ryuju.mz@mynavi.jp",
        educations_school: "1",
        sport_name: "テスト競技",
        graduation_year: "卒業済み",
        memo: "テストメモ",
    }

    // await page.goto("https://stg-athlete-career.mynavi.jp/careerschool-app-contact/", {
    //   timeout: 60000,
    // });

    await page.goto("http://localhost:3000/careerschool-app-contact/", {
        timeout: 60000,
    });

    await page.fill('input[name="last_name"]', testData.last_name);
    await page.fill('input[name="first_name"]', testData.first_name);
    await page.fill('input[name="last_name_kana"]', testData.last_name_kana);
    await page.fill('input[name="first_name_kana"]', testData.first_name_kana);
    await page.selectOption('select[name="birth_year"]', testData.birth_year);
    await page.selectOption('select[name="birth_month"]', testData.birth_month);
    await page.selectOption('select[name="birth_day"]', testData.birth_day);

    await page.fill('input[name="portable_tel"]', testData.portable_tel);
    await page.fill('input[name="portable_email"]', testData.portable_email);
    await page.fill('input[name="portable_email_re"]', testData.portable_email_re);
    await page.fill(
      'input[name="educations_school"]',
      testData.educations_school
    );

    await page.fill('input[name="sport_name"]', testData.sport_name);

    await page.selectOption(
      'select[name="graduation_year"]',
      testData.graduation_year
    );

    await page.fill('textarea[name="memo"]', testData.memo);

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

    await page.click("#js-btn-confirm");

    // await page.click("#js-btn-confirm");

    console.log(`--------テスト登録終了--------`);

})();
