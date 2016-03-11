# Strict version

**Strictly enforce node version**

[![Circle CI](https://circleci.com/gh/kirkstrobeck/strict-version.svg?style=svg)](https://circleci.com/gh/kirkstrobeck/strict-version)

### Usage

```bash
npm install strict-version
```

Add `require('strict-version');` to the start of your project.

Make sure you add the [node version](https://docs.npmjs.com/files/package.json#engines) to your `package.json`

```json
{
  "engine-strict": true,
  "engines": {
    "node": "v4.1.1"
  }
}
```

Note: Not compatible with `semvar`, currently just uses string comparison.
