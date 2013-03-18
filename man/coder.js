define(function(require, exports, module){
	var $ = require('jquery');
	//将man.js引入
	var man = require('man/man');
	//创造一个码农的类，继承自man类
	function coder(name,age,job){
		man.call(this,name,age);
		this.job = job
	}

	module.exports = coder;

	coder.prototype = new man();
	//码农类的具体方法
	coder.prototype.say = function(){
		document.write("<div>"+this.name+this.age+this.job+"</div>");

	}


});