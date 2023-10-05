# json-stable-parse

![Build Status](https://github.com/chaitanyapotti/json-stable-parse/actions/workflows/master.yml/badge.svg)

[![npm downloads](https://img.shields.io/npm/dm/json-stable-parse.svg?style=flat-square)](https://www.npmjs.com/package/json-stable-parse)

[![NPM](https://nodei.co/npm/json-stable-parse.png)](https://www.npmjs.com/package/json-stable-parse)

## Introduction

This repo allow you to parse json data recursively

## Features

- Typescript compatible. Includes Type definitions

## Installation

### Bundling

This module is distributed in 3 formats

- `ems` build `dist/jsonParse.esm.js` in es5 format
- `commonjs` build `dist/jsonParse.cjs.js` in es5 format with problematic packages bundled (benfits non-webpack users)
- `umd` build `dist/jsonParse.umd.min.js` in es5 format without polyfilling corejs minified

By default, the appropriate format is used for your specified usecase
You can use a different format (if you know what you're doing) by referencing the correct file

The cjs build is not polyfilled with core-js.
It is upto the user to polyfill based on the browserlist they target

### Directly in Browser

CDN's serve the non-core-js polyfilled version by default. You can use a different

jsdeliver

```js
<script src="https://cdn.jsdelivr.net/npm/json-stable-parse"></script>
```

unpkg

```js
<script src="https://unpkg.com/json-stable-parse"></script>
```

## Usage

Add [`json-stable-parse`](https://www.npmjs.com/package/json-stable-parse) to your project:

To allow your web app to retrieve keys:

Install the package
`npm i json-stable-parse`
or
`yarn add json-stable-parse`

## Requirements

- This package requires a peer dependency of `@babel/runtime`
- Node 18+
