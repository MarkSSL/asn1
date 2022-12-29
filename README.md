## ASN1

```js
import { ASN1 } from '@markssl/asn1'

ASN1(['02', '01', '01']) // 020101
ASN1(['02', '02', '01', '01']) // 02020101
```

## UINT

```js
import { UINT } from '@markssl/asn1'

UINT('01') // 020101
UINT('0101') // 02020101
```

## BITSTR

```js
import { BITSTR } from '@markssl/asn1'

BITSTR('01') // 030101
BITSTR('0101') // 03020101
```
