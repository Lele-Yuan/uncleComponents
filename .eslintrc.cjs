/* eslint-disable */
module.exports = {
    env: {
        browser: true,
        es2021: true,
        node: true
    },
    extends: [
        'plugin:vue/vue3-essential',
        '@vue/standard'
    ],
    parserOptions: {
        ecmaVersion: "latest",
        parser: "@typescript-eslint/parser",
        sourceType: "module"
    },
    plugins: [
        "vue",
        "@typescript-eslint"
    ],
    rules: {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        'indent': ['warn', 4],
        '@typescript-eslint/indent': ['error', 4],
        '@typescript-eslint/no-namespace': 'off',
        'no-empty-function': 'off',
        '@typescript-eslint/no-empty-function': ['off'],
        '@typescript-eslint/no-var-requires': 0,
        'no-useless-escape': 'off',
        'space-before-function-paren': 'off',
        'quote-props': 'warn',
        'require-direct-export': 'off',
        'vue/require-direct-export': 'off',
        'no-eval': 'off',
        "vue/multi-word-component-names": 'off'
    }
};