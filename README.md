# x-api

## example
zeevx-api di buat oleh zeev-x

### chara 
```
const zeev = require("./index");
const q = "Zero Two";

zeev.chara(q)
  .then(result => {
    console.log(result);
  });
```
### otakudesu
```
const zeev = require("./index");
const q = "Darling in the franxx";

zeev.otakudesu(q)
  .then(result => {
    console.log(result);
  });
```
### pinterest
```
const zeev = require("./index");
const q = "Zero Two";

zeev.pinterest(q)
  .then(result => {
    console.log(result);
  });
```

## Bonus
### Api gempa BMKG
```
const bmkg = require("./index");

bmkg.gempa().then(result => {
  console.log(result);
});
```


## About Me
[Zeev-x](https://zeev-x.github.io/js)