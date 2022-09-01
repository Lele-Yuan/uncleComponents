module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "eslint:recommended",
        "plugin:vue/vue3-essential",
        "plugin:@typescript-eslint/recommended"
    ],
    "overrides": [
    ],
    "parser": "vue-eslint-parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        "parser": "@typescript-eslint/parser",
    },
    "plugins": [
        "vue",
        "@typescript-eslint"
    ],
    "rules": {
        'no-console': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'no-debugger': process.env.NODE_ENV === 'production' ? 'warn' : 'off',
        'semi': ['error', 'always'],
        '@typescript-eslint/semi': ['error', 'always'],
        'indent': ['warn', 4],
        'vue/html-indent': ['warn', 4],
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
        "vue/multi-word-component-names": 'off',
        "vue/no-multiple-template-root": 'off'
    }
};
