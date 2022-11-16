# @plasticine-design/commitlint-config

The commitlint and [cz-git](https://cz-git.qbb.sh/) configuration of plasticine-design.

# Features

- detect modified packages automatically for monorepo

# Install

```shell
pnpm i @plasticine-design/commitlint-config cz-git czg @commitlint/cli -D
```

# Usage

commitlint configuration file

```js
const config = require('@plasticine-design/commitlint-config').default
module.exports = config
```
