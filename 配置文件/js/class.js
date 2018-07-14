"use strict";
//类的声明//
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
//传统的声明一个类的方式
// function People(name){
//     this.name = name
// }
//ES6 方式声明一个类
var People = /** @class */ (function () {
    //构造函数
    function People(name, age) {
        this.height = 178;
        //初始化name
        this.name = name;
        this.age = age;
    }
    People.prototype.say = function () {
        console.log("");
    };
    return People;
}());
//继承
var Man = /** @class */ (function (_super) {
    __extends(Man, _super);
    function Man(name, age) {
        var _this = 
        //必须先执行父类的构造函数
        _super.call(this, name, age) || this;
        _this.sex = '男';
        return _this;
    }
    Man.prototype.show = function () {
        console.log("\u6211\u7684\u5E74\u9F84\u662F:" + this.age);
    };
    return Man;
}(People));
var man = new Man('纳兰容若', 34);
man.show(); //子类的方法
man.say(); //父类的方法
