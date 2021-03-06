## storage-DAO

> a data access object that wraps the storage api

### download
```bash
npm i storage-dao
```
or
```bash
yarn add storage-dao
```


### import
module:  
``` typescript
import WebStorage from 'storage-dao';
```
browser:
```html
<script src="../dist/webStorage.js"></script>
```

### Usage
```typescript static

const LS = new WebStorage({
        preId: 'Grewer__',
    });

export default LS
```

#### config
| attribute     | must| default| desc|
|:--------|---------:|:-------:|:------:|
| preId   | yes | -   | pre key id |
| timeSign| no  | '-'  | The interval between the timestamp and the true value in value|
|type     | no  | 'localStorage' | localStorage or sessionStorage
|encrypt  | no  |   btoa |  Encryption method| 
|decrypt  | no  |   atob |Decryption method|
|timeGap  | no  |   12 hour | Value expiration time|


### Change Log


- 1.0.0 : official release
- version < 1.0.0 : developing
