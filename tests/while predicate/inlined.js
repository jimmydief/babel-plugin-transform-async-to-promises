function(foo){try{var count=0;return Promise.resolve(_continue(_for(foo,void 0,function(){count++;}),function(){return count;}));}catch(e){return Promise.reject(e);}}