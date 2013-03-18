define(function(require, exports, module){
	var $ = require('jquery');
	function man(name,age){
		this.name = name;
		this.age = age;
	}

	module.exports = man;

	man.prototype.say = function(){
		document.write("<div>"+this.name+this.age+"</div>");

	}


});