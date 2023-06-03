module.exports = {
  env: {
    browser: true,
    es2021: true,
    node: true,
  },
  extends: ['eslint:recommended', 'plugin:react/recommended', 'prettier'],
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
  },
  plugins: ['react'],
  rules: {
    //react 함수형 컴포넌트 정의 방식 화살표 함수
    'no-console': [
      'warn',
      {
        allow: ['warn', 'error'],
      },
    ],
    semi: ['error', 'always'],
  },
};
