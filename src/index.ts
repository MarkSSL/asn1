import Encoding from '@markssl/encoding'

export function ASN1(args: string[]) {
  const hex = args.shift()
  const str = args.join('').replace(/\s+/g, '').toLowerCase()
  let len = (str.length/2)
  let hexlen = 0

  if (len !== Math.round(len)) {
    throw new Error("invalid hex:" + JSON.stringify(args))
  }

  if (len > 127) {
    hexlen += 1
    while (len > 255) {
      hexlen += 1
      len = len >> 8
    }
  }

  if (hexlen) {
    const numhex = hex + Encoding.numToHex(0x80 + hexlen)
    return numhex + Encoding.numToHex(str.length/2) + str
  } else {
    return hex + Encoding.numToHex(str.length/2) + str
  }
}

export const UINT = (str: string) => {
  const firstByte = parseInt(str.slice(0, 2), 16)

  if (0x80 & firstByte) {
    return ASN1(['02', '00' + str])
  } else {
    return ASN1(['02', str])
  }
}

export const BITSTR = (str: string) => {
  return ASN1(['03', '00' + str])
}
