# upc-generator
A randomly generated UPC-12(UPC-A) code For Amazon

<p align="center">
     <a href="https://travis-ci.org/wangjue666/upc-generator"><img src="https://travis-ci.org/wangjue666/upc-generator.svg?branch=master" /></a>
     <a href="https://codecov.io/gh/wangjue666/upc-generator"><img src="https://codecov.io/gh/wangjue666/upc-generator/branch/master/graph/badge.svg" /></a>
    <a href="https://npmcharts.com/compare/upc-generator?minimal=true" rel="nofollow"><img src="https://img.shields.io/npm/dm/upc-generator.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/upc-generator" rel="nofollow"><img src="https://img.shields.io/npm/v/upc-generator.svg" style="max-width:100%;"></a>
    <a href="https://www.npmjs.com/package/upc-generator" rel="nofollow"><img src="https://img.shields.io/npm/l/upc-generator.svg?style=flat" style="max-width:100%;"></a>
</p>

<p align="center">
<a href="./README_zh.md">中文</a>|
<a href="./README.md">English</a>
</p>

# Install

```shell
npm install --save upc-generator
```

# Usage

```javascript
import UPC from 'upc-generator';
let upc = new UPC({flagCode: '1'})
const code = upc.create()
// 132877019981
```

For commonJS

```javascript
const UPC = require('upc-generator');
```

# API
## constructor(prop)

### prop?

Type: object

**flagCode？**
Type: literals `'0' | '1' | '6' | '7' | '8' | '9' | ''` 

set First code of UPC bar code

**manufacturer？**
Type: `string` Default: ''

Set gen upc number 2th to 6th, It represents the manufacturer code


## create(prop)
gen upc-12 code
```javascript
const code = upc.create({flagCode: '1', manufacturer: '23456'})
// 123456545694
```

# createMultiple(prop)
gen multiple upc-12 code, return `array`

**code**

```javascript
const arr = upc.createMultiple({size: 3, flagCode: '1', manufacturer: '23456'})
```


### prop?

**size？**
Type: `number` Default: 1


# isValid(code)

Check ean code whether it is legal

Type:: `string`

**code**

```javascript
const valid = upc.isValid('123456545694')
// true

const valid = upc.isValid('123456545695')
// false

```

# License

MIT License

Copyright (c) 2020 王珏