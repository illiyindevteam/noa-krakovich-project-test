module.exports = {
  semi: false,
  tabWidth: 2,
  printWidth: 120,
  trailingComma: 'all',
  jsxSingleQuote: true,
  bracketSpacing: true,
  quoteProps: 'as-needed',
  singleQuote: true,
  plugins: ['prettier-plugin-tailwindcss'],
  tailwindFunctions: ['cn'],
  tailwindAttributes: ['className'],
  tailwindStylesheet: './src/styles/index.css',
};
