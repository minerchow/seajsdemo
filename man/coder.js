define(function(require, exports, module){
	var $ = require('jquery');
	var man = require('man/man');
	function coder(name,age,job){
		man.call(this,name,age);
		this.job = job
	}

	module.exports = coder;

	coder.prototype = new man();

	coder.prototype.say = function(){
		document.write("<div>"+this.name+this.age+this.job+"</div>");

	}


});