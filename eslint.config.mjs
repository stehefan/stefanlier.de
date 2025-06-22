import { fixupConfigRules } from '@eslint/compat';
import { FlatCompat } from '@eslint/eslintrc';
import eslint from '@eslint/js';
import stylistic from '@stylistic/eslint-plugin';
import react from 'eslint-plugin-react';
import reactHooks from 'eslint-plugin-react-hooks';
import simpleImportSort from 'eslint-plugin-simple-import-sort';
import tseslint from 'typescript-eslint';

const compat = new FlatCompat();
export default tseslint.config(
    eslint.configs.recommended,
    ...tseslint.configs.recommended,
    {
        plugins: {
            'simple-import-sort': simpleImportSort,
            'react': react,
            'react-hooks': reactHooks,
        },
        rules: {
            'simple-import-sort/imports': 'error',
            'simple-import-sort/exports': 'error',
            'react/react-in-jsx-scope': 'off',
            'react/prop-types': 'off',
        },
    },
    stylistic.configs.customize({
        indent: 4,
        semi: true,
    }),
    ...fixupConfigRules(
        compat.extends('plugin:@next/next/recommended'),
        compat.extends('plugin:@next/next/core-web-vitals'),
    ),
);
