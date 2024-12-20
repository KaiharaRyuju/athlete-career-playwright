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
        zip: "1460092",
        prefecture: "1",
        city: "テスト市",
        address: "テスト町",
        building: "テストビル",
        portable_tel: "09012345678",
        portable_email: "kaihara.ryuju.mz@mynavi.jp",
        portable_email_re: "kaihara.ryuju.mz@mynavi.jp",
        educations_school_category_id: "1",
        educations_school: "1",
        educations_course: "テスト学部",
        educations_entrance_date_y: "2020",
        educations_entrance_date_m: "4",
        sport_name: "テスト競技",
        score: "テスト成績",
        hope_place: "1",
        hope_place_memo: "テスト希望場所",
        other: "テストその他",
        qualification: "テスト資格",
        hobby: "テスト趣味",
        skill: "テスト特技",
    }

    // await page.goto("https://athlete-career.mynavi.jp/register/");
    await page.goto("http://localhost:3000/register/");

    await page.fill('input[name="last_name"]', testData.last_name);
    await page.fill('input[name="first_name"]', testData.first_name);
    await page.fill('input[name="last_name_kana"]', testData.last_name_kana);
    await page.fill('input[name="first_name_kana"]', testData.first_name_kana);

    await page.selectOption('select[name="birth_year"]', testData.birth_year);
    await page.selectOption('select[name="birth_month"]', testData.birth_month);
    await page.selectOption('select[name="birth_day"]', testData.birth_day);
    await page.fill('input[name="zip"]', testData.zip);
    await page.selectOption('select[name="prefecture"]', testData.prefecture);
    await page.fill('input[name="city"]', testData.city);
    await page.fill('input[name="address"]', testData.address);
    await page.fill('input[name="building"]', testData.building);
    
    await page.fill('input[name="portable_tel"]', testData.portable_tel);
    await page.fill('input[name="portable_email"]', testData.portable_email);
    await page.fill('input[name="portable_email_re"]', testData.portable_email_re);
    await page.selectOption(
      'select[name="educations_school_category_id"]',
      testData.educations_school_category_id
    );
    await page.fill('input[name="educations_school"]', testData.educations_school);
    await page.fill('input[name="educations_course"]', testData.educations_course);
    await page.selectOption(
      'select[name="educations_entrance_date_y"]',
      testData.educations_entrance_date_y
    );
    await page.selectOption(
      'select[name="educations_entrance_date_m"]',
      testData.educations_entrance_date_m
    );

    await page.fill('input[name="sport_name"]', testData.sport_name);
    await page.fill('textarea[name="score"]', testData.score);
    await page.selectOption('select[name="hope_place"]', testData.hope_place);
    await page.fill('textarea[name="hope_place_memo"]', testData.hope_place_memo);
    await page.fill('textarea[name="other"]', testData.other);
    await page.fill('textarea[name="qualification"]', testData.qualification);
    await page.fill('textarea[name="hobby"]', testData.hobby);
    await page.fill('textarea[name="skill"]', testData.skill);

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

    await page.click("#js-btn-confirm");

    console.log(`--------テスト登録終了--------`);

})();
