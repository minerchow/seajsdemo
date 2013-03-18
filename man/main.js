define(function(require) {

  var man = require("man/man.js");

  var p = new man("zhouming",25);

  var coder = require('man/coder.js');
  var c = new coder("zhouming",25,"coder")
  p.say();
  c.say();

});
