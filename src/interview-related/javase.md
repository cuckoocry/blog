---
title: 面试指南-java基础
category: 面试指南
order: 1
---


::: tip

Be a better version of yourself

:::


## 基础


##  进阶

### 1、泛型


Java 泛型（generics） 是 JDK 5 中引入的一个新特性, 泛型提供了编译时类型安全检测机制，该机制允许程序员在编译时检测到非法的类型。泛型的本质是参数化类型，也就是说所操作的数据类型被指定为一个参数。

Java 的泛型是伪泛型，这是因为 Java 在运行期间，所有的泛型信息都会被擦掉，这也就是通常所说类型擦除 。

```java
List<Integer> list = new ArrayList<>();

list.add(12);
//这里直接添加会报错
list.add("a");

Class<? extends List> clazz = list.getClass();
Method add = clazz.getDeclaredMethod("add", Object.class);
//但是通过反射添加是可以的
//这就说明在运行期间所有的泛型信息都会被擦掉
add.invoke(list, "kl");
System.out.println(list);

```

泛型一般有三种使用方式: 泛型类、泛型接口、泛型方法。

### 2、反射

反射之所以被称为框架的灵魂，主要是因为它赋予了我们在**运行时分析类以及执行类中方法的能力**。

通过反射你可以获取任意一个**类的所有属性和方法，你还可以调用这些方法和属性**。

#### 反射应用场景

像 Spring/Spring Boot、MyBatis 等等框架中都大量使用了反射机制。这些框架中（比如AOP）也大量使用了动态代理，而动态代理的实现也依赖反射。

比如下面是通过 JDK 实现动态代理的示例代码，其中就使用了反射类 `Method` 来调用指定的方法。

```java
public class DebugInvocationHandler implements InvocationHandler {
    /**
     * 代理类中的真实对象
     */
    private final Object target;

    public DebugInvocationHandler(Object target) {
        this.target = target;
    }


    public Object invoke(Object proxy, Method method, Object[] args) throws InvocationTargetException, IllegalAccessException {
        System.out.println("before method " + method.getName());
        Object result = method.invoke(target, args);
        System.out.println("after method " + method.getName());
        return result;
    }
}
```

另外，像 Java 中的一大利器`注解` 的实现也用到了反射。

### 3、代理详解

代理模式：代理模式是一种比较好理解的设计模式。简单来说就是**我们使用代理对象来代替对真实对象(real object)的访问，这样就可以在不修改原目标对象的前提下，提供额外的功能操作，扩展目标对象的功能。**
**代理模式的主要作用是扩展目标对象的功能，比如说在目标对象的某个方法执行前后你可以增加一些自定义的操作。**

代理模式有静态代理和动态代理两种实现方式。

#### 静态代理

静态代理中，我们对目标对象的每个方法的增强都是手动完成的（后面会具体演示代码），非常不灵活（比如接口一旦新增加方法，目标对象和代理对象都要进行修改）且麻烦(需要对每个目标类都单独写一个代理类)。 


#### 动态代理

就 Java 来说，动态代理的实现方式有很多种，比如`JDK 动态代理`、`CGLIB 动态代理`等等。

JDK动态代理：

**在 Java 动态代理机制`InvocationHandler` 接口和`Proxy`类是核心。**

JDK 动态代理类使用步骤
定义一个接口及其实现类；
自定义 InvocationHandler 并重写invoke方法，在 invoke 方法中我们会调用原生方法（被代理类的方法）并自定义一些处理逻辑；
通过 Proxy.newProxyInstance(ClassLoader loader,Class<?>[] interfaces,InvocationHandler h) 方法创建代理对象；

CGLIB 动态代理:
Spring 中的 AOP 模块中：如果目标对象实现了接口，则默认采用 JDK 动态代理，否则采用 CGLIB 动态代理。

**在 CGLIB 动态代理机制中 `MethodInterceptor` 接口和 `Enhancer` 类是核心。**


JDK 动态代理和 CGLIB 动态代理对比：

JDK 动态代理只能代理实现了接口的类或者直接代理接口，而 CGLIB 可以代理未实现任何接口的类。 另外， CGLIB 动态代理是通过生成一个被代理类的子类来拦截被代理类的方法调用，因此不能代理声明为 final 类型的类和方法。
就二者的效率来说，大部分情况都是 JDK 动态代理更优秀，随着 JDK 版本的升级，这个优势更加明显。


### 4、异常