'use strict';

import {assert} from 'chai'
const flyioExt = require('..');

describe('flyio-ext', () => {
    it('needs tests', () => {
      assert.equal(3, 3)
    });
});

// const fie = new FlyIOExt
// const DEFAULT = '_DEFAULT_'
//
//
// fie.registerApis("name", {
//   baseURL: "http://127.0.0.1",
//   headers: {
//     "content-type":"application/x-www-form-urlencoded"
//   },
//   interceptors: [DEFAULT]
// }, {
//   ccc: {
//     url: "ccc.php",
//     method: "post",
//     interceptors: ['default'],
//   },
//   cc1 : {
//     url: "ccc.php",
//     method: "post",
//     interceptors: ['default1'],
//   },
//   cc2 : {
//     url: "ccc.php",
//     method: "post",
//     interceptors: ['default2'],
//   },
// })
//
// fie.registerInterceptor(DEFAULT, {
//   request: (req) => {
//     req.body.a = 1;
//     return req
//   },
//   response: (res)=> {
//     if(!res.data.a7) {
//       res.data.a7 = []
//     }
//     res.data.a7.push(1)
//     return res
//   }
// })
//
// fie.registerInterceptor("default", {
//   request: (req) => {
//     req.body.b = 2;
//     return req
//   },
//   response: (res)=> {
//     if(!res.data.a7) {
//       res.data.a7 = []
//     }
//     res.data.a7.push(2)
//     return res
//   }
// })
//
// fie.registerInterceptor("default1", {
//   request: (req) => {
//     req.body.b = 3;
//     return req
//   },
//   response: (res)=> {
//     if(!res.data.a7) {
//       res.data.a7 = []
//     }
//     res.data.a7.push(3)
//     return res
//   }
// })
//
// fie.registerInterceptor("default2", {
//   request: (req) => {
//     req.body.b = 4;
//     return req
//   },
//   response: (res)=> {
//     if(!res.data.a7) {
//       res.data.a7 = []
//     }
//     res.data.a7.push(4)
//     return res
//   }
// })
//
// fie.fetch("name.ccc", {
//   name: 1,
//   age: 23
// }, {
//   params : {
//     ddd : 1,
//     ccc: 2
//   }
// }).then(v => {
//   console.log("ccc", v.data)
// })
// fie.fetch("name.cc1", {
//   name: 11,
//   age: 231
// }, {
//   params : {
//     ddd : 11,
//     ccc: 21
//   }
// }).then(v => {
//   console.log("cc1", v.data)
// })
//
// fie.fetch("name.cc2", {
//   name: 22,
//   age: 232
// }, {
//   params : {
//     ddd : 12,
//     ccc: 22
//   }
// }).then(v => {
//   console.log("cc2", v.data)
// })

