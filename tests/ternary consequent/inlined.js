function(foo,bar,baz){try{function _temp(result){return result||result;}const _foo=foo();return Promise.resolve(_foo?Promise.resolve(bar()).then(_temp):_temp(baz()));}catch(e){return Promise.reject(e);}}