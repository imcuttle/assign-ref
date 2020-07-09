# assign-ref

[![Build status](https://img.shields.io/travis/imcuttle/assign-ref/master.svg?style=flat-square)](https://travis-ci.org/imcuttle/assign-ref)
[![Test coverage](https://img.shields.io/codecov/c/github/imcuttle/assign-ref.svg?style=flat-square)](https://codecov.io/github/imcuttle/assign-ref?branch=master)
[![NPM version](https://img.shields.io/npm/v/assign-ref.svg?style=flat-square)](https://www.npmjs.com/package/assign-ref)
[![NPM Downloads](https://img.shields.io/npm/dm/assign-ref.svg?style=flat-square&maxAge=43200)](https://www.npmjs.com/package/assign-ref)
[![Prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://prettier.io/)
[![Conventional Commits](https://img.shields.io/badge/Conventional%20Commits-1.0.0-yellow.svg?style=flat-square)](https://conventionalcommits.org)

> assign ref for React ref

## Installation

```bash
npm install assign-ref
# or use yarn
yarn add assign-ref
```

## Usage

```jsx
import assignRef from 'assign-ref'
const aref = React.createRef()
const bref = React.createRef()

<Button ref={ref => {
    assignRef(aref, ref)
    assignRef(bref, ref)
}}></Button>
```

## Contributing

- Fork it!
- Create your new branch:  
  `git checkout -b feature-new` or `git checkout -b fix-which-bug`
- Start your magic work now
- Make sure npm test passes
- Commit your changes:  
  `git commit -am 'feat: some description (close #123)'` or `git commit -am 'fix: some description (fix #123)'`
- Push to the branch: `git push`
- Submit a pull request :)

## Authors

This library is written and maintained by imcuttle, <a href="mailto:moyuyc95@gmail.com">moyuyc95@gmail.com</a>.

## License

MIT - [imcuttle](https://github.com/imcuttle) 🐟
