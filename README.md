# template-chrome-extension

[![Build][build]][build-badge]
[![Coverage][codecov-shield]][codecov]

> Template for developing Chrome extensions with Svelte.

This project provides a boilerplate for developing Chrome extensions using [Svelte 3](https://svelte.dev).

## Available Scripts

### `yarn develop`

Runs the app in development mode with livereload enabled. Visit `http://localhost:1234` to view the app.

### `yarn build`

Builds the app in production mode.

## Configuration

To configure the template, modify the `outDir` and `port` values in the [package.json](package.json) "extension" field.

```json
"extension": {
  "outDir": "dist",
  "port": 1234
}
```

## Linting, formatting and committing

To ensure that committed code follows conventions, this project uses `prettier`, `tslint` and git hooks (via `husky`) to automate the linting and formatting of code and commit messages.

## License

[MIT](LICENSE)

[build]: https://travis-ci.com/metonym/template-chrome-extension.svg?branch=master
[build-badge]: https://travis-ci.com/metonym/template-chrome-extension
[codecov]: https://codecov.io/gh/metonym/template-chrome-extension
[codecov-shield]: https://img.shields.io/codecov/c/github/metonym/template-chrome-extension.svg
