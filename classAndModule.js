//类和原型
/*function inherit(o){
    if(o==null)throw TypeError("o is null");
    if(Object.create){
       return Object.create(o);
    }
    var t=typeof o;
    if(t!="object"&&t!="function")throw TypeError();
    function f(){};
    f.prototype=o;
    return new f();
}
function range(from,to){
    //原型对象作为函数的一个属性存储
    var r=inherit(range.ggx);
    //存储新的“范围对象”的起始位置和结束位置（状态）
    r.from=from;
    r.to=to;
    //返回这个新创建的对象
    return r;
}
range.ggx={
  //如果x在范围内，则返回true，不再则返回false
    includes:function(x){
      return this.from<=x&&x<=this.to;
    },
    foreach:function(f){
      for(var x=Math.ceil(this.from);x<=this.to;x++){
          f(x);
      }
    },
    toString:function(){
        return "("+this.from+"..."+this.to+")";
    }
};

var r=range(1,4);
r.includes(2);
r.foreach(console.log);
console.log(r.toString());*/

//类和构造函数
function Range(from, to){
    //存储“范围对象”的起始位置和终点位置
    this.from=from;
    this.to=to;
}
Range.prototype={
    //如果x在这个范围内，就返回true否则返回false
    includes:function(x){

    }
};
