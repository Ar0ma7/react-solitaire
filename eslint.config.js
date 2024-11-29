import js from '@eslint/js';
import globals from 'globals';
import reactHooks from 'eslint-plugin-react-hooks';
import reactRefresh from 'eslint-plugin-react-refresh';
import tseslint from 'typescript-eslint';
import importPlugin from 'eslint-plugin-import';
import unusedImports from 'eslint-plugin-unused-imports';
import typescriptEslintParser from '@typescript-eslint/parser';
import eslintConfigPrettier from 'eslint-config-prettier';
import react from 'eslint-plugin-react';

export default tseslint.config(
	{ ignores: ['dist'] },
	{
		extends: [
			js.configs.recommended,
			...tseslint.configs.recommended,
			react.configs.flat.recommended,
			react.configs.flat['jsx-runtime']
		],
		files: ['**/*.{ts,tsx}'],
		languageOptions: {
			...react.configs.flat.recommended.languageOptions,
			ecmaVersion: 2020,
			globals: globals.browser,
			parser: typescriptEslintParser
		},
		plugins: {
			'react-hooks': reactHooks,
			'react-refresh': reactRefresh,
			import: importPlugin,
			'unused-imports': unusedImports,
			react
		},
		rules: {
			'no-mixed-spaces-and-tabs': ['error', 'smart-tabs'],
			'no-console': 'error',
			'react/prop-types': 'off',
			'react/no-unknown-property': ['error', { ignore: ['css'] }],
			...reactHooks.configs.recommended.rules,
			'react-hooks/exhaustive-deps': [
				'warn',
				{ enableDangerousAutofixThisMayCauseInfiniteLoops: true }
			],
			'react-refresh/only-export-components': ['warn', { allowConstantExport: true }],
			'import/no-duplicates': ['error'],
			'import/no-namespace': ['error'],
			'import/order': [
				'error',
				{
					alphabetize: { order: 'asc' },
					'newlines-between': 'never'
				}
			],
			'unused-imports/no-unused-imports': 'error',
			'unused-imports/no-unused-vars': [
				'warn',
				{
					vars: 'all',
					varsIgnorePattern: '^_',
					args: 'after-used',
					argsIgnorePattern: '^_'
				}
			]
		}
	},
	eslintConfigPrettier
);
