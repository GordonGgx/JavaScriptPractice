//数组
var empty=[];//没有元素的数组
var primes=[1,3,5,7,9];//创建5个数值的数组
var misc=[1.1,true,"a",];//创建了三个不同元素的数组以逗号结尾
console.log("mics.length="+misc.length);//输出3
console.log("mics[3]="+misc[3]);
var list=[,,];
console.log("list长度="+list.length);//长度是2
console.log(list[0]);//undefined
for(var i=0;i<list.length;i++){
    if(list[i]===undefined){
       console.log("数组中是undefined");
    }
}

//调用构造函数Array来创建数组
var a=new Array();//等同于 var a=[];
//创建时指定长度
var a=new Array(10);//创建了长度为10的数组
console.log("数组a的长度="+a.length);
//显示指定创建时数组中的元素
var a=new Array(1,2,3,4,"dsa");
console.log("数组中的个数"+a);

//数组中的方法
var a=[1,2,3,3];
//join方法将数组中的元素转化为字符串连接在一起
//默认用","分割
console.log(a.join());
//修改分割字符
console.log(a.join(" "));
console.log(a.join(""));
//这种方式可以创建9个连字符组成的字符串
var b=new Array(10);
console.log(b.join("-"));
//数组反转
console.log(a.reverse().join());
//数组排序
console.log("排序");
//默认从小到大
console.log(a.sort());
//从大到小
//更具顺序返回 负数 0 正数
console.log(a.sort(function(a,b){
    return b-a;
}));

//合并两个数组
console.log(a.concat([56,65]));
console.log(a.concat(89,90,[56,65]));
console.log(a.concat([56,65],[23,[43,45]]));

//获取数组的一部分slice(),
var a=[1,2,3,4,5];
//返回数组包含第一个指定参数的位置，不包含后一个指定参数的位置(前包含后不包含)
console.log(a.slice(0,2));
//之传入一个参数,表示从该参数的位置开始获取到数组结束
console.log(a.slice(3));
//传入负数，表示相对于数组的最后一个元素开始的位置。-1表示最后一个元素，-2 表示倒数第二个元素,依此类推
console.log(a.slice(-3,-2));

//删除或插入元素的通用方法
var a=[1,2,3,4,5,6,7,8];
//删除元素，第一个参数指定了从什么位置开始，第二个参数表面要删除几个
console.log("删除了"+a.splice(1,2));
console.log("原数组"+a);
//如果值指定一个参数，则表示从此位置删除后面所有
console.log("删除"+a.splice(3));
console.log("原数组"+a);
//插入元素
console.log(a.splice(2,0,[10,11,12]));
console.log("原数组"+a);

//数组中的栈
var stack=[];
//压入元素
stack.push(1,2);
console.log("push后stack="+stack);
var pop=stack.pop();
console.log("取出"+pop+";去出后stack="+stack);

//unshift和shift,从每次把新元素插入到头部，并且每次从头部去除删除
var a=[1,2];
a.unshift(3,9,0);//多个参数插入的时候是一次性插入的并不是一个一个插入
a.unshift(4);
a.unshift(5);
a.unshift(6);
console.log("unshift后a="+a);
a.shift();
console.log("shift后a="+a);

//ECMAScritp5中的数组方法
//----------暂时忽略
//检测数组类型
console.log(Array.isArray([]));
console.log(Array.isArray({}));
