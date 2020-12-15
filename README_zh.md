# upc-generator
可为亚马逊随机生成UPC-12(UPC-A)码
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

设置生成的UPC第一位的旗码

**manufacturer？**
Type: `string` Default: ''

设置生成的UPC第2-6位的厂商码


## create(prop)
gen upc-12 code
```javascript
const code = upc.create({flagCode: '1', manufacturer: '23456'})
// 123456545694
```

# createMultiple(prop)
生成多个UPC码 返回一个`数组`

**code**

```javascript
const arr = upc.createMultiple({size: 3, flagCode: '1', manufacturer: '23456'})
```

# isValid(code)

校验传递进去的upc码是否合法

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