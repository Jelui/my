"use strict";
/**
 * 在一个ts项目(tsconfig.json)共用一个作用域
 *
 * 接口：usb接口
 * 接口：就是一个规范
 *
 * 接口属性类，只是定义类的规范
 * interface Say{
 *    //必须要有一个name
 *    name:
 *   //必须要有一个say方法
 *     say()
 *
 * }
 *
 * //人类
 * implements 实现某个接口
 * class Person implements Say{
 *      public name：string
 *  constructor（name：string）{
 * this.name= name
 * }
 * public say（）{
 * }
 * }
 */
//简写implements 实现
var Person = /** @class */ (function () {
    //public name:string
    function Person(name, age) {
        this.name = name;
        this.age = age;
        //this.name = name
    }
    Person.prototype.say = function () {
        console.log("\u6211\u53EB" + this.name + ",\u6211\u4ECA\u5E74" + this.age + "\u5C81\u4E86");
    };
    return Person;
}());
//创建一个人的对象
var per = new Person('老王', 26);
per.say();
