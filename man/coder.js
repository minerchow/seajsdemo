define(function(require, exports, module){
	var $ = require('jquery');
	var Man = require('man/man');
	function Coder(name,age,job){
		Man.call(this,name,age);
		this.job = job
	}

	module.exports = Coder;

	Coder.prototype = new Man();

	Coder.prototype.say = function(){
		document.write("<div>"+this.name+this.age+this.job+"</div>");

	}


});