---
title: 面试指南-Java并发编程
category: 面试
order: 3
---


::: tip

Be a better version of yourself

:::

## 线程的基础知识


### 1、线程和进程的区别？
二者对比
- 进程（系统运行程序的基本单位）是正在运行程序的实例，进程中包含了线程，每个线程执行不同的任务
- 不同的进程使用不同的内存空间，在当前进程下的所有线程可以共享内存空间
- 线程更轻量，线程上下文切换成本一般上要比进程上下文切换低 ( 上下文切换指的是从一个线程切换到另一个线程 )

### 2、并行与并发有什么区别？

**并发**：两个及两个以上的作业在同一 **时间段** 内执行。
**并行**：两个及两个以上的作业在同一 **时刻** 执行。

最关键的点是：是否是**同时**执行

另一种说法：
现在都是多核 CPU ，在多核 CPU 下
- 并发是同一时间应对多件事情的能力，多个线程轮流使用一个或多个 CPU
- 并行是同一时间动手做多件事情的能力， 4 核 CPU 同时执行 4 个线程


### 3、**创建线程的方式有哪些**？

### 3、**创建线程的方式有哪些**？

共有四种方式可以创建线程，分别是：
- 继承 Thread 类
- 实现 Runnable 接口
- 实现 Callable 接口
- 线程池创建线程

1. 继承Thread类，重写run()方法，调用start()方法启动线程

```java
public class MyThread extends Thread {
    @Override
    public void run() {
        System.out.println("MyThread...run...");
    }
    public static void main(String[] args) {
        // 创建 MyThread 对象
        MyThread t1 = new MyThread() ;
        MyThread t2 = new MyThread() ;
        // 调用 start 方法启动线程
        t1.start();
        t2.start();
    }
}


```

2. 实现 Runnable 接口，重写run()方法，调用start()方法启动线程

```java
public class RunnableTask implements Runnable {
    
   @Override
   public void run() {
      System.out.println("Runnable!");
   }

   public static void main(String[] args) {
       // 创建RunnableTask对象
      RunnableTask task = new RunnableTask();
      
      // 创建Thread对象
      Thread thread = new Thread(task);
      
      // 启动调用
      thread.start();
   }
}


```

3. 实现Callable接口，重写`call()`方法，这种方式可以通过`FutureTask`获取任务执行的返回值。需要使用ExecutorService来提交Callable任务。

```java
public class CallerTask implements Callable<String> {

   @Override
   public String call() throws Exception {
      System.out.println(Thread.currentThread().getName());
      return "Hello,i am running!";
   }

   public static void main(String[] args) {
       // 创建 CallerTask 对象
       CallerTask callerTask =  new CallerTask()
       //创建异步任务 FutureTask
       FutureTask<String> task = new FutureTask<>(callerTask);
       // 创建Thread对象
       Thread thread = new Thread(task);
       
       // 调用 start 方法启动线程
       thread.start();
       
      try {
         // 等待执行完成，并获取返回结果
         String result = task.get();
         System.out.println(result);
      } catch (InterruptedException e) {
         e.printStackTrace();
      } catch (ExecutionException e) {
         e.printStackTrace();
      }
   }
}
```

4. 线程池 (http://localhost:8099/xiaofeipeng/study-notes/%E5%A4%A7%E5%8E%82%E9%9D%A2%E8%AF%95%E7%AC%AC%E4%BA%8C%E5%AD%A3/10_%E7%BA%BF%E7%A8%8B%E6%B1%A0/)
```java
public class Main {

    public static void main(String[] args) {

        // 手写线程池
        final Integer corePoolSize = 2;
        final Integer maximumPoolSize = 5;
        final Long keepAliveTime = 1L;

        // 自定义线程池，只改变了LinkBlockingQueue的队列大小
        ExecutorService executorService = new ThreadPoolExecutor(
                corePoolSize,
                maximumPoolSize,
                keepAliveTime,
                TimeUnit.SECONDS,
                new LinkedBlockingQueue<>(3),
                Executors.defaultThreadFactory(),
                new ThreadPoolExecutor.AbortPolicy());

        try {

            // 循环十次，模拟业务办理，让5个线程处理这10个请求
            for (int i = 0; i < 10; i++) {
                final int tempInt = i;
                //executorService.submit(() -> Thread.currentThread().getName());

                executorService.execute(() -> {
                    System.out.println(Thread.currentThread().getName() + "\t 给用户:" + tempInt + " 办理业务");
                });
            }
        } catch (Exception e) {
            e.printStackTrace();
        } finally {
            executorService.shutdown();
        }

    }
}


```


> 严格来说，Java 就只有一种方式可以创建线程，那就是通过new Thread().start()创建。不管是哪种方式，最终还是依赖于new Thread().start()。


#### Runnable 和 Callable 有什么区别？

1. Runnable 接口 run 方法没有返回值
2. Callable 接口 call 方法有返回值，是个泛型，和 Future 、 FutureTask 配合可以用来获取异步执行的结果
3. Callable 接口的 `call()` 方法允许抛出异常；而 Runnable 接口的 run() 方法的异常只能在内部消化，不能继续上抛

#### 线程的 run() 和 start() 有什么区别？

start(): 用来启动线程，通过该线程调用 run 方法执行 run 方法中所定义的逻辑代码。 start 方法只能被调用一次。
run(): 封装了要被线程执行的代码，可以被调用多次。


### 4、线程包括哪些状态，状态之间是如何变化的


1. 线程包括哪些状态

- 新建（ NEW ）
- 可运行（ RUNNABLE ）
- 阻塞（ BLOCKED ）
- 等待 （ WAITING ）
- 时间等待（ TIMED_WALTING ）
- 终止（ TERMINATED ）

2. 线程状态之间是如何变化的

- 创建线程对象是新建状态
- 调用了 start() 方法转变为可执行状态
- 线程获取到了 CPU 的执行权，执行结束是终止状态
- 在可执行状态的过程中，如果没有获取 CPU 的执行权，可能会切换其他状态
    - 如果没有获取锁（ synchronized 或 lock ）进入阻塞状态，获得锁再切换为可执行状态
    - 如果线程调用了 wait() 方法进入等待状态，其他线程调用 notify() 唤醒后可切换为可执行状态
    - 如果线程调用了 sleep(50) 方法，进入计时等待状态，到时间后可切换为可执行状态

### 5、新建 T1 、 T2 、 T3 三个线程，如何保证它们按顺序执行？

可以使用线程中的 join 方法解决。

```
join() 等待线程运行结束。

小例子：
t.join()
阻塞调用此方法的线程进入 timed_waiting
直到线程 t 执行完成后，此线程再继续执行
```

```java
public class Test {
    public static void main(String[] args) {

        Thread t1 = new Thread(()->{
            System.out.println("t1");
        });

        Thread t2 = new Thread(()->{
            try {
                t1.join();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("t2");
        });

        Thread t3 = new Thread(()->{
            try {
                t2.join();
            } catch (InterruptedException e) {
                throw new RuntimeException(e);
            }
            System.out.println("t3");
        });
        // 虽然先启动t3，但是 必须先等t2完成，她t2必须先等t1完成
        t3.start();
        t2.start();
        t1.start();
    }
}

```
结果：
```shell
C:\myJava2\Java\jdk1.8.0_201\bin\java.exe "-javaagent:C:\Program Files\JetBrains\IntelliJ IDEA 2022.3.2\lib\idea_rt.jar=13847:C:\Program Files\JetBrains\IntelliJ IDEA 2022.3.2\bin" -Dfile.encoding=UTF-8 -classpath C:\myJava2\Java\jdk1.8.0_201\jre\lib\charsets.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\deploy.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\access-bridge-64.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\cldrdata.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\dnsns.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\jaccess.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\jfxrt.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\localedata.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\nashorn.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\sunec.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\sunjce_provider.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\sunmscapi.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\sunpkcs11.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\ext\zipfs.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\javaws.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\jce.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\jfr.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\jfxswt.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\jsse.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\management-agent.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\plugin.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\resources.jar;C:\myJava2\Java\jdk1.8.0_201\jre\lib\rt.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-admin\target\classes;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-devtools\2.5.14\spring-boot-devtools-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot\2.5.14\spring-boot-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-core\5.3.20\spring-core-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-jcl\5.3.20\spring-jcl-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-context\5.3.20\spring-context-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-beans\5.3.20\spring-beans-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-expression\5.3.20\spring-expression-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-autoconfigure\2.5.14\spring-boot-autoconfigure-2.5.14.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-spring-boot-starter\3.0.3\knife4j-spring-boot-starter-3.0.3.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-spring-boot-autoconfigure\3.0.3\knife4j-spring-boot-autoconfigure-3.0.3.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-spring\3.0.3\knife4j-spring-3.0.3.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-annotations\3.0.3\knife4j-annotations-3.0.3.jar;C:\Users\jiang\.m2\repository\io\swagger\swagger-annotations\1.5.22\swagger-annotations-1.5.22.jar;C:\Users\jiang\.m2\repository\io\swagger\core\v3\swagger-annotations\2.1.2\swagger-annotations-2.1.2.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-core\3.0.3\knife4j-core-3.0.3.jar;C:\Users\jiang\.m2\repository\org\javassist\javassist\3.25.0-GA\javassist-3.25.0-GA.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-swagger2\3.0.0\springfox-swagger2-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-spi\3.0.0\springfox-spi-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-schema\3.0.0\springfox-schema-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-swagger-common\3.0.0\springfox-swagger-common-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-spring-web\3.0.0\springfox-spring-web-3.0.0.jar;C:\Users\jiang\.m2\repository\io\github\classgraph\classgraph\4.8.83\classgraph-4.8.83.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-spring-webflux\3.0.0\springfox-spring-webflux-3.0.0.jar;C:\Users\jiang\.m2\repository\org\mapstruct\mapstruct\1.3.1.Final\mapstruct-1.3.1.Final.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-spring-webmvc\3.0.0\springfox-spring-webmvc-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-core\3.0.0\springfox-core-3.0.0.jar;C:\Users\jiang\.m2\repository\net\bytebuddy\byte-buddy\1.10.22\byte-buddy-1.10.22.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-oas\3.0.0\springfox-oas-3.0.0.jar;C:\Users\jiang\.m2\repository\io\swagger\core\v3\swagger-models\2.1.2\swagger-models-2.1.2.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-bean-validators\3.0.0\springfox-bean-validators-3.0.0.jar;C:\Users\jiang\.m2\repository\io\swagger\swagger-models\1.5.22\swagger-models-1.5.22.jar;C:\Users\jiang\.m2\repository\io\swagger\swagger-core\1.5.22\swagger-core-1.5.22.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\dataformat\jackson-dataformat-yaml\2.12.6\jackson-dataformat-yaml-2.12.6.jar;C:\Users\jiang\.m2\repository\javax\validation\validation-api\2.0.1.Final\validation-api-2.0.1.Final.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-boot-starter\3.0.0\springfox-boot-starter-3.0.0.jar;C:\Users\jiang\.m2\repository\io\springfox\springfox-data-rest\3.0.0\springfox-data-rest-3.0.0.jar;C:\Users\jiang\.m2\repository\com\fasterxml\classmate\1.5.1\classmate-1.5.1.jar;C:\Users\jiang\.m2\repository\org\springframework\plugin\spring-plugin-core\2.0.0.RELEASE\spring-plugin-core-2.0.0.RELEASE.jar;C:\Users\jiang\.m2\repository\org\springframework\plugin\spring-plugin-metadata\2.0.0.RELEASE\spring-plugin-metadata-2.0.0.RELEASE.jar;C:\Users\jiang\.m2\repository\com\github\xiaoymin\knife4j-spring-ui\3.0.3\knife4j-spring-ui-3.0.3.jar;C:\Users\jiang\.m2\repository\mysql\mysql-connector-java\8.0.29\mysql-connector-java-8.0.29.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-framework\target\classes;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-web\2.5.14\spring-boot-starter-web-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter\2.5.14\spring-boot-starter-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-logging\2.5.14\spring-boot-starter-logging-2.5.14.jar;C:\Users\jiang\.m2\repository\ch\qos\logback\logback-classic\1.2.11\logback-classic-1.2.11.jar;C:\Users\jiang\.m2\repository\ch\qos\logback\logback-core\1.2.11\logback-core-1.2.11.jar;C:\Users\jiang\.m2\repository\org\apache\logging\log4j\log4j-to-slf4j\2.17.2\log4j-to-slf4j-2.17.2.jar;C:\Users\jiang\.m2\repository\org\apache\logging\log4j\log4j-api\2.17.2\log4j-api-2.17.2.jar;C:\Users\jiang\.m2\repository\org\slf4j\jul-to-slf4j\1.7.36\jul-to-slf4j-1.7.36.jar;C:\Users\jiang\.m2\repository\jakarta\annotation\jakarta.annotation-api\1.3.5\jakarta.annotation-api-1.3.5.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-json\2.5.14\spring-boot-starter-json-2.5.14.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\datatype\jackson-datatype-jdk8\2.12.6\jackson-datatype-jdk8-2.12.6.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\datatype\jackson-datatype-jsr310\2.12.6\jackson-datatype-jsr310-2.12.6.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\module\jackson-module-parameter-names\2.12.6\jackson-module-parameter-names-2.12.6.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-web\5.3.20\spring-web-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-webmvc\5.3.20\spring-webmvc-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-jetty\2.5.14\spring-boot-starter-jetty-2.5.14.jar;C:\Users\jiang\.m2\repository\jakarta\servlet\jakarta.servlet-api\4.0.4\jakarta.servlet-api-4.0.4.jar;C:\Users\jiang\.m2\repository\jakarta\websocket\jakarta.websocket-api\1.1.2\jakarta.websocket-api-1.1.2.jar;C:\Users\jiang\.m2\repository\org\apache\tomcat\embed\tomcat-embed-el\9.0.63\tomcat-embed-el-9.0.63.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-servlets\9.4.46.v20220331\jetty-servlets-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-continuation\9.4.46.v20220331\jetty-continuation-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-http\9.4.46.v20220331\jetty-http-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-util\9.4.46.v20220331\jetty-util-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-io\9.4.46.v20220331\jetty-io-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-webapp\9.4.46.v20220331\jetty-webapp-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-xml\9.4.46.v20220331\jetty-xml-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-servlet\9.4.46.v20220331\jetty-servlet-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-security\9.4.46.v20220331\jetty-security-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-server\9.4.46.v20220331\jetty-server-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-util-ajax\9.4.46.v20220331\jetty-util-ajax-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\websocket-server\9.4.46.v20220331\websocket-server-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\websocket-common\9.4.46.v20220331\websocket-common-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\websocket-api\9.4.46.v20220331\websocket-api-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\websocket-client\9.4.46.v20220331\websocket-client-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-client\9.4.46.v20220331\jetty-client-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\websocket-servlet\9.4.46.v20220331\websocket-servlet-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\javax-websocket-server-impl\9.4.46.v20220331\javax-websocket-server-impl-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-annotations\9.4.46.v20220331\jetty-annotations-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\jetty-plus\9.4.46.v20220331\jetty-plus-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\ow2\asm\asm\9.2\asm-9.2.jar;C:\Users\jiang\.m2\repository\org\ow2\asm\asm-commons\9.2\asm-commons-9.2.jar;C:\Users\jiang\.m2\repository\org\ow2\asm\asm-tree\9.2\asm-tree-9.2.jar;C:\Users\jiang\.m2\repository\org\ow2\asm\asm-analysis\9.2\asm-analysis-9.2.jar;C:\Users\jiang\.m2\repository\org\eclipse\jetty\websocket\javax-websocket-client-impl\9.4.46.v20220331\javax-websocket-client-impl-9.4.46.v20220331.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-aop\2.5.14\spring-boot-starter-aop-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-aop\5.3.20\spring-aop-5.3.20.jar;C:\Users\jiang\.m2\repository\org\aspectj\aspectjweaver\1.9.7\aspectjweaver-1.9.7.jar;C:\Users\jiang\.m2\repository\com\alibaba\druid-spring-boot-starter\1.2.16\druid-spring-boot-starter-1.2.16.jar;C:\Users\jiang\.m2\repository\com\alibaba\druid\1.2.16\druid-1.2.16.jar;C:\Users\jiang\.m2\repository\org\slf4j\slf4j-api\1.7.36\slf4j-api-1.7.36.jar;C:\Users\jiang\.m2\repository\pro\fessional\kaptcha\2.3.3\kaptcha-2.3.3.jar;C:\Users\jiang\.m2\repository\com\jhlabs\filters\2.0.235-1\filters-2.0.235-1.jar;C:\Users\jiang\.m2\repository\javax\servlet\servlet-api\2.5\servlet-api-2.5.jar;C:\Users\jiang\.m2\repository\com\github\oshi\oshi-core\6.4.0\oshi-core-6.4.0.jar;C:\Users\jiang\.m2\repository\net\java\dev\jna\jna\5.12.1\jna-5.12.1.jar;C:\Users\jiang\.m2\repository\net\java\dev\jna\jna-platform\5.12.1\jna-platform-5.12.1.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-system\target\classes;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-quartz\target\classes;C:\Users\jiang\.m2\repository\org\quartz-scheduler\quartz\2.3.2\quartz-2.3.2.jar;C:\Users\jiang\.m2\repository\com\mchange\mchange-commons-java\0.2.15\mchange-commons-java-0.2.15.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-common\target\classes;C:\Users\jiang\.m2\repository\org\projectlombok\lombok\1.18.24\lombok-1.18.24.jar;C:\Users\jiang\.m2\repository\io\minio\minio\8.2.1\minio-8.2.1.jar;C:\Users\jiang\.m2\repository\com\carrotsearch\thirdparty\simple-xml-safe\2.7.1\simple-xml-safe-2.7.1.jar;C:\Users\jiang\.m2\repository\com\google\guava\guava\29.0-jre\guava-29.0-jre.jar;C:\Users\jiang\.m2\repository\com\google\guava\failureaccess\1.0.1\failureaccess-1.0.1.jar;C:\Users\jiang\.m2\repository\com\google\guava\listenablefuture\9999.0-empty-to-avoid-conflict-with-guava\listenablefuture-9999.0-empty-to-avoid-conflict-with-guava.jar;C:\Users\jiang\.m2\repository\com\google\code\findbugs\jsr305\3.0.2\jsr305-3.0.2.jar;C:\Users\jiang\.m2\repository\org\checkerframework\checker-qual\2.11.1\checker-qual-2.11.1.jar;C:\Users\jiang\.m2\repository\com\google\errorprone\error_prone_annotations\2.3.4\error_prone_annotations-2.3.4.jar;C:\Users\jiang\.m2\repository\com\google\j2objc\j2objc-annotations\1.3\j2objc-annotations-1.3.jar;C:\Users\jiang\.m2\repository\com\squareup\okhttp3\okhttp\3.14.9\okhttp-3.14.9.jar;C:\Users\jiang\.m2\repository\com\squareup\okio\okio\1.17.2\okio-1.17.2.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\core\jackson-annotations\2.12.6\jackson-annotations-2.12.6.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\core\jackson-core\2.12.6\jackson-core-2.12.6.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-context-support\5.3.20\spring-context-support-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-security\2.5.14\spring-boot-starter-security-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\security\spring-security-config\5.5.8\spring-security-config-5.5.8.jar;C:\Users\jiang\.m2\repository\org\springframework\security\spring-security-core\5.5.8\spring-security-core-5.5.8.jar;C:\Users\jiang\.m2\repository\org\springframework\security\spring-security-crypto\5.5.8\spring-security-crypto-5.5.8.jar;C:\Users\jiang\.m2\repository\org\springframework\security\spring-security-web\5.5.8\spring-security-web-5.5.8.jar;C:\Users\jiang\.m2\repository\com\github\pagehelper\pagehelper-spring-boot-starter\1.4.6\pagehelper-spring-boot-starter-1.4.6.jar;C:\Users\jiang\.m2\repository\org\mybatis\spring\boot\mybatis-spring-boot-starter\2.2.2\mybatis-spring-boot-starter-2.2.2.jar;C:\Users\jiang\.m2\repository\org\mybatis\spring\boot\mybatis-spring-boot-autoconfigure\2.2.2\mybatis-spring-boot-autoconfigure-2.2.2.jar;C:\Users\jiang\.m2\repository\org\mybatis\mybatis\3.5.9\mybatis-3.5.9.jar;C:\Users\jiang\.m2\repository\org\mybatis\mybatis-spring\2.0.7\mybatis-spring-2.0.7.jar;C:\Users\jiang\.m2\repository\com\github\pagehelper\pagehelper-spring-boot-autoconfigure\1.4.6\pagehelper-spring-boot-autoconfigure-1.4.6.jar;C:\Users\jiang\.m2\repository\com\github\pagehelper\pagehelper\5.3.2\pagehelper-5.3.2.jar;C:\Users\jiang\.m2\repository\com\github\jsqlparser\jsqlparser\4.5\jsqlparser-4.5.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-validation\2.5.14\spring-boot-starter-validation-2.5.14.jar;C:\Users\jiang\.m2\repository\org\hibernate\validator\hibernate-validator\6.2.3.Final\hibernate-validator-6.2.3.Final.jar;C:\Users\jiang\.m2\repository\jakarta\validation\jakarta.validation-api\2.0.2\jakarta.validation-api-2.0.2.jar;C:\Users\jiang\.m2\repository\org\jboss\logging\jboss-logging\3.4.3.Final\jboss-logging-3.4.3.Final.jar;C:\Users\jiang\.m2\repository\org\apache\commons\commons-lang3\3.12.0\commons-lang3-3.12.0.jar;C:\Users\jiang\.m2\repository\com\fasterxml\jackson\core\jackson-databind\2.12.6.1\jackson-databind-2.12.6.1.jar;C:\Users\jiang\.m2\repository\com\baomidou\dynamic-datasource-spring-boot-starter\3.5.2\dynamic-datasource-spring-boot-starter-3.5.2.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-jdbc\2.5.14\spring-boot-starter-jdbc-2.5.14.jar;C:\Users\jiang\.m2\repository\com\zaxxer\HikariCP\4.0.3\HikariCP-4.0.3.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-jdbc\5.3.20\spring-jdbc-5.3.20.jar;C:\Users\jiang\.m2\repository\com\alibaba\fastjson2\fastjson2\2.0.25\fastjson2-2.0.25.jar;C:\Users\jiang\.m2\repository\commons-io\commons-io\2.11.0\commons-io-2.11.0.jar;C:\Users\jiang\.m2\repository\org\yaml\snakeyaml\1.28\snakeyaml-1.28.jar;C:\Users\jiang\.m2\repository\io\jsonwebtoken\jjwt\0.9.1\jjwt-0.9.1.jar;C:\Users\jiang\.m2\repository\javax\xml\bind\jaxb-api\2.3.1\jaxb-api-2.3.1.jar;C:\Users\jiang\.m2\repository\javax\activation\javax.activation-api\1.2.0\javax.activation-api-1.2.0.jar;C:\Users\jiang\.m2\repository\org\springframework\boot\spring-boot-starter-data-redis\2.5.14\spring-boot-starter-data-redis-2.5.14.jar;C:\Users\jiang\.m2\repository\org\springframework\data\spring-data-redis\2.5.11\spring-data-redis-2.5.11.jar;C:\Users\jiang\.m2\repository\org\springframework\data\spring-data-keyvalue\2.5.11\spring-data-keyvalue-2.5.11.jar;C:\Users\jiang\.m2\repository\org\springframework\data\spring-data-commons\2.5.11\spring-data-commons-2.5.11.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-tx\5.3.20\spring-tx-5.3.20.jar;C:\Users\jiang\.m2\repository\org\springframework\spring-oxm\5.3.20\spring-oxm-5.3.20.jar;C:\Users\jiang\.m2\repository\io\lettuce\lettuce-core\6.1.8.RELEASE\lettuce-core-6.1.8.RELEASE.jar;C:\Users\jiang\.m2\repository\io\netty\netty-common\4.1.77.Final\netty-common-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\netty\netty-handler\4.1.77.Final\netty-handler-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\netty\netty-resolver\4.1.77.Final\netty-resolver-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\netty\netty-buffer\4.1.77.Final\netty-buffer-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\netty\netty-codec\4.1.77.Final\netty-codec-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\netty\netty-transport\4.1.77.Final\netty-transport-4.1.77.Final.jar;C:\Users\jiang\.m2\repository\io\projectreactor\reactor-core\3.4.18\reactor-core-3.4.18.jar;C:\Users\jiang\.m2\repository\org\reactivestreams\reactive-streams\1.0.3\reactive-streams-1.0.3.jar;C:\Users\jiang\.m2\repository\org\apache\commons\commons-pool2\2.9.0\commons-pool2-2.9.0.jar;C:\Users\jiang\.m2\repository\eu\bitwalker\UserAgentUtils\1.21\UserAgentUtils-1.21.jar;C:\Users\jiang\.m2\repository\javax\servlet\javax.servlet-api\4.0.1\javax.servlet-api-4.0.1.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-generator\target\classes;C:\Users\jiang\.m2\repository\org\apache\velocity\velocity-engine-core\2.3\velocity-engine-core-2.3.jar;C:\Users\jiang\.m2\repository\commons-collections\commons-collections\3.2.2\commons-collections-3.2.2.jar;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-dishes\target\classes;C:\IdeaProjectMyself\RuoYi-Vue-Jiang\ruoyi-paperwork\target\classes;C:\Users\jiang\.m2\repository\com\deepoove\poi-tl\1.12.1\poi-tl-1.12.1.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-transcoder\1.14\batik-transcoder-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-anim\1.14\batik-anim-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-css\1.14\batik-css-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-ext\1.14\batik-ext-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-parser\1.14\batik-parser-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-svg-dom\1.14\batik-svg-dom-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-awt-util\1.14\batik-awt-util-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\xmlgraphics-commons\2.6\xmlgraphics-commons-2.6.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-bridge\1.14\batik-bridge-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-script\1.14\batik-script-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-dom\1.14\batik-dom-1.14.jar;C:\Users\jiang\.m2\repository\xml-apis\xml-apis\1.4.01\xml-apis-1.4.01.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-gvt\1.14\batik-gvt-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-shared-resources\1.14\batik-shared-resources-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-svggen\1.14\batik-svggen-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-util\1.14\batik-util-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-constants\1.14\batik-constants-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-i18n\1.14\batik-i18n-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-xml\1.14\batik-xml-1.14.jar;C:\Users\jiang\.m2\repository\xml-apis\xml-apis-ext\1.3.04\xml-apis-ext-1.3.04.jar;C:\Users\jiang\.m2\repository\org\apache\xmlgraphics\batik-codec\1.14\batik-codec-1.14.jar;C:\Users\jiang\.m2\repository\org\apache\poi\poi-ooxml\4.1.2\poi-ooxml-4.1.2.jar;C:\Users\jiang\.m2\repository\org\apache\poi\poi\4.1.2\poi-4.1.2.jar;C:\Users\jiang\.m2\repository\commons-codec\commons-codec\1.15\commons-codec-1.15.jar;C:\Users\jiang\.m2\repository\org\apache\commons\commons-collections4\4.4\commons-collections4-4.4.jar;C:\Users\jiang\.m2\repository\org\apache\commons\commons-math3\3.6.1\commons-math3-3.6.1.jar;C:\Users\jiang\.m2\repository\com\zaxxer\SparseBitSet\1.2\SparseBitSet-1.2.jar;C:\Users\jiang\.m2\repository\org\apache\poi\poi-ooxml-schemas\4.1.2\poi-ooxml-schemas-4.1.2.jar;C:\Users\jiang\.m2\repository\org\apache\xmlbeans\xmlbeans\3.1.0\xmlbeans-3.1.0.jar;C:\Users\jiang\.m2\repository\org\apache\commons\commons-compress\1.19\commons-compress-1.19.jar;C:\Users\jiang\.m2\repository\com\github\virtuald\curvesapi\1.06\curvesapi-1.06.jar;C:\Users\jiang\.m2\repository\com\itextpdf\itextpdf\5.5.13.2\itextpdf-5.5.13.2.jar;C:\Users\jiang\.m2\repository\org\im4java\im4java\1.4.0\im4java-1.4.0.jar;C:\Users\jiang\.m2\repository\com\github\sarxos\webcam-capture\0.3.12\webcam-capture-0.3.12.jar;C:\Users\jiang\.m2\repository\com\nativelibs4java\bridj\0.7.0\bridj-0.7.0.jar;C:\Users\jiang\.m2\repository\org\apache\pdfbox\pdfbox\2.0.24\pdfbox-2.0.24.jar;C:\Users\jiang\.m2\repository\org\apache\pdfbox\fontbox\2.0.24\fontbox-2.0.24.jar;C:\Users\jiang\.m2\repository\commons-logging\commons-logging\1.2\commons-logging-1.2.jar;C:\Users\jiang\.m2\repository\com\github\jai-imageio\jai-imageio-core\1.4.0\jai-imageio-core-1.4.0.jar com.ruoyi.web.controller.tool.Test
t1
t2
t3

Process finished with exit code 0

```


### 6、notify() 和 notifyAll() 有什么区别？

- notifyAll ：唤醒所有 wait 的线程
- notify ：只随机唤醒一个 wait 线程

### 7、java 中 wait 和 sleep 方法的不同？

**共同点**：两者都可以暂停线程的执行。

区别：
- `sleep()` 方法没有释放锁，而 `wait()` 方法释放了锁 。
- wait() 通常被用于线程间交互/通信，sleep()通常被用于暂停执行。
- wait() 方法被调用后，线程不会自动苏醒，需要别的线程调用同一个对象上的 notify()或者 notifyAll() 方法。sleep()方法执行完成后，线程会自动苏醒，或者也可以使用 wait(long timeout) 超时后线程会自动苏醒。
- sleep() 是 Thread 类的静态本地方法，wait() 则是 Object 类的本地方法。

#### 为什么 wait() 方法不定义在 Thread 中？

wait() 是让获得对象锁的线程实现等待，会自动释放当前线程占有的对象锁。每个对象（Object）都拥有对象锁，既然要释放当前线程占有的对象锁并让其进入 WAITING 状态，自然是要操作对应的对象（Object）而非当前的线程（Thread）。
类似的问题：为什么 sleep() 方法定义在 Thread 中？因为 sleep() 是让当前线程暂停执行，不涉及到对象类，也不需要获得对象锁。可以直接调用 Thread 类的 run 方法吗？


### 8、如何停止一个正在运行的线程？


1. 使用退出标志，使线程正常退出，也就是当 run 方法完成后线程终止
2. 使用 stop 方法强行终止（不推荐，方法已作废）
3. 使用 interrupt 方法中断线程
- 打断阻塞的线程（ sleep ， wait ， join ）的线程，线程会抛出 InterruptedException 异常。
- 打断正常的线程，可以根据打断状态来标记是否退出线程。




## 线程中并发安全




