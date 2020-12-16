### 类型
```
为了程序的可移植性ansi规定
    short int  最少16位
    long int  最少32位
    short int <=int <= long int










  

```
 ###  #define的用法

```
    作用：将标识符定义后面的常量

    在编译的时候首先扫描之后会被与编译器对所有使用了这个宏定义的常量进行替换展开

注意：与处理不是不是语句，在使用的时候不要加；


默认情况下#define定义了之后他的范围会影响到源程序结束

    使用#undef   xxx       会结束上面定义的标识符副作用域范围

#define M(y) y*y+3*y

        使用的时候 M(5) 
        与编译器会把他展开为   5*5+3*5


宏定义例子：

https://www.cnblogs.com/yezhenhan/archive/2011/11/05/2236973.html

#define SQ(y) y*y
#include <stdio.h>

int main()
{
int a,sq;
printf("input a number: ");
scanf("%d",&a);
sq=SQ(a+1);
printf("sq=%d\n",sq);
return 0;
}

输入一个是为3 期望结果是16，返回结果却是7；

sq=a+1*a+1=2a+1
注意预处理器会先直接他的当成字符串进行替换不会对他惊醒计算在替换



#define SQ(y) (y)*(y)
#include <stdio.h>

int main()
{
int a,sq;
printf("input a number: ");
scanf("%d",&a);
sq=160/SQ(a+1);
printf("sq=%d\n",sq);
return 0;

}

sq=160/(a+1)*(a+1);
输出3
sq=160/4*4;
sq=160



```


 ###    c语言中__attribute__用法