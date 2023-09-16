module.exports = {
	singleQuote: false,
	jsxSingleQuote: false,
	printWidth: 120,
	semi: true,
	trailingComma: "none",
	plugins: [require.resolve("prettier-plugin-sql")],
	overrides: [
		{
			files: "*.code-workspace",
			options: {
				parser: "json"
			}
		}
	]
};
