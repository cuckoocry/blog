---
title: SpringBoot 常⻅⾯试题总结（JavaGuid收费篇）
category: 面试
tag:
 - SpringBoot
---

::: tip

SpringBoot 面试题专栏

:::


### 1、简单介绍⼀下 Spring?有啥缺点?

Spring 是重量级企业开发框架 `Enterprise JavaBean（EJB`） 的替代品，`Spring` 为企业级 `Java` 开发提供了⼀种相对简单的⽅法，通过 `依赖注⼊` 和 `⾯向切⾯编程` ，用简单的 Java 对象（Plain Old Java Object，POJO） 实现了 EJB的功能。

虽然`Spring` `的组件代码是轻量级的，但它的配置却是重量级的（需要⼤量 XML配置） 。

为此，Spring 2.5 引⼊了基于注解的组件扫描，这消除了⼤量针对应用程序⾃身组件的显式 XML 配置。Spring 3.0 引⼊了基于 Java 的配置，这是⼀种类型安全的可重构配置⽅式，可以代替 XML。

尽管如此，我们依旧没能逃脱配置的魔⽖。开启某些`Spring`特性时，⽐如事务管理和 `Spring MVC`，还是需要用 XML 或 Java 进⾏显式配置。
启用第三⽅库时也需要显式配置，⽐如基于 `Thymeleaf` 的 `Web` 视图。配置 `Servlet` 和过滤器

（⽐如 Spring 的	）同样需要在 web.xml 或 `Servlet` 初始化代码⾥进⾏显式配置。组件扫描减少了配置量，Java 配置让它看上去简洁不少，但 `Spring` 还是需要不少配置。

光配置这些 XML ⽂件都够我们头疼的了，占用了我们⼤部分时间和精⼒。除此之外，相关库的依赖⾮常让⼈头疼，不同库之间的版本冲突也⾮常常⻅。

### 2、为什么要有 SpringBoot?

`Spring` 旨在简化 J2EE 企业应用程序开发。`Spring Boot` 旨在简化 `Spring` 开发（减少配置⽂件，开箱即用！）。

### 3、说出使用 Spring Boot 的主要优点 TODO
https://javabetter.cn/sidebar/sanfene/spring.html#_31-%E4%BB%8B%E7%BB%8D%E4%B8%80%E4%B8%8B-springboot-%E6%9C%89%E5%93%AA%E4%BA%9B%E4%BC%98%E7%82%B9
1. 开发基于 `Spring` 的应用程序很容易。
2. `Spring Boot` 项⽬所需的开发或⼯程时间明显减少，通常会提⾼整体生产力。
3. `Spring Boot` 不需要编写⼤量样板代码、`XML` 配置和注释。
4. `Spring` 引导应用程序可以很容易地与 `Spring` ⽣态系统集成，如 `Spring JDBC`、`Spring ORM`、`Spring Data`、`Spring Security` 等。
5. `Spring Boot` 遵循“固执⼰⻅的默认配置”，以减少开发⼯作（默认配置可以修改）。
6. `Spring Boot` 应用程序提供嵌⼊式 `HTTP` 服务器，如 `Tomcat` 和 `Jetty`，可以轻松地开发和测试 `web` 应用程序。（这点很赞！普通运⾏ `Java` 程序的⽅式 就能运⾏基于 `Spring Boot web` 项⽬，省事很多）
7. `Spring Boot` 提供命令⾏接⼝(CLI)⼯具，用于开发和测试 `Spring Boot` 应用程序，如 Java 或 Groovy。
8. `Spring Boot` 提供了多种插件，可以使用内置⼯具(如 Maven 和 Gradle)开发和测试 `Spring Boot` 应用程序。

### 4、什么是 Spring Boot Starters?

Spring Boot Starters 是⼀系列依赖关系的集合，因为它的存在，项⽬的依赖之间的关系对我们来说变得更加简单了。

举个例⼦：在没有 Spring Boot Starters 之前，我们开发 REST 服务或 Web 应用程序时，
我们需要使用像 Spring MVC，Tomcat 和 Jackson 这样的库，这些依赖我们需要⼿动⼀个⼀个添加。但是，有了 Spring Boot Starters 我们只需要添加⼀个`spring-boot-starter-web`⼀个依赖就可以了，
这个依赖包含的⼦依赖中包含了我们开发 REST 服务需要的所有依赖。

### 5、Spring Boot ⽀持哪些内嵌 Servlet 容器？

`Spring Boot` ⽀持以下嵌⼊式 Servlet 容器:

|    Name  |   Name Version   |      | |
| ---- | ---- | ----| ----|
|   Tomcat 9.0  |     4.0 |    | |
|   Jetty 9.4  |     4.0 |    |   |
|    Undertow 2.0 |      4.0|     |  |

您还可以将 Spring 引导应用程序部署到任何 `Servlet 3.1+`兼容的 Web 容器中。

这就是你为什么可以通过直接像运⾏ 普通 Java 项⽬⼀样运⾏ SpringBoot 项⽬。这样的确省事了很多，⽅便了我们进⾏开发，降低了学习难度。

### 6、如何在 `Spring Boot` 应用程序中使用 Jetty ⽽不是 Tomcat?

`Spring Boot` （  spring-boot-starter-web ）使用 Tomcat 作为默认的嵌⼊式 servlet 容器, 如果你想使用 Jetty 的话只需要修改 Maven或者 Gradle就可以了。

```xml
<dependencies>
    <!-- 其他依赖项 -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-web</artifactId>
        <!-- 排除默认的Tomcat依赖 -->
        <exclusions>
            <exclusion>
                <groupId>org.springframework.boot</groupId>
                <artifactId>spring-boot-starter-tomcat</artifactId>
            </exclusion>
        </exclusions>
    </dependency>
    <!-- 添加Jetty依赖 -->
    <dependency>
        <groupId>org.springframework.boot</groupId>
        <artifactId>spring-boot-starter-jetty</artifactId>
    </dependency>
</dependencies>

```

```groovy
dependencies {
    // 其他依赖项
    implementation('org.springframework.boot:spring-boot-starter-web') {
        // 排除默认的Tomcat依赖
        exclude group: 'org.springframework.boot', module: 'spring-boot-starter-tomcat'
    }
    // 添加Jetty依赖
    implementation 'org.springframework.boot:spring-boot-starter-jetty'
}

```

说个题外话，从上⾯可以看出使用 Gradle 更加简洁明了，但是国内⽬前还是 Maven 使用的多⼀点，我个⼈觉得 Gradle 在很多⽅⾯都要好很多。


Spring Boot支持使用多种嵌入式Web服务器，其中两个最常见的是Jetty和Tomcat。以下是它们之间的一些主要区别：

1. **性能和吞吐量：**
    - Jetty：Jetty在处理高并发请求时通常表现得更好，具有较低的内存消耗和更好的性能。这使得Jetty适用于需要高吞吐量和较低延迟的场景。
    - Tomcat：Tomcat在处理中小规模请求时表现良好，但在处理大量并发请求时可能会有一些性能瓶颈。

2. **内存占用：**
    - Jetty：Jetty通常具有较小的内存占用，这意味着在资源受限的环境中可能更适合使用。
    - Tomcat：Tomcat可能在一些情况下占用更多的内存。

3. **配置和自定义：**
    - Jetty：Jetty提供了广泛的配置选项，允许你对服务器的行为进行高度定制。这使得Jetty适用于复杂的定制需求。
    - Tomcat：Tomcat也提供了配置选项，但相对来说可能没有Jetty那么灵活。然而，大多数情况下的默认配置已经足够满足需求。

4. **嵌入式支持：**
    - Jetty：Jetty在嵌入式环境中非常受欢迎，因为它的API设计得很好，使得在代码中嵌入Jetty非常简单。
    - Tomcat：尽管Tomcat也支持嵌入式模式，但在某些情况下可能需要更多的配置和设置。

5. **生态系统和社区：**
    - Jetty：Jetty拥有活跃的社区和良好的生态系统，有许多有用的插件和工具可用于开发和管理。
    - Tomcat：Tomcat也有一个大型的用户群体和丰富的生态系统，但与Jetty相比，可能稍显庞大。

6. **应用场景：**
    - Jetty：适用于需要高性能、低延迟以及高并发支持的场景，比如实时通信、WebSocket等。
    - Tomcat：适用于中小规模应用，不需要过于复杂配置和性能调优的场景。

选择使用Jetty还是Tomcat取决于你的项目需求和偏好。在大多数情况下，Spring Boot的默认嵌入式Web服务器选择是足够的，但如果你有特定的性能或定制需求，你可以根据上述区别进行选择。

### 7、介绍⼀下 `@SpringBootApplication` 注解  TODO


`@SpringBootApplication` 是一个Spring Boot提供的注解，它被用于标记主启动类（Main Application Class）。这个注解组合了多个其他注解，用于简化Spring Boot应用程序的配置和启动过程。

以下是`@SpringBootApplication`注解的主要作用和功能：

1. **组合注解：** `@SpringBootApplication` 是一个组合注解，它包含了以下三个注解的功能：`@Configuration`、`@EnableAutoConfiguration` 和 `@ComponentScan`。

2. **`@Configuration`：** 表示这是一个配置类，它允许在类中声明Bean定义和配置。

3. **`@EnableAutoConfiguration`：** 开启自动配置机制，让Spring Boot根据项目的依赖和配置，自动完成一些常见的配置工作，如数据源的配置、Web配置等。

4. **`@ComponentScan`：** 扫描指定包及其子包下的组件，将被标记为 `@Component` 及其衍生注解的类注册为Spring的Bean。

5. **自动配置：** `@SpringBootApplication` 的自动配置机制使得应用程序不需要手动配置许多常见的Spring配置，大大简化了项目的启动配置。

6. **主应用程序类：** `@SpringBootApplication` 注解通常用于Spring Boot应用程序的主启动类上，这是整个应用程序的入口点。

使用示例：

```java
import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;

@SpringBootApplication
public class MySpringBootApplication {
    public static void main(String[] args) {
        SpringApplication.run(MySpringBootApplication.class, args);
    }
}
```

在上面的示例中，`@SpringBootApplication` 注解标记了主应用程序类 `MySpringBootApplication`。通过使用这个注解，Spring Boot会自动进行必要的配置和启动流程，让你可以快速地启动一个Spring Boot应用程序。


### 8、Spring Boot 的⾃动配置是如何实现的?

Spring Boot的自动配置是通过以下方式实现的：

1. **条件化配置：** Spring Boot使用条件化配置来根据项目的依赖、配置和环境条件，自动选择性地应用一组默认配置。这意味着只有在满足特定条件时才会应用某些配置。

2. **`spring.factories` 文件：** Spring Boot在每个自动配置模块中的`META-INF/spring.factories`文件中定义了要自动配置的类。这个文件列出了实现了`AutoConfiguration`接口的类，它们包含了配置的逻辑。

3. **条件注解和条件类：** 在自动配置类中，Spring Boot使用条件注解（例如 `@ConditionalOnClass`、`@ConditionalOnBean` 等）来检查特定的类是否在类路径中或是否已定义为Bean。如果条件为真，相关的配置将被应用。

4. **属性配置：** Spring Boot通过读取`application.properties`（或者`application.yml`）文件中的属性来控制自动配置的行为。你可以在配置文件中设置属性来启用或禁用特定的自动配置。

5. **自定义条件：** 你也可以创建自己的条件，通过实现`Condition`接口来实现。这样，你可以定义适用于特定情况的自动配置。

6. **`@EnableAutoConfiguration` 注解：** 在主应用程序类上使用`@EnableAutoConfiguration`注解会启用Spring Boot的自动配置功能。这个注解会扫描类路径下的`spring.factories`文件，自动加载相应的自动配置类。

总之，Spring Boot的自动配置通过一系列的条件判断、属性配置和注解来确定要应用的配置，并在项目启动时自动完成配置工作。这大大简化了开发者的工作，减少了手动配置的复杂性，使得构建和维护Spring Boot应用程序更加容易。

### 9、开发 RESTful Web 服务常用的注解有哪些？

详细介绍可以查看这篇⽂章：[《Spring/`Spring Boot` 常用注解总结》](https://javaguide.cn/system-design/framework/spring/spring-common-annotations.html) 。



### 10、Spirng Boot常用的两种配置⽂件

Spring Boot常用的两种配置文件分别是：

1. **`application.properties`：** 这是基于键值对的配置文件，用于配置应用程序的各种属性。你可以在这个文件中设置数据库连接信息、端口号、日志级别、外部服务的URL等。例如：

   ```properties
   # 数据库连接配置
   spring.datasource.url=jdbc:mysql://localhost:3306/mydb
   spring.datasource.username=root
   spring.datasource.password=secret
   
   # 服务器端口
   server.port=8080
   
   # 日志级别
   logging.level.root=INFO
   ```

2. **`application.yml`：** 这是基于YAML格式的配置文件，同样用于配置应用程序的属性。YAML的语法更加清晰简洁，适合用于复杂的配置。与`application.properties`相比，`application.yml`的格式更具层次感，通过缩进表示结构。例如：

   ```yaml
   # 数据库连接配置
   spring:
     datasource:
       url: jdbc:mysql://localhost:3306/mydb
       username: root
       password: secret
   
   # 服务器端口
   server:
     port: 8080
   
   # 日志级别
   logging:
     level:
       root: INFO
   ```

这两种配置文件都能够用于配置应用程序的属性，你可以根据自己的喜好选择使用哪一种。一般来说，`application.yml`的可读性更好，特别适合用于复杂的配置场景。无论选择哪种格式，Spring Boot都会自动读取并应用这些配置，不需要额外的代码来处理。

### 11、什么是 YAML？YAML 配置的优势在哪⾥ ?

YAML 是⼀种⼈类可读的数据序列化语⾔。它通常用于配置⽂件。与属性⽂件相
⽐，如果我们想要在配置⽂件中添加复杂的属性，YAML ⽂件就更加结构化，⽽且更少混淆。可以看出 YAML 具有分层配置数据。

相⽐于 Properties 配置的⽅式，YAML 配置的⽅式更加直观清晰，简介明了，有层次感。

但是，YAML 配置的⽅式有⼀个缺点，那就是YAML 配置的⽅式有⼀个缺点，那就是不⽀持 @PropertySource 注解
导⼊⾃定义的 YAML 配置。

### 12、`Spring Boot` 常用的读取配置文件的方法有哪些？ TODO

Spring Boot提供了多种方式来读取配置文件，这些方式可以根据不同的需求和场景进行选择。以下是一些常用的读取配置文件的方法：

1. **自动配置读取：** Spring Boot会自动读取`application.properties`或`application.yml`文件中的配置。这些文件位于`src/main/resources`目录下。你可以在这些文件中设置应用程序的属性。

2. **`@Value` 注解：** 通过在成员变量上使用`@Value`注解，你可以将配置文件中的值注入到Spring组件中。

```
   @Value("${property.key}")
   private String propertyValue;
```

3. **`@ConfigurationProperties` 注解：** 通过创建一个配置类，并使用`@ConfigurationProperties`注解，可以将一组配置属性绑定到该类的字段上。

```java
   @ConfigurationProperties(prefix = "custom")
   public class CustomProperties {
       private String property1;
       private String property2;
       // ...
   }
```

4. **`Environment` 对象：** 通过注入`Environment`对象，你可以通过编程方式访问配置属性。

```
   @Autowired
   private Environment environment;

   String value = environment.getProperty("property.key");
```

5. **`@PropertySource` 注解：** 你可以在配置类上使用`@PropertySource`注解来导入自定义的`.properties`文件，然后使用`@Value`注解读取其中的属性值。

6. **`@ConfigurationPropertiesScan` 注解：** 在主应用程序类上使用`@ConfigurationPropertiesScan`注解，可以扫描特定的包，以便Spring Boot能够自动注册带有`@ConfigurationProperties`注解的类。

7. **命令行参数和环境变量：** Spring Boot允许将配置属性作为命令行参数或环境变量传递给应用程序，这些属性将覆盖配置文件中的值。

```shell
   java -jar myapp.jar --property.key=value
```

总之，Spring Boot提供了多种读取配置文件的方式，你可以根据需要选择最适合你项目的方式。这些方法都能够使你轻松地访问和管理应用程序的配置。


### 13、`Spring Boot` 加载配置文件的优先级了解么？

当Spring Boot应用程序加载配置文件时，存在一定的优先级规则，这些规则决定了配置文件的加载顺序以及当配置属性存在冲突时的覆盖情况。下面是Spring Boot配置文件加载的优先级：

1. **命令行参数和环境变量：** 命令行参数和环境变量中的配置属性具有最高的优先级。它们可以覆盖任何其他地方定义的配置值。例如：

```shell
   java -jar myapp.jar --property.key=value
```

2. **Java 系统属性：** 可以使用Java系统属性来设置配置属性。例如，在应用程序启动命令中使用 `-Dproperty.key=value`。

3. **`application.properties` 和 `application.yml`：** 这些是默认的配置文件，通常位于`src/main/resources`目录下。它们的配置将作为默认值，在没有其他配置覆盖的情况下生效。

4. **Profile 特定配置：** Spring Boot支持使用profiles来管理不同环境下的配置。在配置文件名中使用`application-{profile}.properties`或`application-{profile}.yml`来定义特定profile的配置。例如，`application-dev.properties`用于开发环境。

5. **`@PropertySource` 注解：** 如果在Java配置类上使用了`@PropertySource`注解，并指定了外部配置文件，那么这些属性将被加载到应用程序中。

6. **`@TestPropertySource` 注解：** 在测试中，可以使用`@TestPropertySource`注解来指定测试所使用的配置文件。

总之，Spring Boot的配置加载遵循一定的优先级规则，确保不同来源的配置能够正确地合并和覆盖。这使得在不同环境中管理和配置应用程序变得非常灵活和方便。

更对内容请查看官⽅⽂档：https://docs.spring.io/spring- boot/docs/current/reference/html/spring-boot-features.html#boot-features-external-config

### 14、常用的 Bean 映射⼯具有哪些？

我们经常在代码中会对⼀个数据结构封装成DO、SDO、DTO、VO等，⽽这些 Bean中的⼤部分属性都是⼀样的，所以使用属性拷⻉类⼯具可以帮助我们节省⼤量的 set 和 get 操作。

常用的 Bean 映射⼯具有：Spring BeanUtils、Apache BeanUtils、 MapStruct、ModelMapper、Dozer、Orika、JMapper 。

由于 Apache BeanUtils 、Dozer 、ModelMapper 性能太差，所以不建议使用。 MapStruct 性能更好⽽且使用起来⽐较灵活，是⼀个⽐较不错的选择。

### 15、`Spring Boot` 如何监控系统实际运行状况？

我们可以使用 `Spring Boot` Actuator 来对 `Spring Boot` 项⽬进⾏简单的监控。


集成了这个模块之后，你的 `Spring Boot` 应用程序就⾃带了⼀些开箱即用的获取程序运⾏时的内部状态信息的 API。

⽐如通过 GET ⽅法访问  接⼝，你就可以获取应用程序的健康指标。

### 16、`Spring Boot` 如何做请求参数校验？

数据的校验的重要性就不用说了，即使在前端对数据进⾏校验的情况下，我们还是要对传⼊后端的数据再进⾏⼀遍校验，避免用户绕过浏览器直接通过⼀些 HTTP ⼯具直接向后端请求⼀些违法数据。

`Spring Boot` 程序做请求参数校验的话只需要	依赖就够了，它的⼦依赖包含了我们所需要的东⻄。

#### 16.1、校验注解

JSR 提供的校验注解:

●@Null 被注释的元素必须为 null
●@NotNull 被注释的元素必须不为 null
●@AssertTrue 被注释的元素必须为 true
●@AssertFalse 被注释的元素必须为 false
●@Min(value) 被注释的元素必须是⼀个数字，其值必须⼤于等于指定的最⼩值


●
最⼤值
●

指定的最⼩值
●

指定的最⼤值

被注释的元素必须是⼀个数字，其值必须⼩于等于指定的   被注释的元素必须是⼀个数字，其值必须⼤于等于被注释的元素必须是⼀个数字，其值必须⼩于等于

●@Size(max=, min=) 被注释的元素的⼤⼩必须在指定的范围内
● @Digits (integer, fraction) 被注释的元素必须是⼀个数字，其值必须在可接受的范围内
●@Past 被注释的元素必须是⼀个过去的⽇期
●@Future 被注释的元素必须是⼀个将来的⽇期
● @Pattern(regex=,flag=) 被注释的元素必须符合指定的正则表达式

Hibernate Validator 提供的校验注解：

●@NotBlank(message =) 验证字符串⾮ null，且⻓度必须⼤于 0
●@Email 被注释的元素必须是电⼦邮箱地址
●@Length(min=,max=) 被注释的字符串的⼤⼩必须在指定的范围内
●@NotEmpty 被注释的字符串的必须⾮空
● @Range(min=,max=,message=) 被注释的元素必须在合适的范围内

使用示例：


#### 16.2.验证请求体(RequestBody)

我们在需要验证的参数上加上了  注解，如果验证失败，它将抛出
odArgumentNotValidException 。默认情况下，Spring 会将此异常转换为 HTTP Status 400（错误请求）。

#### 16.3.验证请求参数(Path Variables 和 Request Parameters)

⼀定⼀定不要忘记在类上加上 Validated 注解了，这个参数可以告诉 Spring 去校验⽅法参数。

更多内容请参考我的原创： 如何在 Spring/`Spring Boot` 中做参数校验？你需要了解的都在这⾥！

### 17、如何使用 `Spring Boot` 实现全局异常处理？

在Spring Boot中，你可以通过实现一个全局异常处理器来统一处理应用程序中的异常。这有助于提供更友好的错误信息给用户，同时避免在控制器中重复编写异常处理逻辑。以下是实现全局异常处理的步骤：

1. **创建全局异常处理类：** 首先，创建一个类用于处理全局异常。你可以使用`@ControllerAdvice`注解来标记这个类，表示它是一个全局异常处理器。

   ```java
   import org.springframework.web.bind.annotation.ControllerAdvice;
   import org.springframework.web.bind.annotation.ExceptionHandler;

   @ControllerAdvice
   public class GlobalExceptionHandler {

       @ExceptionHandler(Exception.class)
       public ResponseEntity<String> handleGlobalException(Exception e) {
           // 在这里编写异常处理逻辑
           return ResponseEntity.status(HttpStatus.INTERNAL_SERVER_ERROR).body("An error occurred");
       }
   }
   ```

2. **在异常处理方法中编写逻辑：** 在全局异常处理器类中，使用`@ExceptionHandler`注解来标记一个方法，用于处理特定类型的异常。在这个方法中，你可以编写你的异常处理逻辑，例如返回自定义错误信息、日志记录等。

3. **选择异常类型：** 你可以在`@ExceptionHandler`注解中指定要处理的异常类型。例如，`@ExceptionHandler(MyCustomException.class)`会处理`MyCustomException`类型的异常。

4. **返回适当的响应：** 在异常处理方法中，你可以返回适当的HTTP响应状态码和错误信息，以及可能的错误详细信息。你可以返回`ResponseEntity`或自定义错误模型类，根据需要进行定制。

5. **生效全局异常处理：** 确保全局异常处理器类在Spring Boot应用程序的扫描范围内，并且应用程序能够扫描到它。一般来说，这个类应该在主应用程序类所在的包或子包中。

通过上述步骤，你就可以在Spring Boot应用程序中实现全局异常处理。无论在哪个控制器中抛出异常，全局异常处理器都会捕获并处理这些异常，从而统一返回合适的错误响应。



### 18、`Spring Boot` 中如何实现定时任务 ?

在Spring Boot中，你可以通过使用`@Scheduled`注解来实现定时任务。`@Scheduled`注解允许你在指定的时间间隔或固定时间点执行方法。以下是如何在Spring Boot中实现定时任务的步骤：

1. **添加依赖：** 首先，确保你的项目中添加了`spring-boot-starter`依赖，因为它包含了Spring Boot的核心功能。

2. **创建定时任务方法：** 在一个Spring组件（如Service或Component）中创建一个方法，用于执行你的定时任务逻辑。在这个方法上使用`@Scheduled`注解来指定定时任务的触发条件。例如：

```java
   import org.springframework.scheduling.annotation.Scheduled;
   import org.springframework.stereotype.Component;

   @Component
   public class MyScheduledTasks {
       
       @Scheduled(fixedRate = 10000) // 每隔10秒执行一次
       public void myTask() {
           // 定时任务逻辑
       }
   }
```

3. **启用定时任务：** 在主应用程序类上添加`@EnableScheduling`注解，以启用Spring Boot的定时任务功能。

```java
   import org.springframework.boot.SpringApplication;
   import org.springframework.boot.autoconfigure.SpringBootApplication;
   import org.springframework.scheduling.annotation.EnableScheduling;

   @SpringBootApplication
   @EnableScheduling
   public class MyApplication {
       public static void main(String[] args) {
           SpringApplication.run(MyApplication.class, args);
       }
   }
```

4. **配置定时任务触发条件：** 在`@Scheduled`注解中，你可以使用不同的属性来配置定时任务的触发条件。例如，`fixedRate`表示固定的时间间隔，`cron`允许你使用Cron表达式来指定更复杂的时间规则。

需要注意的是，定时任务方法必须是无参的。此外，确保你的定时任务方法不会阻塞线程，以免影响其他定时任务的正常执行。

通过使用`@Scheduled`注解，你可以轻松地在Spring Boot应用程序中实现定时任务，无需额外的配置。


### 19、`Spring Boot` 支持哪些日志框架，推荐和默认的日志框架是哪一个 ?  TODO

Spring Boot支持多种日志框架，但它默认使用的是SLF4J（Simple Logging Facade for Java）作为日志的抽象层，以及Logback作为默认的日志实现。这个组合被广泛认为是Spring Boot的推荐和默认日志框架。

以下是Spring Boot支持的主要日志框架：

1. **SLF4J（默认推荐）：** SLF4J是一种日志抽象层，它提供了一种在不同日志实现之间切换的机制。Spring Boot默认使用SLF4J作为日志抽象层，因此您可以选择使用不同的日志实现，如Logback、Log4j2、Java Util Logging（JUL）等，并将其配置为您的项目的依赖。

2. **Logback（默认实现）：** Spring Boot默认的日志实现是Logback，它是SLF4J的一个实现。Logback提供了强大的日志功能，包括滚动日志文件、异步日志记录等。

3. **Log4j2：** Spring Boot也支持Log4j2，它是Log4j的升级版本，具有更好的性能和功能。您可以将Log4j2配置为Spring Boot应用程序的日志实现。

4. **Java Util Logging（JUL）：** Java标准库自带的日志框架，Spring Boot也支持它。虽然它功能相对较简单，但可以在不引入额外依赖的情况下使用。

5. **其他日志框架：** Spring Boot还支持其他一些日志框架，如Apache Commons Logging和Log4j 1.x，但这些框架不再是默认推荐的选择。

您可以通过在Spring Boot的配置文件（如application.properties或application.yml）中进行相应的配置来切换和自定义日志框架。例如，您可以在配置文件中指定要使用的日志实现和配置属性，以满足您的日志记录需求。示例：

```properties
# 配置使用Log4j2作为日志实现
spring.main.log-startup-info=false
logging.level.root=INFO
logging.config=classpath:log4j2.xml
```

总之，尽管Spring Boot默认使用SLF4J和Logback，但您可以根据项目需求和偏好选择其他日志框架，并通过相应的配置来切换到不同的实现。



### 20、SpringBoot、springMVC和spring有什么区别？
https://javaguide.cn/system-design/framework/spring/spring-knowledge-and-questions-summary.html#spring-spring-mvc-spring-boot-%E4%B9%8B%E9%97%B4%E4%BB%80%E4%B9%88%E5%85%B3%E7%B3%BB

### 21、 SpringBoot中的监视器是什么

Spring Boot中的监视器通常指的是Spring Boot Actuator。Spring Boot Actuator是Spring Boot的一个子项目，提供了一组用于监视和管理Spring Boot应用程序的功能和端点。它允许您轻松地监视应用程序的运行状况、性能、健康状态以及其他关键指标。

Spring Boot Actuator提供了许多内置的端点（endpoints），这些端点可以通过HTTP请求或JMX（Java Management Extensions）进行访问。一些常用的监控端点包括：

1. **/actuator/health：** 用于检查应用程序的健康状态，通常用于负载均衡和自动扩展。

2. **/actuator/metrics：** 提供了各种应用程序指标，如内存使用、线程池状态、GC统计等。

3. **/actuator/info：** 允许应用程序提供自定义的信息，通常用于显示应用程序的版本和其他元数据。

4. **/actuator/env：** 提供有关应用程序环境属性的信息，包括配置属性和系统属性。

5. **/actuator/beans：** 显示应用程序中所有Spring Bean的列表。

6. **/actuator/mappings：** 显示Spring MVC的请求映射信息。

7. **/actuator/trace：** 显示HTTP请求的追踪信息，包括请求和响应的详细信息。

您可以通过在Spring Boot应用程序的配置文件中启用这些监控端点，并配置安全性，以控制谁可以访问它们。Spring Boot Actuator提供了一种轻松实现应用程序监控和管理的方式，特别是在生产环境中，它可以帮助您监视应用程序的运行情况并采取必要的措施来维护和管理应用程序。


### 22、SpringBoot 打成的jar和普通的jar有什么区别？

https://blog.csdn.net/qq_33249725/article/details/95470178


### 23、SpringBoot 的run方法做了什么？

Spring Boot中的`run`方法位于SpringApplication类中，它是Spring Boot应用程序的入口点，负责启动整个Spring Boot应用程序。`run`方法的主要作用包括以下几个方面：

1. **创建并配置Spring应用程序上下文（ApplicationContext）：** `run`方法会创建一个Spring应用程序上下文，该上下文包含了所有应用程序组件（bean）的定义和配置。Spring Boot会自动加载应用程序的配置，如application.properties或application.yml文件，并创建一个包含所有必要bean的Spring上下文。

2. **扫描和注册Bean：** Spring Boot会扫描应用程序的类路径，查找并注册所有的Spring组件，包括控制器、服务、存储库等。

3. **启动嵌入式Web服务器：** 如果应用程序是一个Web应用程序，`run`方法会启动嵌入式的Web服务器，例如Tomcat、Jetty或Undertow。这使得应用程序能够处理HTTP请求。

4. **应用程序初始化：** Spring Boot会执行应用程序的初始化工作，包括设置默认配置、加载配置文件、启用自动配置、初始化数据库连接池等。

5. **运行应用程序：** 一旦Spring Boot应用程序上下文准备好并且嵌入式Web服务器已启动，`run`方法将启动应用程序，使其可以接受来自客户端的请求。

6. **记录应用程序启动信息：** `run`方法还会输出应用程序的启动信息，包括应用程序的端口、日志配置等。

总之，`run`方法是Spring Boot应用程序的核心启动方法，它执行了一系列必要的操作来启动应用程序，包括创建Spring应用程序上下文、初始化应用程序、启动嵌入式Web服务器等。这使得开发者可以方便地启动和管理Spring Boot应用程序，而无需手动配置大量的设置和组件。

### 24、SpringBoot 如何解决跨域问题

Spring Boot可以使用多种方式来解决跨域问题，其中一种常见的方法是通过配置CORS（跨域资源共享）支持。CORS是一种浏览器的安全策略，用于控制一个网页是否允许从另一个源（域、协议或端口）请求资源。以下是在Spring Boot中解决跨域问题的步骤：

1. 添加依赖：
   首先，确保你的Spring Boot项目中已经包含了Spring Web依赖。如果你使用的是Spring Boot Starter项目，通常不需要额外添加依赖，因为Spring Boot Starter中已经包含了Spring Web。

2. 配置CORS：
   在Spring Boot应用程序中，你可以通过配置类或在application.properties（或application.yml）文件中添加相关配置来启用CORS支持。以下是一个示例配置类的代码：

```java
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.cors.CorsConfiguration;
import org.springframework.web.cors.UrlBasedCorsConfigurationSource;
import org.springframework.web.filter.CorsFilter;

@Configuration
public class CorsConfig {

    @Bean
    public CorsFilter corsFilter() {
        UrlBasedCorsConfigurationSource source = new UrlBasedCorsConfigurationSource();
        CorsConfiguration config = new CorsConfiguration();

        // 允许来自特定域名的请求
        config.addAllowedOrigin("http://example.com");

        // 允许使用的HTTP方法
        config.addAllowedMethod("GET");
        config.addAllowedMethod("POST");
        config.addAllowedMethod("PUT");
        config.addAllowedMethod("DELETE");

        // 允许携带身份验证信息（如Cookie）
        config.setAllowCredentials(true);

        source.registerCorsConfiguration("/**", config);
        return new CorsFilter(source);
    }
}
```

在上面的示例中，我们配置了允许来自`http://example.com`域的请求，允许使用的HTTP方法，以及允许携带身份验证信息。

3. 配置更多选项（可选）：
   你可以根据需要配置更多的CORS选项，如允许特定的请求头、设置响应头等。CORS配置非常灵活，可以根据你的项目需求进行定制。

4. 测试跨域请求：
   在配置完成后，确保在前端应用中发起的跨域请求能够正常工作。你可以使用浏览器的开发者工具来检查响应头和请求是否满足你的CORS配置要求。

通过上述步骤，你可以在Spring Boot应用程序中启用CORS支持，以解决跨域问题，从而允许不同源的前端应用程序与你的后端服务进行交互。请注意，要谨慎配置CORS，以确保安全性和合规性。



### 25、SpringBoot 如何配置log4j ?
1、排除Spring Boot默认的Logback日志系统。
2、添加 Log4j 2 依赖
3、创建 Log4j 2 配置文件：在你的项目的 src/main/resources 目录下创建一个名为 log4j2.xml 的 Log4j 2 配置文件。
4、在你的 Spring Boot 应用程序中，你可以使用 org.slf4j.Logger 接口来记录日志。Spring Boot 已经集成了 Log4j 2，你只需要在类中创建一个 Logger 实例即可


### 26、SpringBoot自动装配的核心文件有哪些？
https://javaguide.cn/system-design/framework/spring/spring-common-annotations.html#_1-springbootapplication
https://javabetter.cn/sidebar/sanfene/spring.html#_32-springboot-%E8%87%AA%E5%8A%A8%E9%85%8D%E7%BD%AE%E5%8E%9F%E7%90%86%E4%BA%86%E8%A7%A3%E5%90%97


### 27、SpringBoot自动装配流程是怎样的？（加载顺序）  TODO

https://javabetter.cn/sidebar/sanfene/spring.html#_34-springboot-%E5%90%AF%E5%8A%A8%E5%8E%9F%E7%90%86

### 28、介绍几个常用的starter
Spring Boot的Starter是一组预配置的依赖包，它们简化了Spring Boot应用程序的开发和配置。以下是一些常用的Spring Boot Starter：

1. **spring-boot-starter-web**：用于构建Web应用程序的Starter。包含了Spring MVC、Tomcat（或其他嵌入式Web服务器）、Jackson（用于JSON序列化和反序列化）等依赖。

2. **spring-boot-starter-data-jpa**：用于构建基于JPA（Java Persistence API）的数据访问层的Starter。包含Spring Data JPA、Hibernate、Spring JDBC等依赖，可用于操作关系型数据库。

3. **spring-boot-starter-data-redis**：用于构建基于Redis的数据访问层的Starter。包含Spring Data Redis和Jedis（或Lettuce）等依赖，可用于操作Redis数据库。

4. **spring-boot-starter-security**：用于构建安全性功能的Starter。包含Spring Security和相关依赖，用于身份验证、授权和保护Web应用程序。

5. **spring-boot-starter-test**：用于编写单元测试和集成测试的Starter。包含JUnit、Spring Test、Mockito等依赖，使测试编写更加方便。

6. **spring-boot-starter-actuator**：用于监控和管理应用程序的Starter。包含Spring Boot Actuator模块，可以获取应用程序的各种健康指标和状态信息。

7. **spring-boot-starter-amqp**：用于构建消息驱动应用程序的Starter。包含Spring AMQP和RabbitMQ（或其他消息代理）等依赖，可用于处理消息队列。



这些Starter使得开发人员可以轻松地引入所需的功能，而不必手动配置大量的依赖项。每个Starter都有一组默认配置，但你可以根据需要进行定制，以满足特定的应用程序要求。

### 29、SpringBoot配置的加载顺序？ 与13 相近

Spring Boot应用程序的配置加载顺序按照以下优先级从高到低：

1. **命令行参数（Command Line Arguments）**：命令行参数具有最高的优先级，它们可以覆盖任何其他配置。你可以使用`--`标志来传递命令行参数。

2. **Java系统属性（System Properties）**：可以通过Java系统属性来配置应用程序，例如通过`-D`参数传递给JVM的系统属性。

3. **操作系统环境变量（Environment Variables）**：环境变量可以在操作系统级别配置，并通过Spring Boot的配置属性进行覆盖。例如，可以使用`SPRING_DATASOURCE_URL`来配置数据源的URL。

4. **配置文件（application.properties或application.yml）**：这是Spring Boot中最常用的配置方式，配置文件通常位于`src/main/resources`目录下。它们在应用程序启动时被加载，可以包含各种配置属性。`application.properties`和`application.yml`是默认的配置文件名，但你也可以使用`spring.config.name`和`spring.config.location`属性来指定其他文件名和位置。

5. **自定义配置文件**：你可以创建自己的属性文件，并使用`@PropertySource`注解来加载它们。这些自定义配置文件可以与默认的`application.properties`或`application.yml`文件并存，并拥有相同的优先级。

6. **配置属性的默认值**：如果没有在上述位置找到配置属性，Spring Boot会使用默认值。默认值通常在Spring Boot的自动配置中指定，但也可以在应用程序中定义。

这个顺序确保了配置属性可以从多个来源加载，并具有逐级覆盖的优先级，从而使得在不同环境中轻松管理配置。这些信息可以在[官方文档](https://spring.io/projects/spring-boot)的"Externalized Configuration"章节中找到。




### 30、如何实现SpringBoot应用程序的安全性？
Spring Boot提供了多种方式来实现应用程序的安全性，其中最常用的方式是使用Spring Security。Spring Security是一个功能强大的框架，用于处理身份验证、授权、防止常见的安全漏洞等方面的问题。以下是在Spring Boot应用程序中实现安全性的一般步骤：

1. **引入Spring Security依赖**：首先，在你的Spring Boot项目中，需要在`pom.xml`文件中引入Spring Security的依赖，以便使用它的功能。你可以添加以下依赖：

   ```xml
   <dependency>
       <groupId>org.springframework.boot</groupId>
       <artifactId>spring-boot-starter-security</artifactId>
   </dependency>
   ```

   这个依赖包括了Spring Security的核心功能以及与Spring Boot的集成。

2. **配置Spring Security**：接下来，你需要配置Spring Security的行为。你可以创建一个配置类，并在其中扩展`WebSecurityConfigurerAdapter`类。这个配置类可以包含有关身份验证、授权、会话管理等方面的配置。

   ```java
   import org.springframework.context.annotation.Bean;
   import org.springframework.context.annotation.Configuration;
   import org.springframework.security.config.annotation.web.builders.HttpSecurity;
   import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
   import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;

   @Configuration
   @EnableWebSecurity
   public class SecurityConfig extends WebSecurityConfigurerAdapter {
       @Override
       protected void configure(HttpSecurity http) throws Exception {
           http
               .authorizeRequests()
                   .antMatchers("/public/**").permitAll()
                   .anyRequest().authenticated()
                   .and()
               .formLogin()
                   .loginPage("/login")
                   .permitAll()
                   .and()
               .logout()
                   .permitAll();
       }
   }
   ```

   这是一个简单的配置示例，它配置了URL的访问权限，自定义了登录页的路径，以及定义了注销行为。你可以根据自己的需求进一步扩展和定制配置。

3. **用户认证和授权**：你可以配置Spring Security来进行用户认证和授权。通常，你可以将用户信息存储在数据库中，并使用Spring Security的`UserDetailsService`来加载用户信息。你还可以定义角色和权限，并使用Spring Security的注解来控制方法和URL的访问权限。

   ```java
   import org.springframework.security.core.userdetails.User;
   import org.springframework.security.core.userdetails.UserDetails;
   import org.springframework.security.core.userdetails.UserDetailsService;
   import org.springframework.security.core.userdetails.UsernameNotFoundException;
   import org.springframework.stereotype.Service;

   @Service
   public class CustomUserDetailsService implements UserDetailsService {
       @Override
       public UserDetails loadUserByUsername(String username) throws UsernameNotFoundException {
           // 从数据库或其他数据源加载用户信息
           // 这里简单演示一个用户
           return User.builder()
               .username("user")
               .password("{bcrypt}$2a$10$4GJHlk6ZXopTn2HP0pNhIeA44XVkf0QMARe3hgs7vum5nLNUcfuvC") // 密码为 "password"
               .roles("USER")
               .build();
       }
   }
   ```

   你可以使用各种认证方式，如基于数据库、LDAP、OAuth等，以及各种自定义用户详细信息的加载方式。

4. **注解和配置**：Spring Security提供了一系列注解和配置选项，用于控制方法和URL的访问权限、CSRF保护、会话管理等。你可以根据需求使用这些工具来保护你的应用程序。

5. **集成其他安全工具**：除了Spring Security，你还可以集成其他安全工具和框架，如Spring Session、Spring LDAP等，以满足特定的安全需求。

总之，Spring Boot提供了强大的安全性支持，主要通过Spring Security来实现。你可以根据项目的需求来配置和定制安全性，以保护你的应用程序免受各种安全威胁。请参考Spring Boot和Spring Security的官方文档以获取更详细的信息和示例。

Spring Boot官方文档：

https://docs.spring.io/spring-boot/docs/current/reference/htmlsingle/

这是Spring Boot的官方文档，包含了关于Spring Boot的详细信息、配置、特性、示例等等。你可以在这里找到有关如何构建和配置Spring Boot应用程序的指南。

Spring Security官方文档：

https://docs.spring.io/spring-security/site/docs/current/reference/html5/

这是Spring Security的官方文档，提供了有关身份验证、授权、安全策略、配置等方面的详细信息。它包含了丰富的示例和解释，帮助你实现和定制安全性功能。

### 31、如何在 SpringBoot 启动的时候运行一些特定的代码？
https://blog.csdn.net/AlbenXie/article/details/105715361

在Spring Boot应用程序启动的时候运行一些特定的代码通常可以通过以下几种方式来实现：

1. 使用Spring Boot的ApplicationRunner或CommandLineRunner接口：
   Spring Boot提供了ApplicationRunner和CommandLineRunner接口，您可以实现其中一个来运行在应用程序启动时执行的代码。这两个接口都要求您实现一个run方法，可以在其中编写启动代码。这两个接口的主要区别在于它们的参数，ApplicationRunner接口的run方法接受一个ApplicationArguments对象，而CommandLineRunner接口的run方法接受一个String数组。

   ```java
   import org.springframework.boot.ApplicationArguments;
   import org.springframework.boot.ApplicationRunner;
   import org.springframework.boot.CommandLineRunner;
   import org.springframework.stereotype.Component;

   @Component
   public class MyStartupRunner implements ApplicationRunner, CommandLineRunner {

       @Override
       public void run(ApplicationArguments args) throws Exception {
           // 在这里编写启动代码
       }

       @Override
       public void run(String... args) throws Exception {
           // 在这里编写启动代码
       }
   }
   ```

2. 使用Spring的事件机制：
   您可以使用Spring的事件机制来监听应用程序的启动事件，并在事件触发时执行特定的代码。通常，您需要定义一个事件监听器类，然后在该类中处理启动事件。

   ```java
   import org.springframework.boot.context.event.ApplicationReadyEvent;
   import org.springframework.context.ApplicationListener;
   import org.springframework.stereotype.Component;

   @Component
   public class MyApplicationListener implements ApplicationListener<ApplicationReadyEvent> {

       @Override
       public void onApplicationEvent(ApplicationReadyEvent event) {
           // 在这里编写启动代码
       }
   }
   ```

3. 使用Spring Boot的@PostConstruct注解：
   如果您有一个Bean，您可以使用@PostConstruct注解来标记一个方法，在Spring容器初始化Bean时将会调用该方法。您可以在这个方法中编写启动代码。

   ```java
   import javax.annotation.PostConstruct;
   import org.springframework.stereotype.Component;

   @Component
   public class MyService {

       @PostConstruct
       public void init() {
           // 在这里编写启动代码
       }
   }
   ```

选择哪种方法取决于您的需求和应用程序的架构。通常情况下，使用ApplicationRunner或CommandLineRunner接口是最常见的方式，因为它们提供了更灵活的选项，并且可以轻松地与Spring Boot的自动配置机制集成。





### 32、如何重新加载SpringBoot上的更改，而无需重新启动服务器？

Spring Boot提供了热部署（Hot Reloading）功能，可以让您在不重新启动服务器的情况下重新加载应用程序的更改。这可以提高开发效率，特别是在开发和调试阶段。

有几种方法可以实现热部署Spring Boot应用程序的更改：

1. 使用Spring Boot DevTools：
   Spring Boot DevTools是Spring Boot官方提供的一个开发工具，它包括了许多有用的功能，其中之一就是热部署。要使用Spring Boot DevTools，您可以按照以下步骤进行配置：

    - 在项目的pom.xml文件中添加DevTools依赖：

      ```xml
      <dependency>
          <groupId>org.springframework.boot</groupId>
          <artifactId>spring-boot-devtools</artifactId>
          <scope>runtime</scope>
      </dependency>
      ```

    - 在IDE中启用自动构建功能（通常是默认的），以确保每次保存文件时都会重新构建应用程序。

    - 启动您的Spring Boot应用程序。现在，每当您进行更改并保存文件时，Spring Boot DevTools会自动重新加载应用程序。

   Spring Boot DevTools还提供了其他有用的功能，如自动重启、远程调试等。

2. 使用Spring Loaded或JRebel：
   Spring Loaded和JRebel是两个第三方工具，它们可以在不重新启动服务器的情况下实现Java类的热部署。您可以根据项目需求选择其中一个工具，并按照其文档进行配置和使用。

无论您选择哪种方法，热部署都可以提高开发效率，但需要谨慎使用，因为某些更改可能无法完全热部署，可能需要重新启动应用程序。此外，热部署也可能会导致一些类加载相关的问题，因此在生产环境中应禁用热部署功能。

### 33、什么是 Spring Boot Starter？
Spring Boot Starter是一种Spring Boot的特殊依赖项，它的主要目的是简化和加速Spring Boot应用程序的构建和配置过程。Spring Boot Starter通常是一组预定义的依赖项集合，包含了一组相关的库、框架和配置，以支持特定类型的应用程序开发。

Spring Boot Starter有以下主要特点和用途：

1. 简化配置：Spring Boot Starter提供了预配置的依赖项，使开发人员无需手动配置大量的库和组件，从而降低了配置复杂性。

2. 快速启动：通过引入适当的Starter，您可以快速启动不同类型的应用程序，如Web应用程序、数据访问应用程序、消息队列应用程序等，而无需从头开始配置。

3. 按需选择：Spring Boot Starter通常提供多个不同的Starter，您可以根据应用程序的需求选择适当的Starter，避免引入不必要的依赖项。

4. 遵循约定优于配置：Spring Boot采用约定优于配置的原则，Spring Boot Starter进一步加强了这一理念，通过一些默认配置和约定来降低配置的工作量。

5. 可扩展性：开发人员可以自定义和扩展Spring Boot Starter，以满足他们特定应用程序的需求，然后在内部或外部共享这些自定义Starter。

一些常见的Spring Boot Starter包括：

- spring-boot-starter-web：用于构建Web应用程序的Starter，包括Spring MVC、嵌入式Web服务器（如Tomcat）等。

- spring-boot-starter-data-jpa：用于与JPA（Java Persistence API）集成的Starter，用于数据库访问。

- spring-boot-starter-security：用于构建安全性相关功能的Starter，包括Spring Security等。

- spring-boot-starter-actuator：用于添加应用程序监控和管理功能的Starter，包括健康检查、度量指标等。

- spring-boot-starter-amqp：用于与消息队列（如RabbitMQ）集成的Starter。

- spring-boot-starter-test：用于测试Spring Boot应用程序的Starter，包括JUnit和Spring Test等。

通过使用Spring Boot Starter，开发人员可以更轻松地创建、配置和维护Spring Boot应用程序，同时保持灵活性和可扩展性。这有助于加速应用程序开发过程，减少了繁琐的配置工作。

### 34、什么是 Spring Boot ？


Spring Boot是一个用于简化和加速Spring应用程序开发的开源框架。它是由Spring团队开发和维护的，构建在Spring框架之上，旨在减少开发人员在配置和搭建Spring应用程序时的工作量。Spring Boot提供了一种约定大于配置（Convention over Configuration）的开发方式，让开发者能够更专注于应用程序的业务逻辑而不是复杂的配置。

以下是Spring Boot的一些关键特点和概念：

1. **自动配置（Auto-Configuration）：** Spring Boot可以根据应用程序的依赖关系自动配置应用程序。它通过在类路径中查找依赖库并应用默认配置来实现这一点。这意味着开发人员无需手动配置大量的Spring配置文件，可以更快地启动和运行应用程序。

2. **Starter依赖项：** Spring Boot引入了"Starter"依赖项的概念，这些依赖项是一组常见功能的预配置依赖项。开发者可以通过添加适当的Starter依赖项来快速启动不同类型的应用程序，例如Web应用、数据访问应用、安全应用等。

3. **嵌入式Web服务器：** Spring Boot集成了常见的嵌入式Web服务器，如Tomcat、Jetty和Undertow，这意味着您可以将应用程序打包成一个可执行的JAR文件或WAR文件，而不需要外部Web服务器。

4. **开发者工具：** Spring Boot提供了一组开发者工具，包括自动重启、热部署等功能，可以提高开发效率。

5. **外部化配置：** Spring Boot允许将应用程序的配置信息外部化，可以使用属性文件、YAML文件、环境变量等来配置应用程序的属性，使得应用程序的配置更灵活。

6. **生态系统：** Spring Boot拥有丰富的生态系统，支持各种数据访问、消息传递、安全性、日志记录、监控等方面的扩展和集成。

7. **自动化构建：** Spring Boot应用程序通常使用Maven或Gradle进行构建，可以通过插件轻松地创建可执行的JAR文件或WAR文件。

Spring Boot的目标是简化Spring应用程序的开发和部署，使开发者能够更容易地构建高效、可维护和可扩展的应用程序。它适用于各种类型的应用程序，包括Web应用、微服务、批处理应用等。Spring Boot的广泛采用使得它成为Java生态系统中的一个重要工具。

下⾯是⼀些推荐的博客：
1. https://juejin.cn/post/7035910505810100255
2. https://www.jianshu.com/p/dc12081b3598
