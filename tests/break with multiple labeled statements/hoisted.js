function(foo){let _exit,_outerInterrupt;function _temp2(){if(_outerInterrupt)return;_exit=1;return false;}function _foo2(){return _call(foo,_temp);}function _temp(_foo){if(_foo){_outerInterrupt=1;}}return _invoke(function(){return _invoke(_foo2,_temp2);},function(_result){return _await(_exit?_result:true);});}