# Landing Page Template

A template for creating preact apps with vite

## Dependencies

-   [@preact/signals](https://ghub.io/@preact/signals): Manage state with style in Preact
-   [base64-js](https://ghub.io/base64-js): Base64 encoding/decoding in pure JS
-   [crypto-js](https://ghub.io/crypto-js): JavaScript library of crypto standards.
-   [framer-motion](https://ghub.io/framer-motion): A simple and powerful JavaScript animation library
-   [million](https://ghub.io/million): Make React Faster. Automatically.
-   [pako](https://ghub.io/pako): zlib port to javascript - fast, modularized, with browser support
-   [preact](https://ghub.io/preact): Fast 3kb React-compatible Virtual DOM library.
-   [preact-i18n](https://ghub.io/preact-i18n): Preact internationalization, done simply.
-   [preact-router](https://ghub.io/preact-router): Connect your components up to that address bar.
-   [react-icons](https://ghub.io/react-icons): SVG React icons of popular icon packs using ES6 imports
-   [react-if](https://ghub.io/react-if): 🌗 Render React components conditionally
-   [store2](https://ghub.io/store2): Better localStorage

## Dev Dependencies

-   [@commitlint/cli](https://ghub.io/@commitlint/cli): Lint your commit messages
-   [@commitlint/config-conventional](https://ghub.io/@commitlint/config-conventional): Shareable commitlint config enforcing conventional commits
-   [@preact/preset-vite](https://ghub.io/@preact/preset-vite): Preact preset for the vite bundler
-   [@types/crypto-js](https://ghub.io/@types/crypto-js): TypeScript definitions for crypto-js
-   [@types/node](https://ghub.io/@types/node): TypeScript definitions for node
-   [@types/pako](https://ghub.io/@types/pako): TypeScript definitions for pako
-   [@types/preact-i18n](https://ghub.io/@types/preact-i18n): TypeScript definitions for preact-i18n
-   [@typescript-eslint/eslint-plugin](https://ghub.io/@typescript-eslint/eslint-plugin): TypeScript plugin for ESLint
-   [@typescript-eslint/parser](https://ghub.io/@typescript-eslint/parser): An ESLint custom parser which leverages TypeScript ESTree
-   [autoprefixer](https://ghub.io/autoprefixer): Parse CSS and add vendor prefixes to CSS rules using values from the Can I Use website
-   [eslint](https://ghub.io/eslint): An AST-based pattern checker for JavaScript.
-   [eslint-config-prettier](https://ghub.io/eslint-config-prettier): Turns off all rules that are unnecessary or might conflict with Prettier.
-   [eslint-import-resolver-alias](https://ghub.io/eslint-import-resolver-alias): a simple Node behavior import resolution plugin for eslint-plugin-import, supporting module alias.
-   [eslint-import-resolver-typescript](https://ghub.io/eslint-import-resolver-typescript): This plugin adds `TypeScript` support to `eslint-plugin-import`
-   [eslint-plugin-import](https://ghub.io/eslint-plugin-import): Import with sanity.
-   [eslint-plugin-jsx-a11y](https://ghub.io/eslint-plugin-jsx-a11y): Static AST checker for accessibility rules on JSX elements.
-   [eslint-plugin-prettier](https://ghub.io/eslint-plugin-prettier): Runs prettier as an eslint rule
-   [eslint-plugin-react](https://ghub.io/eslint-plugin-react): React specific linting rules for ESLint
-   [eslint-plugin-react-hooks](https://ghub.io/eslint-plugin-react-hooks): ESLint rules for React Hooks
-   [eslint-plugin-simple-import-sort](https://ghub.io/eslint-plugin-simple-import-sort): Easy autofixable import sorting
-   [eslint-plugin-unused-imports](https://ghub.io/eslint-plugin-unused-imports): Report and remove unused es6 modules
-   [eslint-plugin-tailwindcss](https://ghub.io/eslint-plugin-tailwindcss): Rules enforcing best practices while using Tailwind CSS
-   [husky](https://ghub.io/husky): Modern native Git hooks
-   [lint-staged](https://ghub.io/lint-staged): Lint files staged by git
-   [postcss](https://ghub.io/postcss): Tool for transforming styles with JS plugins
-   [postcss-nesting](https://ghub.io/postcss-nesting): Nest rules inside each other in CSS
-   [prettier](https://ghub.io/prettier): Prettier is an opinionated code formatter
-   [tailwindcss](https://ghub.io/tailwindcss): A utility-first CSS framework for rapidly building custom user interfaces.
-   [typescript](https://ghub.io/typescript): TypeScript is a language for application scale JavaScript development
-   [vite](https://ghub.io/vite): Native-ESM powered web dev build tool

## License

MIT License

## Run Locally

Clone the project

```bash
  git clone https://github.com/DeadBryam/landing-page-template.git
```

Go to the project directory

```bash
  cd landing-page-template
```

Install dependencies

```bash
  pnpm install
```

Start the server

```bash
  pnpm dev
```

## Deployment

To deploy this project run

```
  Use your favorite hosting service, I recommend Vercel
```

## Environment Variables

If you need to use environment variables, create a `.env` file in the root of the project and add the variables there.

For example:

```env
VITE_API_URL=https://api.example.com
```

Use the variables in your code like this:

```javascript
const apiUrl = import.meta.env.VITE_API_URL;
```
