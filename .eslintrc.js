module.exports = {
    root: true,
    env: {
        node: true
    },
    extends: [
        "plugin:vue/essential",
        "eslint:recommended",
        "@vue/prettier"
    ],
    parserOptions: {
        parser: "babel-eslint"
    },
    rules: {
        'space-before-function-paren': 0,
        'no-console': 0,
        'arrow-parens': 0,
        'eqeqeq': [2, 'always'], // 要求使用 === 和 !==
        'semi': [2, 'never'], // 要求或禁止使用分号代替 ASI
        'quotes': [2, 'single']  // 强制使用一致的反勾号、双引号或单引号
    }
};
