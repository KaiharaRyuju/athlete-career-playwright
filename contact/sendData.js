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

  const testData = {
    graduation_year: "卒業済み",
    sport_name: "バレーボール",
    last_name: "test貝原",
    first_name: "龍樹",
    last_name_kana: "テスト",
    first_name_kana: "リュウジュ",
    birth_year: "1997",
    birth_month: "10",
    birth_day: "29",
  };

  console.log(`--------テスト登録開始--------`);

  // await page.goto("https://stg-athlete-career.mynavi.jp/contact/");
  await page.goto("http://localhost:3000/contact");

  await page.selectOption(
    'select[name="graduation_year"]',
    testData.graduation_year
  );

  await page.click("#js-btn-next");

  await page.fill('input[name="sport_name"]', testData.sport_name);

  await page.click("#js-btn-next");

  await page.fill('input[name="last_name"]', testData.last_name);
  await page.fill('input[name="first_name"]', testData.first_name);
  await page.fill('input[name="last_name_kana"]', testData.last_name_kana);
  await page.fill('input[name="first_name_kana"]', testData.first_name_kana);

  await page.selectOption('select[name="birth_year"]', testData.birth_year);
  await page.selectOption('select[name="birth_month"]', testData.birth_month);
  await page.selectOption('select[name="birth_day"]', testData.birth_day);

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
  await page.fill(
    'input[name="portable_email_re"]',
    "kaihara.ryuju.mz@mynavi.jp"
  );

  await page.click("#js-btn-next");

  await page.selectOption('select[name="infor_media"]', "1");

  let checkbox = "";

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

  await page.evaluate(() => {
    const button = document.querySelector("#js-btn-confirm");
    if (button) {
      button.disabled = false;
      button.click();
    }
  });

  await page.waitForURL(
    "https://stg-athlete-career.mynavi.jp/contact/confirm",
    {
      timeout: 60000,
    }
  );

  // await page.click("#js-btn-submit");

  console.log(`--------テスト登録終了--------`);
})();
