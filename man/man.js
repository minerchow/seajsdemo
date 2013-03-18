define(function(require, exports, module){
	var $ = require('jquery');
	function Man(name,age){
		this.name = name;
		this.age = age;
	}

	module.exports = Man;

	Man.prototype.say = function(){
		document.write("<div>"+this.name+this.age+"</div>");

	}


});