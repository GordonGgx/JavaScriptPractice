//输出o的每个属性名称和值，返回undefined
function printProps(o){
    for(var p in o){
        console.log(p+":"+o[p]);
    }
}
//计算两个笛卡尔坐标(x1,y1)和(x2,y2)之间的距离
function distance(x1,y1,x2,y2){
    var dx=x2-x1;
    var dy=y2-y1;
    return Math.sqrt(dx*dx,dy*dy);
}
//计算阶乘（!x）的递归函数
function factorial(x){
    if(x<=1){
        return 1;
    }
    return x*factorial(x-1);
}
//将函数赋值给一个变量
var square=function(x){
    return x*x;
}
//函数表达式也能包含名称
var f=function fact(x){
    if(x<=1)return 1;
    return x*fact(x-1);
}
//函数表达式有时定义后立即调用,
var tensquared=(function(x){
    //如果是严格模式这里的this将是undefined，否则不是
    return !this;
})(10);
console.log("tensquared="+tensquared);
var calculator={
    operand1:1,
    operand2:1,
    add:function(){
        //因为js中对象的属性查找若不存在的话，则会给此对西添加一个属性，所以可以这样动态创建属性
        this.result=this.operand1+this.operand2;
    }
};
calculator.add();
//这个获取动态创建属性的结果
console.log(calculator.result);

//可选形参
function getPropertyNames(o,/*optional*/a){
    a=a||[];
    for(var pro in o){
        a.push(pro);
    }
    return a;
}
var o={x:1,y:2};
var a=getPropertyNames(o);//将o的属性存到一个新的数组中
var p={z:3};
getPropertyNames(p,a);//将P的属性追加到a数组中

//可变长的实参列表：实参对象
function f(x,y,z){
    //获取传入实际参数的个数
    console.log(arguments.length);
}

//闭包
var scope="global scope";
function checkScope(){
    var scope="local scope";
    function f(){
        return scope;
    }
    //此处稍稍改动一下
    //return f();
    return f;
}
console.log(checkScope());
console.log(checkScope()());

var uniqueInteger=(function(){
    var counter=0;
    return function(){
        return counter++;
    };
}());
console.log(uniqueInteger());
function counter(){
    var n=0;
    return {
      count:function(){
        return n++;
      },
      reset:function(){
        n=0;
      },
      n_value:function(){
        return n;
      }
    };
}
var c=counter();
c.count();
c.count();
console.log(c.n_value());
c.reset();
console.log(c.n_value());
