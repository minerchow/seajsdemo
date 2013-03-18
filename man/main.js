define(function(require) {

  var Man = require("man/man.js");

  var p = new Man("zhouming",25);

  var Coder = require('man/coder.js');
  var c = new Coder("zhouming",25,"coder")
  p.say();
  c.say();

});
