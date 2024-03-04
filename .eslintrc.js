module.exports = {
  extends: ["eslint:recommended"],
  root: true,
  env: {
    browser: true,
    node: true,
  },
  parserOptions: {
    ecmaVersion: 2020,
  },
  rules: {
    "no-unused-vars": 0,
    "@typescript-eslint/no-unused-vars": 0,
  },
};
