(function (_, Kotlin) {
  'use strict';
  var Kind_CLASS = Kotlin.Kind.CLASS;
  var println = Kotlin.kotlin.io.println_s8jyv4$;
  var Unit = Kotlin.kotlin.Unit;
  function Person(name, email) {
    this.name = name;
    this.email = email;
  }
  Person.$metadata$ = {
    kind: Kind_CLASS,
    simpleName: 'Person',
    interfaces: []
  };
  Person.prototype.component1 = function () {
    return this.name;
  };
  Person.prototype.component2 = function () {
    return this.email;
  };
  Person.prototype.copy_puj7f4$ = function (name, email) {
    return new Person(name === void 0 ? this.name : name, email === void 0 ? this.email : email);
  };
  Person.prototype.toString = function () {
    return 'Person(name=' + Kotlin.toString(this.name) + (', email=' + Kotlin.toString(this.email)) + ')';
  };
  Person.prototype.hashCode = function () {
    var result = 0;
    result = result * 31 + Kotlin.hashCode(this.name) | 0;
    result = result * 31 + Kotlin.hashCode(this.email) | 0;
    return result;
  };
  Person.prototype.equals = function (other) {
    return this === other || (other !== null && (typeof other === 'object' && (Object.getPrototypeOf(this) === Object.getPrototypeOf(other) && (Kotlin.equals(this.name, other.name) && Kotlin.equals(this.email, other.email)))));
  };
  function main$lambda(f, res) {
    var person = new Person('Rehan', 'mkodekar@zoho.com');
    res.type('application/json');
    return res.send(person);
  }
  function main$lambda_0() {
    println('listening to port 9000');
    return Unit;
  }
  function main(args) {
    var express = require('express');
    var app = express();
    app.get('/api/test', main$lambda);
    app.listen('9000', main$lambda_0);
  }
  _.Person = Person;
  _.main_kand9s$ = main;
  main([]);
  Kotlin.defineModule('main', _);
  return _;
}(module.exports, require('kotlin')));
