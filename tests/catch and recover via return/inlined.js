function(foo){try{return Promise.resolve(_catch(foo,function(){return"fallback";}));}catch(e){return Promise.reject(e);}}