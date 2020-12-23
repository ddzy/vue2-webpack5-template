module.exports = {
	parser: 'vue-eslint-parser', // 解析 .vue 文件
	parserOptions: {
		parser: '@typescript-eslint/parser', // 解析 .vue 文件里面的 script 标签
	},
	plugins: ['@typescript-eslint'],
	extends: [
		'plugin:vue/recommended',
		'plugin:prettier/recommended',
		'prettier/@typescript-eslint',
		'plugin:@typescript-eslint/recommended',
	],
	rules: {
		'@typescript-eslint/no-extra-semi': ['error'],
		'@typescript-eslint/semi': ['error'],
		'@typescript-eslint/no-empty-interface': 0,
	},
};
