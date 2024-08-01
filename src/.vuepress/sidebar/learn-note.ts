export const learnNote = [
  //  学习笔记目录
  {
    text: "大厂面试第二季",
    // icon: "edit",
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
    // icon: "edit",
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
        link: "Microservices/"
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
    text: "黑马面试宝典",
    prefix: "heima-baodian/",
    collapsible: true,
    children:[
      "",
      {
        text: "基础",
        // icon: "stack",
        link: "base/",
      },
      {
        text: "并发",
        // icon: "stack",
        link: "concurrency/",
      },
      {
        text: "虚拟机",
        // icon: "stack",
        link: "jvm/",
      },
      {
        text: "框架",
        // icon: "stack",
        link: "framework/",
      }


      ]
  },

  {
    text: "JVM",
    // icon: "edit",
    link: "JVM/"
  },
  {
    text: "计算机网络",
    // icon: "network",
    prefix: "计算机网络/",
    collapsible: true,
    children: [
      "",
      "one/",
      "https-http/",
      "TCP/",
      "four/",
      "five/",
      "http-state/",
    ],

  },
  {
    text: "SpringBoot",
    // icon: "edit",
    prefix: "spring-boot/",
    collapsible: true,
    children: [
      "",
    ],

  },
  {
    text: "SpringCloud",
    // icon: "edit",
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
    text: "RocketMQ",
    // icon: "edit",
    prefix: "RocketMQ/",
    collapsible: true,
    children: [
      ""
    ],

  },
  {
    text: "Redis",
    // icon: "edit",
    link: "Redis/"
  },

];
