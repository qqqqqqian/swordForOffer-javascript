// 普通方式实现单例模式(不透明)
// function Singleton(name) {
//     this.name = name
// }
//
// Singleton.prototype.print = function () {
//     console.log('name:' + this.name + ' age:' + this.age)
// };
//
// Singleton.getInstance = function (name) {
//     if (!this.instance) {
//         this.instance = new Singleton(name)
//     }
//     return this.instance
// };
//
// var a = Singleton.getInstance('a')
// var b = Singleton.getInstance('b')
// console.log(a === b)

// 闭包方式实现单例模式(不透明)
// function Singleton(name) {
//     this.name = name
// }
//
// Singleton.prototype.print = function () {
//     console.log(this.name)
// }
//
// Singleton.getInstance = (function () {
//     let instance = null
//     return function (name) {
//         if (!instance) {
//             instance = new Singleton(name)
//         }
//         return instance
//     }
// })()
//
// var a = Singleton.getInstance('a')
// var b = Singleton.getInstance('b')
// console.log(a,b)
// console.log(a === b)

// 闭包实现透明的单例模式

// 想要实现单例的类
function createSingleton(name) {
    this.name = name
}

createSingleton.prototype.getName = function () {
    console.log(this.name)
}

var Singleton = (function(){
    var instance = null
    return function (name) {
        if(instance){
            return instance
        }
        instance = new createSingleton(name)
        return instance
    }
})()
var a = new Singleton('a')
var b = new Singleton('b')
console.log(a,b)
console.log(a === b)

