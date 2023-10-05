import assert from "assert";

import { recursiveJSONParse } from "../src/index";

const inputs = [
  '{"options":{"clientId":"ab","whiteLabel":"{\\"appName\\":\\"Sample App\\",\\"defaultLanguage\\":\\"de\\",\\"mode\\":\\"dark\\",\\"theme\\":{\\"primary\\":\\"#123456\\"},\\"useLogoLoader\\":true}","loginConfig":"{\\"google\\":{\\"clientId\\":\\"a\\",\\"mainOption\\":false,\\"showOnDesktop\\":true,\\"showOnMobile\\":true,\\"showOnModal\\":true,\\"typeOfLogin\\":\\"google\\",\\"verifier\\":\\"google-demo\\"}}","buildEnv":"testing"},"params":{"loginProvider":"google","redirectUrl":"a"},"actionType":"login"}',
  1,
  "100",
  BigInt(1),
  true,
  '{"a": true }',
  '{"a": 1 }',
  null,
  undefined,
  '{"a": null }',
  '{"a": [1] }',
  '[{"a":1},{"b":2,"c":[{"a":1}]}]',
  '{"a":"[{\\"a\\":1},{\\"b\\":2,\\"c\\":[{\\"a\\":1}]}]"}',
  '{"a": "true" }',
  '{"a": "1" }',
];

const outputs = [
  {
    options: {
      clientId: "ab",
      whiteLabel: {
        appName: "Sample App",
        defaultLanguage: "de",
        mode: "dark",
        theme: { primary: "#123456" },
        useLogoLoader: true,
      },
      loginConfig: {
        google: {
          clientId: "a",
          mainOption: false,
          showOnDesktop: true,
          showOnMobile: true,
          showOnModal: true,
          typeOfLogin: "google",
          verifier: "google-demo",
        },
      },
      buildEnv: "testing",
    },
    params: { loginProvider: "google", redirectUrl: "a" },
    actionType: "login",
  },
  1,
  "100",
  1n,
  true,
  { a: true },
  { a: 1 },
  null,
  undefined,
  { a: null },
  { a: [1] },
  [{ a: 1 }, { b: 2, c: [{ a: 1 }] }],
  {
    a: [{ a: 1 }, { b: 2, c: [{ a: 1 }] }],
  },
  { a: "true" },
  { a: "1" },
];

describe("JSON Parse", function () {
  inputs.forEach((str, index) => {
    it(`test case ${index}`, function () {
      const res = recursiveJSONParse(str);
      assert.deepStrictEqual(res, outputs[index]);
    });
  });
});
