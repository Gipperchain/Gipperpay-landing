module.exports = {
    env: { browser: true, es2020: true },
    extends: [
        "eslint:recommended",
        "plugin:react/recommended",
        "plugin:react/jsx-runtime",
        "plugin:react-hooks/recommended",
    ],
    parserOptions: { ecmaVersion: "latest", sourceType: "module" },
    settings: { react: { version: "18.2" } },
    plugins: ["react-refresh"],
    rules: {
        "no-unused-vars": "warn",
        "no-undef": "error",
        "react-refresh/only-export-components": "warn",
        "no-use-before-define": "error",
        "react/prop-types": "off",
    },
};
