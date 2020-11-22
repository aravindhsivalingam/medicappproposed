import { Injectable } from '@angular/core';
import * as CryptoJS from 'crypto-js';

@Injectable({
  providedIn: 'root'
})

export class EncrpDecrpService {
  constructor() { }
  ES = `AAAAB3NzaC1yc2EAAAABJQAAAQB/nAmOjTmezNUDKYvEeIRf2YnwM9/uUG1d0BYs
  c8/tRtx+RGi7N2lUbp728MXGwdnL9od4cItzky/zVdLZE2cycOa18xBK9cOWmcKS
  0A8FYBxEQWJ/q9YVUgZbFKfYGaGQxsER+A0w/fX8ALuk78ktP31K69LcQgxIsl7r
  NzxsoOQKJ/CIxOGMMxczYTiEoLvQhapFQMs3FL96didKr/QbrfB1WT6s3838SEaX
  fgZvLef1YB2xmfhbT9OXFE3FXvh2UPBfN+ffE7iiayQf/2XR+8j4N4bW30DiPtOQ
  LGUrH1y5X/rpNZNlWW2+jGIxqZtgWg7lTy3mXy5x836Sj/6L`;
  // The set method is use for encrypt the value.
  set(keys, value) {
    const encrypted = CryptoJS.AES.encrypt(value, keys);
    return encrypted.toString();
  }

  // The get method is use for decrypt the value.
  get(keys, value) {
    const decrypted = CryptoJS.AES.decrypt(value, keys);
    return decrypted.toString(CryptoJS.enc.Utf8);
  }
  encrypt(content) {
    const result = [];
    const passcode = this.ES;
    const passLen = passcode.length;
    for (let i = 0; i < content.length; i++) {
      const passOffset = i % passLen;
      const calAscii = (content.charCodeAt(i) + passcode.charCodeAt(passOffset));
      result.push(calAscii);
    }
    return JSON.stringify(result);
  }
}
