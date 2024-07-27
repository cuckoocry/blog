---
title: 常见集合(手打)
category: 面试

---

::: tip

视频来源：
[集合篇](https://www.bilibili.com/video/BV1yT411H7YK?p=69&vd_source=7138dfc78c49f602f8d3ed8cfbf0513d)

:::

## Java集合框架体系 - 介绍


![img.png](images/img.png)

------
- 数组
- ArrayList 底层实现
------
- 链表
- LinkedList 底层实现
------
- 二叉树、红黑树
- 散列表
- HashMap 底层原理
------

## 一、数据结构

### 算法复杂度分析

#### 为什么要进行复杂度分析？

- 指导你编写出性能更优的代码
- 评判别人写的代码的好坏

#### 1、时间复杂度分析

时间复杂度分析：来评估代码的执行耗时的

![img_1.png](images/img_1.png)

#### 常见复杂度表示

速记口诀：<font color=BrulyWood>**常对幂指阶**</font>

![img_2.png](images/img_2.png)

#### 常见复杂度

```java
public int test01(int n){
    int i=0;
    int j = 1;
    return i+j;
}
```

```java
public void test02(int n){
    int i=0;
    int sum=0;
    for(;i<100;i++){
        sum = sum+i;
    }
    System.out.println(sum);
}
```
<font color=BrulyWood> **总结：只要代码的执行时间不随着 n 的增大而增大，这样的代码复杂度都是 O(1)** </font>


-------

```java
public int sum(int n) {
    int sum = 0;
    for ( int i = 1; i <= n; i++) {
        sum = sum + i;
    }
    return sum;
}
```
![img_3.png](images/img_3.png)

-------

![img_4.png](images/img_4.png)

-------

![img_5.png](images/img_5.png)

-------

![img_6.png](images/img_6.png)


#### 2、空间复杂度分析

![img_7.png](images/img_7.png)


总结：

![img_8.png](images/img_8.png)


## 二、List相关面试题

![img_9.png](images/img_9.png)

### 1、数组

数组（ Array ）是一种用<font color=BrulyWood> **连续的内存空间**</font> 存储<font color=BrulyWood> **相同数据类型**</font> 数据的线性数据结构。

![img_10.png](images/img_10.png)

#### 数组如何获取其他元素的地址值？

![img_11.png](images/img_11.png)

#### 为什么数组索引从 0 开始呢？假如从 1 开始不行吗？ 

![img_12.png](images/img_12.png)

- 在根据数组索引获取元素的时候，会用索引和寻址公式来计算内存所对应的元素数据，**寻址公式是：数组的首地址 + 索引乘以存储数据的类型大小**
- 如果数组的索引从 1 开始，寻址公式中，就需要增加一次减法操作，对于 CPU 来说就多了一次指令，性能不高。

#### 操作数组的时间复杂度（查找）
随机查找：O(1)
不确定查找：O(n)、O(logn)【排序过后二分法】

#### 操作数组的时间复杂度（插入、删除）

最好情况下是 O(1) 的，最坏情况下是 O(n) 的，平均情况下的时间复杂度是 O(n) 。

#### 总结：

1. 数组（ Array ）是一种用连续的内存空间存储相同数据类型 数据的线性数据结构。

2. 数组下标为什么从 0 开始
   寻址公式是： baseAddress+ i * dataTypeSize ，计算下标的内存地址效率较高

3. 查找的时间复杂度
   - 随机 ( 通过下标 ) 查询的时间复杂度是 O(1)
   - 查找元素（未知下标）的时间复杂度是 O(n)
   - 查找元素（未知下标但排序）通过二分查找的时间复杂度是 O(logn)

4. 插入和删除时间复杂度
   插入和删除的时候，为了保证数组的内存连续性，需要挪动数组元素，平均时间复杂度为 O(n)


### 2、ArrayList 源码分析

![img_13.png](images/img_13.png)

#### ArrayList 源码分析 - 成员变量

```java
/**
* 默认初始的容量 (CAPACITY)
*/
private static final int
DEFAULT_CAPACITY = 10;
/**
* 用于空实例的共享空数组实例
*/
private static final Object[]
EMPTY_ELEMENTDATA = {};
/**
* 用于默认大小的空实例的共享空数组实例。
* 我们将其与 EMPTY_ELEMENTDATA 区分开来，以了解添加第一个元素时要膨胀多少
*/
private static final Object[]
DEFAULTCAPACITY_EMPTY_ELEMENTDATA = {};
/**
* 存储 ArrayList 元素的数组缓冲区。 ArrayList 的容量就是这个数组缓冲区的长度。
* 当添加第一个元素时，任何具有 elementData == DEFAULTCAPACITY_EMPTY_ELEMENTDATA 的空 ArrayList
* 都将扩展为 DEFAULT_CAPACITY
* 当前对象不参与序列化
*/
transient Object[] elementData;
// non-private to simplify nested class access
/**
* ArrayList 的大小（它包含的元素数量）
* @serial
*/
private int size;
```

#### ArrayList 源码分析 - 构造方法

> 带初始化容量的的构造方法

```java

* Constructs an empty list with an initial capacity of ten.
*/
public ArrayList() {
    this.elementData =
    DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}
public ArrayList(int initialCapacity) {
    if (initialCapacity > 0) {
        this.elementData = new Object[initialCapacity];
    } else if (initialCapacity == 0) {
            this.elementData =
            EMPTY_ELEMENTDATA;
        } else {
            throw new IllegalArgumentException("Illegal Capacity: " + initialCapacity);
    }
}

```

> 无参构造方法，默认创建空集合
```java
/**
* Constructs an empty list with an initial capacity of ten.
*/
public ArrayList() {
    this.elementData = DEFAULTCAPACITY_EMPTY_ELEMENTDATA;
}
```
> 第三个构造方法,将 collection 对象转换成数组，然后将数组的地址的 赋给 elementData
```java
public ArrayList(Collection<? extends E> c) {
    Object[] a = c.toArray();
    if ((size = a.length) != 0) {
       if (c.getClass() == ArrayList.class) {
           elementData = a;
       } else {
           elementData = Arrays.copyOf(a, size, Object[].class);
       }
    } else {
      // replace with empty array.
      elementData =
      EMPTY_ELEMENTDATA;
}
}
```
后续代码，自己走。
#### ArrayList 源码分析 - 添加和扩容操作 ( 第 1 次添加数据 )

![img_14.png](images/img_14.png)

#### ArrayList 源码分析 - 添加和扩容操作 ( 第 2 至 10 次添加数据 )

![img_15.png](images/img_15.png)

#### ArrayList 源码分析 - 添加和扩容操作 ( 第 11 次添加数据 )

![img_16.png](images/img_16.png)

### 3、ArrayList 底层实现原理是什么？

- 底层数据结构
   ArrayList 底层是用动态数组实现的。

- 初始容量
   ArrayList 初始容量为 0 ，当第一次添加数据的时候才会初始化容量为 10

- 扩容逻辑
  ArrayList 在进行扩容的时候是原来容量的 1.5 倍，每次扩容都需要拷贝数

- 添加逻辑
  - 确保数组已使用长度（ size ）加 1 之后足够存下下一个数据。
  - 计算数组的容量，如果当前数组已使用长度 +1 后的大于当前的数组长度，则调用 grow 方法扩容（原来的 1.5 倍）。
  - 确保新增的数据有地方存储之后，则将新元素添加到位于 size 的位置上。
  - 返回添加成功布尔值。

### 4、`ArrayList list=new ArrayList(10)` 中的 list 扩容几次 ?

```java

initialCapacity);
}
}
/**
* 构造一个具有指定初始容量的空列表。
* 参数： initialCapacity - 列表的初始容量
* 抛出： IllegalArgumentException – 如果指定的初始容量为负
*/
public ArrayList(int initialCapacity) {
    if (initialCapacity > 0) {
        this.elementData = new Object[initialCapacity];
    } else if (initialCapacity == 0) {
        this.elementData =EMPTY_ELEMENTDATA;
    } else {
        throw new IllegalArgumentException("Illegal Capacity: " + initialCapacity);
    }
}
```

参考回答： 该语句只是声明和实例了一个 ArrayList ，指定了容量为 10 ，未扩容

### 4、如何实现数组和 List 之间的转换 ？

```java
    // 数组转 List   修改了数组以后，List受影响
    public static void testArray2List(){
        String[] strs = {"aaa","bbb","ccc"};
        List<String> list = Arrays.asList(strs);
        for (String s : list) {
            System.out.println(s);
        }
        
        // 改变数组
        strs[1] = "ddd"
        System.out.println("=======");

        for (String s : list) {
            System.out.println(s);
        }
    }
```
```shell
C:\myJava2\Java\jdk1.8.0_201\bin\java.exe "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA 2022.3.2\lib\idea_rt.jar=5065:C:\Program Files\JetBrains\IntelliJ IDEA 2022.3.2\bin" -Dfile.encoding=UTF-8 -classpath C:\myJava2\Java\jdk1.8.0_201\jre\lib\charsets.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\deploy.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\access-bridge-64.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\cldrdata.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\dnsns.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\jaccess.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\jfxrt.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\localedata.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\nashorn.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\sunec.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\sunjce_provider.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\sunmscapi.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\sunpkcs11.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\zipfs.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\javaws.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\jce.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\jfr.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\jfxswt.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\jsse.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\management-agent.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\plugin.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\resources.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\rt.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-admin\target\classes;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-devtools\2.5.14\spring-boot-devtools-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot\2.5.14\spring-boot-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-core\5.3.20\spring-core-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-jcl\5.3.20\spring-jcl-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-context\5.3.20\spring-context-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-beans\5.3.20\spring-beans-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-expression\5.3.20\spring-expression-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-autoconfigure\2.5.14\spring-boot-autoconfigure-2.5.14.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-spring-boot-starter\3.0.3\knife4j-spring-boot-starter-3.0.3.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-spring-boot-autoconfigure\3.0.3\knife4j-spring-boot-autoconfigure-3.0.3.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-spring\3.0.3\knife4j-spring-3.0.3.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-annotations\3.0.3\knife4j-annotations-3.0.3.jar;C:\Users\jiang\.m2\repository\io\swagger\swagger-annotations\1.5.22\swagger-annotations-1.5.22.jar;C:\Users\jiang\.m2\repository\io\swagger\core\v3\swagger-annotations\2.1.2\swagger-annotations-2.1.2.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-core\3.0.3\knife4j-core-3.0.3.jar;C:\Users\jiang\.m2\repository\org\javassist\javassist\3.25.0-GA\javassist-3.25.0-GA.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-swagger2\3.0.0\springfox-swagger2-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-spi\3.0.0\springfox-spi-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-schema\3.0.0\springfox-schema-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-swagger-common\3.0.0\springfox-swagger-common-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-spring-web\3.0.0\springfox-spring-web-3.0.0.jar;C:\Users\jiang\.m2\repository\io\github\classgraph\classgraph\4.8.83\classgraph-4.8.83.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-spring-webflux\3.0.0\springfox-spring-webflux-3.0.0.jar;C:\Users\jiang\.m2\repository\org\mapstruct\mapstruct\1.3.1.Final\mapstruct-1.3.1.Final.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-spring-webmvc\3.0.0\springfox-spring-webmvc-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-core\3.0.0\springfox-core-3.0.0.jar;C:\Users\jiang\.m2\repository\net\bytebuddy\byte-buddy\1.10.22\byte-buddy-1.10.22.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-oas\3.0.0\springfox-oas-3.0.0.jar;C:\Users\jiang\.m2\repository\io\swagger\core\v3\swagger-models\2.1.2\swagger-models-2.1.2.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-bean-validators\3.0.0\springfox-bean-validators-3.0.0.jar;C:\Users\jiang\.m2\repository\io\swagger\swagger-models\1.5.22\swagger-models-1.5.22.jar;C:\Users\jiang\.m2\repository\io\swagger\swagger-core\1.5.22\swagger-core-1.5.22.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\dataformat\jackson-dataformat-yaml\2.12.6\jackson-dataformat-yaml-2.12.6.jar;C:\Users\jiang\.m2\repository\javax\validation\validation-api\2.0.1.Final\validation-api-2.0.1.Final.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-boot-starter\3.0.0\springfox-boot-starter-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-data-rest\3.0.0\springfox-data-rest-3.0.0.jar;C:\Users\jiang\.m2\repository\com\fasterxml\classmate\1.5.1\classmate-1.5.1.jar;C:\Users\jiang\.m2\repository\org\springframework\plugin\spring-plugin-core\2.0.0.RELEASE\spring-plugin-core-2.0.0.RELEASE.jar;C:\Users\jiang\.m2\repository\org\springframework\plugin\spring-plugin-metadata\2.0.0.RELEASE\spring-plugin-metadata-2.0.0.RELEASE.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-spring-ui\3.0.3\knife4j-spring-ui-3.0.3.jar;C:\Users\jiang\.m2\repository\mysql\mysql-connector-java\8.0.29\mysql-connector-java-8.0.29.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-framework\target\classes;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-web\2.5.14\spring-boot-starter-web-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter\2.5.14\spring-boot-starter-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-logging\2.5.14\spring-boot-starter-logging-2.5.14.jar;C:\Users\jiang\.m2\repository\ch\qos\logback\logback-classic\1.2.11\logback-classic-1.2.11.jar;C:\Users\jiang\.m2\repository\ch\qos\logback\logback-core\1.2.11\logback-core-1.2.11.jar;C:\Users\jiang\.m2\repository\org\apache\logging\log4j\log4j-to-slf4j\2.17.2\log4j-to-slf4j-2.17.2.jar;C:\Users\jiang\.m2\repository\org\apache\logging\log4j\log4j-api\2.17.2\log4j-api-2.17.2.jar;C:\Users\jiang\.m2\repository\org\slf4j\jul-to-slf4j\1.7.36\jul-to-slf4j-1.7.36.jar;C:\Users\jiang\.m2\repository\jakarta\annotation\jakarta.annotation-api\1.3.5\jakarta.annotation-api-1.3.5.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-json\2.5.14\spring-boot-starter-json-2.5.14.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\datatype\jackson-datatype-jdk8\2.12.6\jackson-datatype-jdk8-2.12.6.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\datatype\jackson-datatype-jsr310\2.12.6\jackson-datatype-jsr310-2.12.6.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\module\jackson-module-parameter-names\2.12.6\jackson-module-parameter-names-2.12.6.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-web\5.3.20\spring-web-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-webmvc\5.3.20\spring-webmvc-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-jetty\2.5.14\spring-boot-starter-jetty-2.5.14.jar;C:\Users\jiang\.m2\repository\jakarta\servlet\jakarta.servlet-api\4.0.4\jakarta.servlet-api-4.0.4.jar;C:\Users\jiang\.m2\repository\jakarta\websocket\jakarta.websocket-api\1.1.2\jakarta.websocket-api-1.1.2.jar;C:\Users\jiang\.m2\repository\org\apache\tomcat\embed\tomcat-embed-el\9.0.63\tomcat-embed-el-9.0.63.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-servlets\9.4.46.v20220331\jetty-servlets-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-continuation\9.4.46.v20220331\jetty-continuation-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-http\9.4.46.v20220331\jetty-http-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-util\9.4.46.v20220331\jetty-util-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-io\9.4.46.v20220331\jetty-io-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-webapp\9.4.46.v20220331\jetty-webapp-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-xml\9.4.46.v20220331\jetty-xml-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-servlet\9.4.46.v20220331\jetty-servlet-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-security\9.4.46.v20220331\jetty-security-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-server\9.4.46.v20220331\jetty-server-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-util-ajax\9.4.46.v20220331\jetty-util-ajax-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\websocket-server\9.4.46.v20220331\websocket-server-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\websocket-common\9.4.46.v20220331\websocket-common-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\websocket-api\9.4.46.v20220331\websocket-api-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\websocket-client\9.4.46.v20220331\websocket-client-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-client\9.4.46.v20220331\jetty-client-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\websocket-servlet\9.4.46.v20220331\websocket-servlet-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\javax-websocket-server-impl\9.4.46.v20220331\javax-websocket-server-impl-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-annotations\9.4.46.v20220331\jetty-annotations-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-plus\9.4.46.v20220331\jetty-plus-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\ow2\asm\asm\9.2\asm-9.2.jar;C:\Users\jiang\.m2\repository\org\ow2\asm\asm-commons\9.2\asm-commons-9.2.jar;C:\Users\jiang\.m2\repository\org\ow2\asm\asm-tree\9.2\asm-tree-9.2.jar;C:\Users\jiang\.m2\repository\org\ow2\asm\asm-analysis\9.2\asm-analysis-9.2.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\javax-websocket-client-impl\9.4.46.v20220331\javax-websocket-client-impl-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-aop\2.5.14\spring-boot-starter-aop-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-aop\5.3.20\spring-aop-5.3.20.jar;C:\Users\jiang\.m2\repository\org\aspectj\aspectjweaver\1.9.7\aspectjweaver-1.9.7.jar;C:\Users\jiang\.m2\repository\com\alibaba\druid-spring-boot-starter\1.2.16\druid-spring-boot-starter-1.2.16.jar;C:\Users\jiang\.m2\repository\com\alibaba\druid\1.2.16\druid-1.2.16.jar;C:\Users\jiang\.m2\repository\org\slf4j\slf4j-api\1.7.36\slf4j-api-1.7.36.jar;C:\Users\jiang\.m2\repository\pro\fessional\kaptcha\2.3.3\kaptcha-2.3.3.jar;C:\Users\jiang\.m2\repository\com\jhlabs\filters\2.0.235-1\filters-2.0.235-1.jar;C:\Users\jiang\.m2\repository\javax\servlet\servlet-api\2.5\servlet-api-2.5.jar;C:\Users\jiang\.m2\repository\com\github\oshi\oshi-core\6.4.0\oshi-core-6.4.0.jar;C:\Users\jiang\.m2\repository\net\java\dev\jna\jna\5.12.1\jna-5.12.1.jar;C:\Users\jiang\.m2\repository\net\java\dev\jna\jna-platform\5.12.1\jna-platform-5.12.1.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-system\target\classes;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-quartz\target\classes;C:\Users\jiang\.m2\repository\org\quartz-scheduler\quartz\2.3.2\quartz-2.3.2.jar;C:\Users\jiang\.m2\repository\com\mchange\mchange-commons-java\0.2.15\mchange-commons-java-0.2.15.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-common\target\classes;C:\Users\jiang\.m2\repository\org\projectlombok\lombok\1.18.24\lombok-1.18.24.jar;C:\Users\jiang\.m2\repository\io\minio\minio\8.2.1\minio-8.2.1.jar;C:\Users\jiang\.m2\repository\com\carrotsearch\thirdparty\simple-xml-safe\2.7.1\simple-xml-safe-2.7.1.jar;C:\Users\jiang\.m2\repository\com\google\guava\guava\29.0-jre\guava-29.0-jre.jar;C:\Users\jiang\.m2\repository\com\google\guava\failureaccess\1.0.1\failureaccess-1.0.1.jar;C:\Users\jiang\.m2\repository\com\google\guava\listenablefuture\9999.0-empty-to-avoid-conflict-with-guava\listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar;C:\Users\jiang\.m2\repository\com\google\code\findbugs\jsr305\3.0.2\jsr305-3.0.2.jar;C:\Users\jiang\.m2\repository\org\checkerframework\checker-qual\2.11.1\checker-qual-2.11.1.jar;C:\Users\jiang\.m2\repository\com\google\errorprone\error_prone_annotations\2.3.4\error_prone_annotations-2.3.4.jar;C:\Users\jiang\.m2\repository\com\google\j2objc\j2objc-annotations\1.3\j2objc-annotations-1.3.jar;C:\Users\jiang\.m2\repository\com\squareup\okhttp3\okhttp\3.14.9\okhttp-3.14.9.jar;C:\Users\jiang\.m2\repository\com\squareup\okio\okio\1.17.2\okio-1.17.2.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\core\jackson-annotations\2.12.6\jackson-annotations-2.12.6.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\core\jackson-core\2.12.6\jackson-core-2.12.6.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-context-support\5.3.20\spring-context-support-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-security\2.5.14\spring-boot-starter-security-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\security\spring-security-config\5.5.8\spring-security-config-5.5.8.jar;C:\Users\jiang\.m2\repository\org\springframework\security\spring-security-core\5.5.8\spring-security-core-5.5.8.jar;C:\Users\jiang\.m2\repository\org\springframework\security\spring-security-crypto\5.5.8\spring-security-crypto-5.5.8.jar;C:\Users\jiang\.m2\repository\org\springframework\security\spring-security-web\5.5.8\spring-security-web-5.5.8.jar;C:\Users\jiang\.m2\repository\com\github\pagehelper\pagehelper-spring-boot-starter\1.4.6\pagehelper-spring-boot-starter-1.4.6.jar;C:\Users\jiang\.m2\repository\org\mybatis\spring\boot\mybatis-spring-boot-starter\2.2.2\mybatis-spring-boot-starter-2.2.2.jar;C:\Users\jiang\.m2\repository\org\mybatis\spring\boot\mybatis-spring-boot-autoconfigure\2.2.2\mybatis-spring-boot-autoconfigure-2.2.2.jar;C:\Users\jiang\.m2\repository\org\mybatis\mybatis\3.5.9\mybatis-3.5.9.jar;C:\Users\jiang\.m2\repository\org\mybatis\mybatis-spring\2.0.7\mybatis-spring-2.0.7.jar;C:\Users\jiang\.m2\repository\com\github\pagehelper\pagehelper-spring-boot-autoconfigure\1.4.6\pagehelper-spring-boot-autoconfigure-1.4.6.jar;C:\Users\jiang\.m2\repository\com\github\pagehelper\pagehelper\5.3.2\pagehelper-5.3.2.jar;C:\Users\jiang\.m2\repository\com\github\jsqlparser\jsqlparser\4.5\jsqlparser-4.5.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-validation\2.5.14\spring-boot-starter-validation-2.5.14.jar;C:\Users\jiang\.m2\repository\org\hibernate\validator\hibernate-validator\6.2.3.Final\hibernate-validator-6.2.3.Final.jar;C:\Users\jiang\.m2\repository\jakarta\validation\jakarta.validation-api\2.0.2\jakarta.validation-api-2.0.2.jar;C:\Users\jiang\.m2\repository\org\jboss\logging\jboss-logging\3.4.3.Final\jboss-logging-3.4.3.Final.jar;C:\Users\jiang\.m2\repository\org\apache\commons\commons-lang3\3.12.0\commons-lang3-3.12.0.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\core\jackson-databind\2.12.6.1\jackson-databind-2.12.6.1.jar;C:\Users\jiang\.m2\repository\com\baomidou\dynamic-datasource-spring-boot-starter\3.5.2\dynamic-datasource-spring-boot-starter-3.5.2.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-jdbc\2.5.14\spring-boot-starter-jdbc-2.5.14.jar;C:\Users\jiang\.m2\repository\com\zaxxer\HikariCP\4.0.3\HikariCP-4.0.3.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-jdbc\5.3.20\spring-jdbc-5.3.20.jar;C:\Users\jiang\.m2\repository\com\alibaba\fastjson2\fastjson2\2.0.25\fastjson2-2.0.25.jar;C:\Users\jiang\.m2\repository\commons-io\commons-io\2.11.0\commons-io-2.11.0.jar;C:\Users\jiang\.m2\repository\org\yaml\snakeyaml\1.28\snakeyaml-1.28.jar;C:\Users\jiang\.m2\repository\io\jsonwebtoken\jjwt\0.9.1\jjwt-0.9.1.jar;C:\Users\jiang\.m2\repository\javax\xml\bind\jaxb-api\2.3.1\jaxb-api-2.3.1.jar;C:\Users\jiang\.m2\repository\javax\activation\javax.activation-api\1.2.0\javax.activation-api-1.2.0.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-data-redis\2.5.14\spring-boot-starter-data-redis-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\data\spring-data-redis\2.5.11\spring-data-redis-2.5.11.jar;C:\Users\jiang\.m2\repository\org\springframework\data\spring-data-keyvalue\2.5.11\spring-data-keyvalue-2.5.11.jar;C:\Users\jiang\.m2\repository\org\springframework\data\spring-data-commons\2.5.11\spring-data-commons-2.5.11.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-tx\5.3.20\spring-tx-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-oxm\5.3.20\spring-oxm-5.3.20.jar;C:\Users\jiang\.m2\repository\io\lettuce\lettuce-core\6.1.8.RELEASE\lettuce-core-6.1.8.RELEASE.jar;C:\Users\jiang\.m2\repository\io\netty\netty-common\4.1.77.Final\netty-common-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\netty\netty-handler\4.1.77.Final\netty-handler-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\netty\netty-resolver\4.1.77.Final\netty-resolver-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\netty\netty-buffer\4.1.77.Final\netty-buffer-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\netty\netty-codec\4.1.77.Final\netty-codec-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\netty\netty-transport\4.1.77.Final\netty-transport-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\projectreactor\reactor-core\3.4.18\reactor-core-3.4.18.jar;C:\Users\jiang\.m2\repository\org\reactivestreams\reactive-streams\1.0.3\reactive-streams-1.0.3.jar;C:\Users\jiang\.m2\repository\org\apache\commons\commons-pool2\2.9.0\commons-pool2-2.9.0.jar;C:\Users\jiang\.m2\repository\eu\bitwalker\UserAgentUtils\1.21\UserAgentUtils-1.21.jar;C:\Users\jiang\.m2\repository\javax\servlet\javax.servlet-api\4.0.1\javax.servlet-api-4.0.1.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-generator\target\classes;C:\Users\jiang\.m2\repository\org\apache\velocity\velocity-engine-core\2.3\velocity-engine-core-2.3.jar;C:\Users\jiang\.m2\repository\commons-collections\commons-collections\3.2.2\commons-collections-3.2.2.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-dishes\target\classes;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-paperwork\target\classes;C:\Users\jiang\.m2\repository\com\deepoove\poi-tl\1.12.1\poi-tl-1.12.1.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-transcoder\1.14\batik-transcoder-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-anim\1.14\batik-anim-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-css\1.14\batik-css-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-ext\1.14\batik-ext-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-parser\1.14\batik-parser-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-svg-dom\1.14\batik-svg-dom-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-awt-util\1.14\batik-awt-util-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\xmlgraphics-commons\2.6\xmlgraphics-commons-2.6.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-bridge\1.14\batik-bridge-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-script\1.14\batik-script-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-dom\1.14\batik-dom-1.14.jar;C:\Users\jiang\.m2\repository\xml-apis\xml-apis\1.4.01\xml-apis-1.4.01.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-gvt\1.14\batik-gvt-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-shared-resources\1.14\batik-shared-resources-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-svggen\1.14\batik-svggen-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-util\1.14\batik-util-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-constants\1.14\batik-constants-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-i18n\1.14\batik-i18n-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-xml\1.14\batik-xml-1.14.jar;C:\Users\jiang\.m2\repository\xml-apis\xml-apis-ext\1.3.04\xml-apis-ext-1.3.04.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-codec\1.14\batik-codec-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\poi\poi-ooxml\4.1.2\poi-ooxml-4.1.2.jar;C:\Users\jiang\.m2\repository\org\apache\poi\poi\4.1.2\poi-4.1.2.jar;C:\Users\jiang\.m2\repository\commons-codec\commons-codec\1.15\commons-codec-1.15.jar;C:\Users\jiang\.m2\repository\org\apache\commons\commons-collections4\4.4\commons-collections4-4.4.jar;C:\Users\jiang\.m2\repository\org\apache\commons\commons-math3\3.6.1\commons-math3-3.6.1.jar;C:\Users\jiang\.m2\repository\com\zaxxer\SparseBitSet\1.2\SparseBitSet-1.2.jar;C:\Users\jiang\.m2\repository\org\apache\poi\poi-ooxml-schemas\4.1.2\poi-ooxml-schemas-4.1.2.jar;C:\Users\jiang\.m2\repository\org\apache\xmlbeans\xmlbeans\3.1.0\xmlbeans-3.1.0.jar;C:\Users\jiang\.m2\repository\org\apache\commons\commons-compress\1.19\commons-compress-1.19.jar;C:\Users\jiang\.m2\repository\com\github\virtuald\curvesapi\1.06\curvesapi-1.06.jar;C:\Users\jiang\.m2\repository\com\itextpdf\itextpdf\5.5.13.2\itextpdf-5.5.13.2.jar;C:\Users\jiang\.m2\repository\org\im4java\im4java\1.4.0\im4java-1.4.0.jar;C:\Users\jiang\.m2\repository\com\github\sarxos\webcam-capture\0.3.12\webcam-capture-0.3.12.jar;C:\Users\jiang\.m2\repository\com\nativelibs4java\bridj\0.7.0\bridj-0.7.0.jar;C:\Users\jiang\.m2\repository\org\apache\pdfbox\pdfbox\2.0.24\pdfbox-2.0.24.jar;C:\Users\jiang\.m2\repository\org\apache\pdfbox\fontbox\2.0.24\fontbox-2.0.24.jar;C:\Users\jiang\.m2\repository\commons-logging\commons-logging\1.2\commons-logging-1.2.jar;C:\Users\jiang\.m2\repository\com\github\jai-imageio\jai-imageio-core\1.4.0\jai-imageio-core-1.4.0.jar com.ruoyi.web.controller.tool.Test
aaa
bbb
ccc
=======
aaa
ddd
ccc

Process finished with exit code 0
```
![img_17.png](images/img_17.png)



```java 
    //List 转数组   修改List，数组不受影响
    public static void testList2Array(){
        List<String> list = new ArrayList<String>();
        list.add("aaa");
        list.add("bbb");
        list.add("ccc");
        String[] array = list.toArray(new String[list.size()]);
        for (String s : array) {
            System.out.println(s);
        }

        System.out.println("=======");
        list.add("333");
        
        for (String s : array) {
            System.out.println(s);
        }
    }
```

参考回答：

- 数组转 List ：使用JDK中java.util.Arrays 工具类的 asList 方法。
- List 转数组 ：使用 List 的 toArray 方法。无参 toArray 方法返回 Object 数组，传入初始化长度的数组对象，返回该对象数组

面试官再问:

#### 1. 用 `Arrays.asList` 转 List 后，如果修改了数组内容， list 受影响吗？

`Arrays.asList` 转换 `List` 之后，如果修改了数组的内容， `List` **会受影响**，因为它的底层使用的 `Arrays` 类中的一个内部类 `ArrayList` 来构造的集合，在这个集合的构造器中，把我们传入的这个集合进行了包装而已，最终指向的都是同一个内存地址。

#### 2. List 用 toArray 转数组后，如果修改了 List 内容，数组受影响吗？

`List` 用了 `toArray` 转数组后，如果修改了 `List` 内容，数组不会影响，当调用了 `toArray` 以后，在底层是它是进行了数组的**拷贝**，跟原来的元素就没啥关系了，所以即使 `List` 修改了以后，数组也不受影响。


### 5、 ArrayList 和 LinkedList 的区别是什么 ？

#### 单向链表

- 链表中的每一个元素称之为结点（ Node ）
- 物理**存储单元上，非连续、非顺序**的存储结构
- 单向链表：每个结点包括两个部分：一个是存储数据元素的数据域，另一个是存储下一个结点地址的指针域。记录下个结点地址的指针叫作后继指针 next

![img_18.png](images/img_18.png)

#### 链表时间复杂度

#### 双向链表

![img_19.png](images/img_19.png)

#### 双向链表时间复杂度

![img_20.png](images/img_20.png)

#### 总结

![img_21.png](images/img_21.png)

#### ArrayList 和 LinkedList 的区别是什么 ？答案

1. **底层数据结构**
2. 操作数据的效率
3. 内存空间占用
4. 线程安全

![img_22.png](images/img_22.png)

![img_23.png](images/img_23.png)


## 三、HashMap相关面试题

![img_24.png](images/img_24.png)

### 相关概念 - 二叉树

定义：

![img_25.png](images/img_25.png)

实现：

![img_26.png](images/img_26.png)

#### 二叉树分类

![img_27.png](images/img_27.png)

![img_28.png](images/img_28.png)

![img_29.png](images/img_29.png)

#### 总结


1. 什么是二叉树

- 每个节点最多有两个“叉”，分别是左子节点和右子节点。
- 不要求每个节点都有两个子节点，有的节点只有左子节点，有的节点只有右子节点。
- 二叉树每个节点的左子树和右子树也分别满足二叉树的定义


2. 什么是二叉搜索树

- 二叉搜索树( `Binary Search Tree,BST`)又名二叉查找树，有序二叉树
- 在树中的任意一个节点，其左子树中的每个节点的值，都要小于这个节点的值而右子树节点的值都大于这个节点的值
- 没有键值相等的节点
- 通常情况下二叉树搜索的时间复杂度为`O(logn)`

### 相关概念 - 红黑树

**红黑树（ Red Black Tree ）**：也是一种自平衡的二叉搜索树 (BST) ，之前叫做平衡二叉 B 树（ Symmetric Binary B-Tree ）

#### 红黑树的特质

![img_30.png](images/img_30.png)

#### 红黑树的复杂度

![img_31.png](images/img_31.png)

#### 总结

什么是红黑树

- 红黑树（ Red Black Tree ）：也是一种自平衡的二叉搜索树 (BST)
- 所有的红黑规则都是希望红黑树能够保证平衡
- 红黑树的时间复杂度：查找、添加、删除都是 O(logn)


### 相关概念 - 散列表

在 HashMap 中的最重要的一个数据结构就是散列表，在散列表中又使用到了红黑树和链表

散列表 (Hash Table) 又名**哈希表**/Hash 表，是**根据键（ Key ）** 直接访问在内存存储位置**值（ Value ）** 的数据结构，它是由**数组演化而来**的，利用了数组支持按照下标进行随机访问数据的特性。

#### 散列函数

![img_32.png](images/img_32.png)

#### 散列冲突

![img_33.png](images/img_33.png)

解决办法：拉链法

![img_34.png](images/img_34.png)

#### 拉链法 - 时间复杂度

![img_35.png](images/img_35.png)
![img_36.png](images/img_36.png)

#### 总结：

1. 什么是散列表？

- 散列表 (Hash Table) 又名哈希表 /Hash 表
- 根据键（ Key ）直接访问在内存存储位置值（ Value ）的数据结构
- 由数组演化而来的，利用了数组支持按照下标进行随机访问数据

2. 散列冲突

- 散列冲突又称哈希冲突，哈希碰撞
- 指多个 key 映射到同一个数组下标位置

3. 散列冲突 - 链表法（拉链）

- 数组的每个下标位置称之为桶（ bucket ）或者槽（ slot ）
- 每个桶 ( 槽 ) 会对应一条链表
- hash 冲突后的元素都放到相同槽位对应的链表中或红黑树中

### 1、说一下HashMap的实现原理

![img_37.png](images/img_37.png)

#### 总结

1. 说一下 HashMap 的实现原理？

- 底层使用 hash 表数据结构，即数组 + （链表 | 红黑树）
- 添加数据时，计算 key 的值确定元素在数组中的下标
  - key 相同则替换
  - 不同则存入链表或红黑树中获取数据通过 key 的 hash 计算数组下标获取元素

2. HashMap 的 jdk1.7 和 jdk1.8 有什么区别
- JDK1.8 之前采用的拉链法，数组 + 链表
- JDK1.8 之后采用数组 + 链表 + 红黑树，链表长度大于 8 且数组长度大于 64 则会从链表转化为红黑树

### 2、HashMap的put方法的具体流程

#### HashMap 源码分析

![img_38.png](images/img_38.png)

![img_39.png](images/img_39.png)

![img_40.png](images/img_40.png)

#### 总结

1. 判断键值对数组 table 是否为空或为 null ，否则执行 `resize()` 进行扩容（初始化）
2. 根据键值 key 计算 hash 值得到数组索引
3. 判断 `table[i]==null` ，条件成立，直接新建节点添加
4. 如果 `table[i]==null` , 不成立
   4.1 判断 `table[i]` 的首个元素是否和 key 一样，如果相同直接覆盖 value
   4.2 判断 `table[i]` 是否为 treeNode ，即 `table[i]` 是否是红黑树，如果是红黑树，则直接在树中插入键值对
   4.3 遍历 `table[i]` ，链表的尾部插入数据，然后判断链表长度是否大于 8 ，大于 8 的话把链表转换为红黑树，在红黑树中执行插入操 作，遍历过程中若发现 key 已经存在直接覆盖 value
5. 插入成功后，判断实际存在的键值对数量 size 是否超多了最大容量 threshold （数组长度 *0.75 ），如果超过，进行扩容。

### 3、讲一讲HashMap的扩容机制

#### 扩容流程

![img_41.png](images/img_41.png)

#### 总结

- 在添加元素或初始化的时候需要调用 resize 方法进行扩容，第一次添加数据初始化数组长度为 16 ，以后每次每次扩容都是达到了扩容阈值（数组长度 * 0.75 ）
- 每次扩容的时候，都是扩容之前容量的 2 倍；
- 扩容之后，会新创建一个数组，需要把老数组中的数据挪动到新的数组中
  - 没有 hash 冲突的节点，则直接使用 **`e.hash & (newCap - 1)`** 计算新数组的索引位置
  - 如果是红黑树，走红黑树的添加
  - 如果是链表，则需要遍历链表，可能需要拆分链表，判断 **`(e.hash & oldCap)`** 是否为 0 ，该元素的位置要么停留在原始位置，要么移动到[原始位置 + 增加的数组大小]这个位置上


![img_42.png](images/img_42.png)

### 4、HashMap的寻址算法？

![img_43.png](images/img_43.png)

#### 为何 HashMap 的数组长度一定是 2 的次幂？

1. 计算索引时效率更高：如果是 2 的 n 次幂可以使用**位与运算**代替**取模**。
2. 扩容时重新计算索引效率更高： `hash & oldCap == 0` 的元素留在原来位置 ，否则新位置 = 旧位置 + oldCap

#### 总结
1 . hashMap 的寻址算法

- 计算对象的 hashCode()
- 再进行调用 hash() 方法进行二次哈希， hashcode 值右移 16 位再异或运算，让哈希分布更为均匀
- 最后 (capacity – 1) & hash 得到索引

2. 为何 HashMap 的数组长度一定是 2 的次幂？

- 计算索引时效率更高：如果是 2 的 n 次幂可以使用位与运算代替取模
- 扩容时重新计算索引效率更高： hash & oldCap == 0 的元素留在原来位置 ，否则新位置 = 旧位置 + oldCap


### 5、HashMap 在1.7情况下的多线程死循环问题

jdk7 的的数据结构是：数组 + 链表
在数组进行扩容的时候，因为链表是**头插法**，在进行数据迁移的过程中，有可能导致死循环

![img_44.png](images/img_44.png)
![img_45.png](images/img_45.png)

#### 总结

在 jdk1.7 的 hashmap 中在数组进行扩容的时候，因为链表是头插法，在进行数据迁移的过程中，有可能导致死循环。


比如说，现在有两个线程
线程一：读取到当前的 hashmap 数据，数据中一个链表，在准备扩容时，线程二介入
线程二：也读取 hashmap ，直接进行扩容。因为是头插法，链表的顺序会进行颠倒过来。比如原来的顺序是 AB ，扩容
后的顺序是 BA ，线程二执行结束。
线程一：继续执行的时候就会出现死循环的问题。
线程一先将 A 移入新的链表，再将 B 插入到链头，由于另外一个线程的原因， B 的 next 指向了 A ，所以 B->A->B, 形
成循环。

当然， JDK 8 将扩容算法做了调整，不再将元素加入链表头（而是保持与扩容前一样的顺序），**尾插法**，就避免了 jdk7中死循环的问题。







