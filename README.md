## storage-DAO

> a data access object that wraps the storage api

### download
```
npm i storage-dao
```
or
```
yarn add storage-dao
```


### import
module:  
```
import WebStorage from 'storage-dao';
```
browser:
```
<script src="../dist/webStorage.js"></script>
```

### Usage
```typescript

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


#### methods typing
```typescript
interface IResult {
  status: number
  key: string
  value: string | null
}
{
  set: (key: string, value: string, time?: string | number) => IResult
  get: (key: string) => IResult
  remove: (key: string) => { status: number, value: null | string }
}
```

### Change Log


- 1.0.0 : official release
- version < 1.0.0 : developing
