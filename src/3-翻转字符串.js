// 翻转字符串

// fun1
/* 
思路：先利用字符串split()方法将字符串切割成数组，再对数组进行翻转，最后在利用数组join()方法转为字符串
*/
function strReverse(str){
    return str.split('').reverse().join('')
}
console.log(strReverse('hello'))  // 'olleh'

// fun2
/* 
思路：跟方法类似，只不过这里是用的es6的扩展运算符将字符串转为数组再操作
*/
function strReverse2(str){
    return ([...str].reverse().join(''))
}
console.log(strReverse2('hello'))   // 'olleh'