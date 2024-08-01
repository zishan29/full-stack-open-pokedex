import globals from "globals";
import js from "@eslint/js";
import react from "eslint-plugin-react";

export default [
  {
    ignores: ["**/node_modules/**", "**/dist/**", "**/webpack.config.js"],
  },
  {
    files: ["**/*.{js,jsx}"],
    languageOptions: {
      ecmaVersion: 2022,
      sourceType: "module",
      parserOptions: {
        ecmaFeatures: {
          jsx: true,
        },
      },
      globals: {
        ...globals.browser,
        ...globals.node,
        ...globals.es2021,
        process: "readonly",
        require: "readonly",
        module: "readonly",
        jest: "readonly",
        describe: "readonly",
        it: "readonly",
        expect: "readonly",
      },
    },
    plugins: {
      react,
    },
    settings: {
      react: {
        version: "detect",
      },
    },
    rules: {
      ...js.configs.recommended.rules,
      ...react.configs.recommended.rules,
      "react/prop-types": "error",
      "no-unused-vars": ["error", { argsIgnorePattern: "^_" }],
      "no-prototype-builtins": "error",
      "no-cond-assign": ["error", "except-parens"],
      "getter-return": "error",
      "valid-typeof": "error",
      "no-fallthrough": "error",
      "no-control-regex": "error",
      "react/display-name": "error",
      "no-func-assign": "error",
      "no-unsafe-finally": "error",
      "no-console": "error",
      "no-trailing-spaces": "error",
      "object-curly-spacing": ["error", "always"],
      "arrow-spacing": ["error", { before: true, after: true }],
      "no-console": "error",
      "react/prop-types": 0,
    },
  },
];
