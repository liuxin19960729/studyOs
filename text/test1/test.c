#include<stdio.h>
say(){
   static int c=0;
   c++;
   printf("%d",c);
}