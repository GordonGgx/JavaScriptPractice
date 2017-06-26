//创建对象
//1.对象直接量创建方式
var empty={};//没有任何属性的对象
var point={x:0,y:0};//两个属性
var point2={x:point.x, y:point.y+1};//更复杂的值
var book={
    "main title":"JavaScritp",//属性名有空格必须用引号
    "sub-title":"The Definitive Guide",//属性名有连字符必须用引号
    "for":"all audiences",//属性名是关键字必须用引号
    author:{//属性值是对象
        firstname:"David",
        surname:"Flanagan"
    }
};
//2.通过new创建对象
var o=new Object();//创建一个空对象，和{}一样
var a=new Array();//创建一个空数组和[]一样
var d=new Date();//创建一个表示当前时间的Date对象
var r=new RegExp("js");//创建一个可以进行模式匹配的RegExp对象

//3.Object.create()创建对象
var o1=Object.create({x:1,y:2});//o1继承了属性x和y
var o2=Object.create(null);//o2不继承任何属性和方法,完完全全的空连toString()方法都不存在
//创建一个普通的空对象
var o3=Object.create(Object.prototype);//o3和{}和new Object()一样

//属性的查询和设置
var author=book.author;//得到book对象的author属性
var name=author.surname;//获取author对象的surname属性
var title=book["main title"];//获取book的“main title”属性，因为属性名中间有空格，所以必须使用[]来引用属性
//给book创建一个名为edition的属性
book.edition=6;
//给main title属性修改值
book["main title"]="ECMAScript";


//下面这两种方式意思一样但灵活性不一样
book.for;//使用.运算符的方式，这种必须提前定义好
book["for"];//关联数组的方式，这种更加灵活

//继承
function inherit(o){
    if(o==null)throw TypeError();
    if(Object.create){
        return Object.create(o);
    }
    var t=typeof o;
    if(t!="object"&&t!="function")throw TypeError();
    function f(){};//定义一个空构造函数
    f.prototype=o;//把它的原型属性设置为o
    return new f();//使用new关键字f()构造函数创建o的继承对象
}

//定义一个o对象从Object.prototype继承而来
var o={};
o.x=1;
//创建一个继承自o对象的对象p
var p=inherit(o);
p.y=2;
//在创建一个继承自p对象的q
var q=inherit(p);
q.z=3;
var s=q.toString();
//alert(s);
//alert(q.x+q.y);

//创建一个用来继承的对象
var unitcircle={r:1};
var c=inherit(unitcircle);
c.x=1;c.y=1;
c.r=2;
console.log("c.r="+c["r"]);//覆盖了继承来的属性
console.log("unitcircle.r="+unitcircle.r);//原型对象中的属性并没有被修改
//试图去访问一个对象不存在属性只会抛出undefined，但是
//如果访问一个不存在属性的属性就会抛出TypeError()错误。如下：
//var len=o.a.length;
var exist=book&&book["main title"]&&book["main title"].length;
console.log("exist="+exist);

//检测属性
//1.使用in运算符检查属性
//如果对象的自有属性或继承属性中包含这个属性则返回true
var o={x:1,
      get a(){return 2;},
      set a(b){ this.x=b;}};
console.log("x" in o);//true对象的自由属性
console.log("y" in o);//false “y”不是o的属性也不是继承中的属性
console.log("toString" in o)//true toString是继承中的属性

//2.使用hasOwnProperty()方法检测
//只要对象的自由属性中包含此属性就返回true否则都是false
console.log(o.hasOwnProperty("x"));//true
console.log(o.hasOwnProperty("y"));//false
console.log(o.hasOwnProperty("toString"));//false
