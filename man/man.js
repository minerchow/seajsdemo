define(function(require, exports, module){
	//将juery引入，本例没有用到jquery，可以不引入
	var $ = require('jquery');
	//创造一个人的类
	function man(name,age){
		this.name = name;
		this.age = age;
	}

	module.exports = man;
	//给man这个类加一个具体方法
	man.prototype.say = function(){
		document.write("<div>"+this.name+this.age+"</div>");

	}


});