//类的声明//

//传统的声明一个类的方式
// function People(name){
//     this.name = name
// }

//ES6 方式声明一个类
class People{
    // public 公有的,
    //protected 受保护的 在本类和子类中可以访问
    //private 私有的 只有在本来中可以访问

    public name:string
    protected age:number
    private height:number = 178

    //构造函数
    constructor(name:string,age:number){
        //初始化name
        this.name = name
        this.age = age
    }
    public say():void{
        console.log(``)
    }
    
}

//继承
class Man extends People{
    public sex:string
    constructor(name:string,age:number){
        //必须先执行父类的构造函数
        super(name,age)
        this.sex = '男'
    }
    public show(){
        console.log(`我的年龄是:${this.age}`)
    }
}
let man = new Man('纳兰容若',34);
man.show() //子类的方法
man.say() //父类的方法
