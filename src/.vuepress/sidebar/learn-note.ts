export const learnNote = [
  //  学习笔记目录
  {
    text: "大厂面试第二季",
    icon: "edit",
    prefix: "shangguigu-second/",
    collapsible: true,
    children:[
      {
        text: "1、Volatile",
        // icon: "edit",
        prefix: "volatile/",
        collapsible: true,
        children:[
          "one",
          "two",
          "three",
          "four"
        ]
      },
      "CAS/",
      "ABA/",
      "ArrayList/",
      {
        text: "5、Java的锁",
        collapsible: true,
        prefix: "lock/",
        children:[
          { text: "Java锁之读写锁", icon: "edit", link: "one" },
          "two",
          "three",
          "four",
          "five",
          "six"
        ]
      },
      {
        text: "6、CountDownLatch",
        collapsible: true,
        prefix: "CountDownLatch_CyclicBarrier_Semaphore/",
        children:[
          "countDownLatch",
          "CyclicBarrier",
          "Semaphore"
        ]
      },
      // "CountDownLatch_CyclicBarrier_Semaphore/countDownLatch",
      // "CountDownLatch_CyclicBarrier_Semaphore/CyclicBarrier",
      // "CountDownLatch_CyclicBarrier_Semaphore/Semaphore",
      "BlockingQueue/",
      "Synchronized-Lock/",
      "ThreadPool/",
      "SiSuo/",
      {
        text: "12、JVM",
        icon: "edit",
        collapsible: true,
        prefix: "JVM/",
        children:[
          "one",
          "two",
          "three",
          "four",
          "five",
          "six"
        ]
      },
      "Linux/",
      "github/"
    ]

  },
  {
    text: "大厂面试第三季",
    icon: "edit",
    prefix: "shangguigu-three/",
    collapsible: true,
    children: [
      "",
      "one",
      "two",
      "ReentrantLock/",
      "LockSupport/",
      "WaitNotify/",
      "await-signal",
      "LockSupport/",
      "AQS/",
      "Spring/",
      "Redis/",
      "UUID/"
    ],

  },
  {
    text: "JVM",
    icon: "edit",
    prefix: "JVM/",
    collapsible: true,
    children: [
       "",
      {
        text: "内存与垃圾回收篇",
        icon: "edit",
        prefix: "1_内存与垃圾回收篇/",
        collapsible: true,
        children:[
            "",
            "1_JVM与Java体系结构/",
            "2_类加载子系统/",
            "3_运行时数据区概述及线程/",
            "4_程序计数器/",
            "5_虚拟机栈/",
            "6_本地方法接口/",
            "7_本地方法栈/",
            "8_堆/",
            "9_方法区/",
            "10_对象实例化内存布局与访问定位/",
            "11_直接内存/",
            "12_执行引擎/",
            "13_StringTable/",
            "14_垃圾回收概述/",
            "15_垃圾回收相关算法/",
            "16_垃圾回收相关概念/",
            "17_垃圾回收器/",
        ]
      },
      {
        text: "字节码与类的加载篇",
        icon: "edit",
        prefix: "2_字节码与类的加载篇/",
        collapsible: true,
        children:[
            "",
            "01-class文件结构/",
            "02-字节码指令集/",
            "03-类的加载过程（类的生命周期）详解/",
            "04-再谈类的加载器/",
        ]
      },
      {
        text: "性能监控与调优篇",
        icon: "edit",
        prefix: "3_性能监控与调优篇/",
        collapsible: true,
        children:[
          "01-概述篇/",
          "02-JVM监控及诊断工具-命令行篇/",
          "03-JVM监控及诊断工具-GUI篇/",
          "04-JVM运行时参数/",
          "05-分析GC日志/",
          "补充：使用OQL语言查询对象信息/",
          "补充：浅堆深堆与内存泄露/"
        ]
      },
    ],

  },
  {
    text: "计算机网络",
    icon: "network",
    prefix: "计算机网络/",
    collapsible: true,
    children: [
      "",
      "1_三次握手和四次挥手/",
      "2_https和http/",
      "3_TCP中的拥塞控制和流量控制/",
      "4_物理层/",
      "5_数据链路层/",
      "http中的状态码/",
    ],

  },
  {
    text: "SpringBoot",
    icon: "edit",
    prefix: "SpringBoot/",
    collapsible: true,
    children: [
      "",
    ],

  },
  {
    text: "SpringCloud",
    icon: "edit",
    prefix: "SpringCloud/",
    collapsible: true,
    children: [
      "",
      "1_SpringCloud是什么/",
      "2_搭建一个SpringCloud项目/",
      "3_搭建Eureka集群/",
      "4_Eureka停更后的替换/",
      "5_Ribbon负载均衡/",
      "6_OpenFeign实现服务调用/",
      "7_Hystrix中的服务降级和熔断/",
      "8_服务网关Gateway/",
      "9_分布式配置中心SpringCloudConfig/",
      "10_消息总线Bus/",
      "11_消息驱动SpringCloudStream/",
      "12_SpringCloudSleuth分布式请求链路跟踪/",
      "13_Nacos是什么/",
      "14_SpringCloudAlibabaSentinel实现熔断和限流/",
      "15_SpringCloudAlibabaSeata处理分布式事务/"
    ],

  },
  {
    text: "ElasticStack技术栈",
    icon: "edit",
    prefix: "ElasticStack/",
    collapsible: true,
    children: [
      "",
      "1_ElasticSearch介绍与安装/",
      "2_Beats入门简介/",
      "3_Kibana安装与介绍/",
      "4_Logstash入门简介/",
      "5_ElasticStack综合案例/",
      "6_使用ELK搭建蘑菇博客日志收集/"
    ],

  },
  {
    text: "RocketMQ",
    icon: "edit",
    prefix: "RocketMQ/",
    collapsible: true,
    children: [
      ""
    ],

  },
  {
    text: "Redis",
    icon: "edit",
    prefix: "Redis/",
    collapsible: true,
    children: [
      "",
      {
        text: "入门篇",
        icon: "edit",
        collapsible: true,
        prefix: "入门篇/",
        children:[
          "",
          "Redis安装说明"
        ]
      },
      "实战篇/",
      {
        text: "高级篇",
        icon: "edit",
        collapsible: true,
        prefix: "高级篇/",
        children:[
          "01-分布式缓存/",
          "02-多级缓存/",
          "03-Redis最佳实践/"
        ]
      },
      "原理篇/",
    ],

  },

  {
    text: "黑马Java八股",
    prefix: "heima-java-bagu/",
    collapsible: true,
    children:[
      "",
      {
        text: "redis",
        // icon: "stack",
        prefix: "Redis/",
        collapsible: true,
        children:[
          "",
          "more"
        ]
      },
      {
        text: "MySQL",
        // icon: "mysql",
        prefix: "MySQL/",
        collapsible: true,
        children:[
          "",
          "more"
        ]
      },
      {
        text: "框架",
        // icon: "spring",
        prefix: "frame/",
        collapsible: true,
        children:[
          "",
          "spring/",
          "mybatis/"
        ]
      },
      {
        text: "微服务",
        // icon: "SpringCloud",
        prefix: "Microservices/",
        collapsible: true,
        children:[
          "",
          "more"
        ]
      },
      {
        text: "消息中间件",
        prefix: "message-middleware/",
        collapsible: true,
        children:[
          "",
          "more.md"
        ]
      },
      {
        text: "集合",
        prefix: "collection/",
        collapsible: true,
        children:[
          "",
          "more"
        ]
      },
      {
        text: "并发编程",
        prefix: "concurrent-programming/",
        collapsible: true,
        children:[
          "",
          "more"
        ]
      },
      {
        text: "JVM虚拟机",
        // icon: "stack",
        prefix: "JVM/",
        collapsible: true,
        children:[
          "",
        ]
      },
      {
        text: "实际场景",
        // icon: "stack",
        prefix: "enterprise-scenarios/",
        collapsible: true,
        children:[
          "design-patterns.md",
          "technical-scenarios.md"
        ]
      },

    ]
  },
  {
    text: "SpringBoot常⻅⾯试题总结",
    // icon: "spring",
    link: "spring-boot/"
  },
  {
    text: "短期突击面试题",
    // icon: "stack",
    link: "video-one/",
  },
  {
    text: "尚硅谷50道面试题",
    // icon: "stack",
    link: "written-test/",

  },



];
