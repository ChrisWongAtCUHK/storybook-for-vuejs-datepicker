module.exports = {
  extends: [
    'eslint:recommended',
    'plugin:vue/recommended',
    '@vue/standard'
  ],
  rules: {
    'vue/no-unused-vars': 'error'
  },
  parserOptions: {
    parser: 'babel-eslint',
    ecmaVersion: 2017,
    sourceType: 'module'
  }
}
