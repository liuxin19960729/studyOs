```java
在基础类型中(byte short int long float double boolean  enum) ==比较的值
在对象类型中==比较的是地址值

Object (是所有类的基类)
    public boolean equals(Object obj) {
        return (this == obj);
    }
    比较的传入对象的地址值

String
        public boolean equals(Object anObject) {
        if (this == anObject) {
            return true;
        }
        if (anObject instanceof String) {
            String anotherString = (String)anObject;
            int n = value.length;
            if (n == anotherString.value.length) {
                char v1[] = value;
                char v2[] = anotherString.value;
                int i = 0;
                while (n-- != 0) {
                    if (v1[i] != v2[i])
                        return false;
                    i++;
                }
                return true;
            }
        }
        return false;
    }

    String对象里面重写equals方法比较的String对象具体值


当我们自己创建的Class时候不重写equlas方法比较的是地址值。我们可以对他的equals方法进行重写。重写之后我们可以对这个对象进行比较值了
    例
     public boolean equals(Object o) {
        if (this == o) return true;
        if (!(o instanceof QP)) return false;
        QP qp = (QP) o;
        return a == qp.a &&
                bb.equals(qp.bb);
    }
```