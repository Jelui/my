//使用ts原则: 所有变量都要加类型
let a ;
a = 1
a = 'str'
console.log(a)

//变量的类型
//string number boolean object array function enum枚举类型

//给变量添加一个类型
//通过 变量名字：数据类型 为变量添加类型
let str : string;
str = '小时候吃一颗糖，以为会甜一辈子，多美好的童话'
//如果赋值的类型不符合，则会报错/
console.log(str)

/**
 * 函数：
 * 1.指明函数的数据类型
 * 2.返回值的数据类型
 * 3.如果没有返回值，使用:void 空的，无效的，表示没有返回值
 */
function add(a:number,b:number):number{
    console.log(a + b)
    return a + b
}
console.log(add(2.3,5.2332).toFixed(2));

/**
 * enum枚举型
 * 习惯字母大写
 * 在默认情况下，不赋值的时候，枚举的取值是从 0 开始的
 * 目的是增强代码的可读性
 * 枚举类型，可以自定义值//
 */
enum Direction{
    UP = 10,
    DOWN,
    LEFT,
    RIGHT
}
let d:Direction = Direction.UP
console.log(d)
console.log(Direction[12])

/***
 * 声明数组
 * 声明数组有两种方法
 * 1.arr:Array<>
 * 2.arr2:string[]
 */
//方法一://
let arr:Array<number> = []
arr.push(1)
arr.push(2)
arr.push(3)
console.log(arr)
//方法二://
let arr2:string[]=[]
arr2.push('string1')
arr2.push('string2')
arr2.push('string3')
console.log(arr2)

/**
 * 数组多类型
 * 元组 Tuole
 * 前面两个必须对应上，第三个以后，两种类型就可以任意写了
 */
let arr3:[string,number] = ['string',11]
arr3.push(888)
console.log(arr3)

/**
 * 泛型
 * T变量
 */
// function connect<T>(x:T,y:T):T{
//     return x
// }
// console.log(connect<[string]>(['hello world','aaa'],['yyy']))

//any类型
let arr4:Array<any> = []
arr4.push('hello world')
arr4.push(1234)
console.log(arr4);

/**
 * 类型推断
 * 声明一个变量值进行赋值，则会对这个变量进行类型推断
 * 如果推断出该变量为字符串类型后，则不能赋值为其他类型
 */
let b = 'abc'
//b = 123
console.log(b)