## storage-DAO

> a data access object that wraps the storage api


### Usage

```typescript
import WebStorage from 'storage-dao';

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

### Change Log

version < 1.0.0  
developing
