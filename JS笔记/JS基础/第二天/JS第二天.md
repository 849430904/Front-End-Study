# 1.选择语句

## 1.1.if..else

```javascript
//语法
if(condition) {
	statement1 
} else if (condition) { 
	statement2 
} else {
	statement3
}
```

思考：

```
1. 是否年满18岁
2. 素质教育（把分数变成ABCDE）90-100
3. 判断星期几
```

## 1.2.switch..case

```javascript
//语法
switch (expression) {
    case value: 
        statement
        break; // break 关键字会导致代码执行流跳出 switch 语句

    case value: 
        statement
        break;
    default: 
        statement
}
```



思考：

```javascript
var a = "10";
    switch (a) {
        case 10:
            console.log("10");
        case 20:
            console.log("20");
        case 30:
            console.log("30");
        default :
            console.log("haha");
    }
```



思考2：

```
今天星期几
```



## 1.3.三元运算符

```
表达式1 ? 表达式2 : 表达式3
var sex = sex == 1 ? '男':'女';
```

思考：

```
从两个数中找最大值
```



# 2.循环语句

> 在JavaScript中，循环语句有三种，while、do while和for循环。

## 2.1. while循环

基本语法：

```javascript
//当满足循环条件时，执行循环体里的代码
//每执行完一次循环体的代码以后，再判断一下循环条件
//如果循环不成立时，结束循环
while(循环条件){
  //循环体
}
```

示例代码：

```javascript
//计算1~100所有整数之和
var i = 0;   //初始化变量，用来表示循环了多少次
var sum = 0;  //初始化变量，用来记录和

//while语句的判断条件是i<=100,只要满足这个条件，就会一直执行循环体
while(i <= 100) {
  sum +=i;  //循环体每次进来以后，都会在sum上进行叠加
  i ++;    //每次加完以后，让计数器自增
}
```

## 2.2. do...while循环

> do...while循环和while循环语法类似，不同点在于，**do...while循环里，循环体至少会被执行一次**。

语法格式:

```javascript
do{
  //循环体
}while(判断条件);
```

思考：

```
使用do...while完成循环输入用户名密码案例。
```



## 2.3.for循环

> for循环是最常用的语句之一，它可以很方便的让代码循环规定的次数。

语法格式：

```javascript
for(初始化语句;条件判断语句;循环体执行完以后的语句){
  //循环体
}
```

示例代码：

```javascript
var sum = 0;
for(var i =0; i <= 100; i ++){
  sum += i;
}
```

思虑：

```
1.求1~100以内所有数的乘积
2.求1~100以内3的倍数之和。
3.求1~100以内不能被7整除的数之和。
4.求1~100以内所有偶数之和。
5.求1~100以内所有的偶数和所有的奇数之和。
6.打印正方形
7.打印三角形
8.打印九九乘法表。
9.本金10000元存入银行，年利率是千分之三，每过1年，将本金和利息加作为新的本金。计算5年后，获得的本金是多少
10.斐波那契数列指的是这样的一个数列：0、1、1、2、3、5、8、13、21... ... 即第n个数是前面两个数之和。求，当n=12时，对应的值。
```



## 2.4.break和countinue

> break:立即跳出整个循环，即结束循环。
>
> continue:结束当前循环，继续开始下一轮循环。

思考：

```javascript
for(var i = 0;i <= 10; i++) {
  if(i == 5) {
    continue;
  }
  if(i == 8) {
    break;
  }
  console.log(i);
}
```

练习:

```
1.求1~100之间不能被7整除的数之和
2.求200~300之间，所有奇数之和
3.求200~300之间，第一个能被7整除的数。
```



## 2.5.断点调试

> 断点调试是指在代码中添加断点，当程序运行时到这一断点时就会暂停，可以让开发人员执行后续的操作（例如，查看变量值，单步运行查看代码流程等），可以很方便的让开发人员对代码进行调试。



调试步骤：

```HTML
运行JS代码-->F12打开控制台-->Sources-->找到想要暂停的JS代码-->点击行号添加断点
```

调试中的相关技巧：

```
Watch:监视。通过Watch可以查看变量的值，非常实用。
F10:单步运程，程序执行到下一行代码。
F8:直接运行到下一个断点。如果程序中没有其它断点，程序就直接运行结束
```

*tips：* ***不要随便监视表达式，如果监视了表达式，表达式会被执行***

# 3.数组

> 所谓数组，就是将多个元素（通常是同一类型的数据）按照一定的顺序放到一个集合中，这个集合我们就称它为数组。

练习：

```
为什么要使用数组？
1.一个变量同时只能用来存储一个值，当我们需要存储多个值，如全班每个人的成绩时，就必须要用到数组了。
2.使用数组把同一类型的数据放到一个集合里，便于管理，同时操作起来也比较方便。
```

## 3.1.创建数组

> 数组是一个有长度且按照一定顺序排列的列表。在JavaScript里，数组的长度可以动态调整。

通过构造函数创建数组：

```javascript
var arr1 = new Array();  //创建了一个空的数组，这个数组里没有数据
var arr2 = new Array(10);  //创建了一个空的数组，但是指定了这个数组的长度是10
var arr3 = new Array(10,13,14);  //创建了一个数组，并且在这个数组里放入了三个数字10,13,14
```

通过字面量来直接创建数组

```javascript
var arr1 = [];   //创建了一个空的数组
var arr2 = [12];  //创建了一个数组，并在这个数组里放入了一个数字12
var arr3 = ["ab","cd","ef"];  //创建了一个数组，并在这个数组里放入了三个字符串，注意使用逗号分隔
```

## 3.2.数组的长度与下标

数组的长度：和字符串一样，数组也有一个length属性，指数组中存储的数据的个数。

```javascript
var arr = ["123","Hello",345,true];
arr.length;    //数组的长度是4
```

数组的下标：数组是有序的，数组里的每一个元素都有对应的下标，我们可以通过下标很方便的拿到数组里的数据。注意：**数组里的下标是从0开始的。**

```	javascript
var arr = ["hello",1234,true,4567,"world"];
arr[3];   //取出的结果是4567
arr[10];   //下标超出了数组的长度，返回值是undefined
```

## 3.3.数组的取值与赋值

数组的取值：可以通过数组的下标，很方便的取出数组里对应位置上的值。

```javascript
var arr = [12,34,23,78,3,1,9];
arr[3];   //将数组里的第3个元素78取出
```

数组的改值：通过数组的下标，也可以很方便的修改数组里对应位置上的值。

```javascript
var arr = [34,23,5,8,120];
arr[2] = "Hello";  //将数组里第2个元素数字5改成了字符串"Hello"
arr[8] = "World";  //在数组的第8个位置上插入了一个字符串"World"
```

练习：

```
1.将1~100以内所有的数都放到数组里
2.将1~100以内所有的奇数放到数组里。
3.将1~100以内能被3整除的数放到数组里。
```

## 3.4.数组的遍历

> 遍历：将数组里的每一个元素都访问一次，就叫遍历一次数组。

数组遍历的基本语法:

```javascript
for(var i = 0; i < arr.length; i ++) {
  //可以操作数组里的每一个元素
}
```

练习1：

```
var arr = [234,12,86,59,30,28,49,71];
1.求数组中所有数据之和以及平均数。
2.求数组里的最大数。
3.求数组里最大值和最小值所在的位置
4.求数组里的最大最小值以及它们所在的位置。
```

练习2：

```
var arr = ["abc","def","Hello","Hi","World"];
1.将字符串数组用|或其它符号分割
2.有一个字符串数组，求字符串数组中每项的长度，并把长度存入到一个新的数组里。
3.将数组中值为0的项去掉，将不为0的值存入一个新的数组
4.让一个数组倒序保存到另一个数组里
```

## 3.5.冒泡排序

使用冒泡排序将一个数组里的数据升序或降序进行排列。
