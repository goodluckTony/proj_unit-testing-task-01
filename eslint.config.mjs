import globals from "globals";
import pluginJs from "@eslint/js";

export default [
  {
    languageOptions: {
      globals: globals.node,
      parserOptions: {
        sourceType: "module",
        ecmaVersion: 2021,
      },
    },
    plugins: ['import'],
  },
  pluginJs.configs.recommended,
];
