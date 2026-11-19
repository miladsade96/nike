import js from "@eslint/js";
import globals from "globals";
import react from "eslint-plugin-react";
import hooks from "eslint-plugin-react-hooks";
export default [{ ignores: ["dist/**", "coverage/**", "storybook-static/**", "node_modules/**"] }, js.configs.recommended, {
 files: ["**/*.{js,jsx,mjs,cjs}"], languageOptions: { ecmaVersion: "latest", sourceType: "module", globals: { ...globals.browser, ...globals.node }, parserOptions: { ecmaFeatures: { jsx: true } } },
 plugins: { react, "react-hooks": hooks }, settings: { react: { version: "detect" } },
 rules: { ...react.configs.recommended.rules, ...react.configs["jsx-runtime"].rules, "react/prop-types": "off", "react-hooks/rules-of-hooks": "error", "react-hooks/exhaustive-deps": "error", "no-unused-vars": ["error", { argsIgnorePattern: "^_", varsIgnorePattern: "^_", caughtErrorsIgnorePattern: "^_" }] }
}];
