//变量作用域
//只要函数中声明了一个和全局一样名字的变量（无论在函数中什么地方声明），
//那么函数内就只会使用这个变量，不会使用全局的同名变量了。
var a="global"
function test(){
    console.log(a);//这里就会输出undefined而不是global，因为下面声明了和全局变量同名的变量
    var a=20;
}
test();
//声明一个不可删除的全局变量
var apple="apple";
//声明可删除的全局变量
banana="banana";
this.pear="pear";
console.log(delete apple);
console.log(delete banana);
console.log(delete pear);
console.log(apple);
//console.log(banana);
//console.log(pear);
(function(x){
    console.log("自调用函数内部");
    console.log("x="+x);

})(2);
