module.exports = {
    root: true,
    extends: ['@react-native-community', 'prettier'],
    plugins: ['@typescript-eslint', 'eslint-plugin-prettier', 'import'],
    parser: '@typescript-eslint/parser',
    overrides: [
        {
            files: ['*.ts', '*.tsx'],
            rules: {
                '@typescript-eslint/no-shadow': ['error'],
                'no-shadow': 'off',
                'no-undef': 'off',
                'prettier/prettier': ['error', {}],
                'max-len': ['error', { code: 200, ignoreUrls: true }],
                'linebreak-style': 0,
                '@typescript-eslint/no-use-before-define': ['error'],
                'no-use-before-define': 'off',
                'no-plusplus': ['error', { allowForLoopAfterthoughts: true }],
                'no-underscore-dangle': 0,
                'import/no-amd': 0,
                'import/no-dynamic-require': 0,
            },
        },
    ],
};
