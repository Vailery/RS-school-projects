module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        "node": true
    },
    "extends": [
        "airbnb-base"
    ],
    "parserOptions": {
        "ecmaVersion": 12,
        "sourceType": "module"
    },
    "rules": {
        "import/prefer-default-export": "off",
        "no-param-reassign": [2, { "props": false }],
        "prefer-destructuring": ["error", { "object": true, "array": false }],
        "no-unused-expressions": [2, { "allowTernary": true }],
        "no-plusplus": "off",
        "default-case": "off",
        "class-methods-use-this": "off",
        "no-multi-assign": "off"
    }
};