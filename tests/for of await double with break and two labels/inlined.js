function(matrix){try{let _outerInterrupt=false;var result=0;const _temp2=_forOf(matrix,function(row){let _innerInterrupt=false;const _temp=_forOf(row,function(value){return Promise.resolve(value).then(function(_value){result+=_value;if(result>10){_outerInterrupt=_innerInterrupt=true;return;}if(result<0){_innerInterrupt=true;}});},function(){return _innerInterrupt||_outerInterrupt;});if(_temp&&_temp.then)return _temp.then(function(){});},function(){return _outerInterrupt;});return Promise.resolve(_temp2&&_temp2.then?_temp2.then(function(){return result;}):result);}catch(e){return Promise.reject(e);}}