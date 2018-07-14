

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
 class Person implements Say{
     //public name:string
     constructor(public name:string,public age:number){
         //this.name = name
     }
     public say(){
         console.log(`我叫${this.name},我今年${this.age}岁了`)
     }
 }

 //创建一个人的对象
 let per = new Person('老王',26)
 per.say()