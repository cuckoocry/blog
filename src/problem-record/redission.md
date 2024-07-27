---
title: redisson分布式锁的使用
date: 2024-05-19
category:
  - redisson
  - 分布式锁
tag:
  - redisson
---

## 项目中redisson分布式锁的使用

::: tip
Redisson 分布式锁在处理分布式系统中的并发问题时非常有用。通过确保关键代码块在任何时候只有一个实例在执行，可以有效避免数据不一致和竞争条件。常见的使用场景包括资源访问控制、任务调度、库存管理、分布式事务、分布式队列、限流和熔断以及缓存更新等。

可参考：https://doc.ruoyi.vip/ruoyi-vue/document/cjjc.html#%E9%9B%86%E6%88%90redisson%E5%AE%9E%E7%8E%B0redis%E5%88%86%E5%B8%83%E5%BC%8F%E9%94%81
:::


## 在springboot中的实践

### 1、引入依赖

```xml
<!-- Redisson 锁功能 -->
<dependency>
	<groupId>org.redisson</groupId>
	<artifactId>redisson-spring-boot-starter</artifactId>
	<version>3.16.2</version>
</dependency>
```

### 2、直接使用(前提已经引入redis)

```java
@Autowired
private RedissonClient redissonClient;

RLock lock = redissonClient.getLock("faClSxLock");
        try {
            // 尝试获取锁，等待时间10秒，租赁时间60秒
            if (lock.tryLock(10, 60, TimeUnit.SECONDS)) {
                try {
                    // TODO 需要保证并发问题的业务逻辑
                } finally {
                    lock.unlock();
                }
            } else {
                // 获取锁失败，处理逻辑
                throw new RuntimeException("Unable to acquire lock");
            }
        } catch (InterruptedException e) {
            Thread.currentThread().interrupt();
            throw new RuntimeException("Lock acquisition interrupted", e);
        }
```



