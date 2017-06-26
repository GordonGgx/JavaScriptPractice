/*
var text="Hello World!\
dsadasda"
alert(text);
*/
//文本字符串使用
var s="Hello World";
console.log(s);
//第一个字符
console.log(s.charAt(0));
//最后一个字符
console.log(s.charAt(s.length-1));
//截取第2个字符到第4个字符
console.log(s.substring(1,4));
//同样可以截取字符的函数
console.log(s.slice(1,4));
//截取后三个
console.log(s.slice(-3));
console.log(s.substr(-3));
//获取某个字符第一次出现的位置
console.log(s.indexOf("l"));
//获取某个字符最后一次出现的位置
console.log(s.lastIndexOf("l"));
//获取某个字符从某处开始后面第一次出现的位置
console.log(s.indexOf("l",2))
//分割字符
console.log(s.split(" "));
//替换字符
console.log(s.replace(/l/ig,"a"));
//转换大小写
console.log(s.toLowerCase());
console.log(s.toUpperCase());

//模式匹配
var text="testing:1,2,3";
var pattern=/\d+/g;
console.log(pattern.test(text));



