"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[2040],{66262:(a,i)=>{i.A=(a,i)=>{const l=a.__vccOpts||a;for(const[a,s]of i)l[a]=s;return l}},58187:(a,i,l)=>{l.r(i),l.d(i,{comp:()=>J,data:()=>m});var s=l(20641);const e=l.p+"assets/img/image-20200704111417472.d378a591.png",n=l.p+"assets/img/image-20200704112119729.301261ec.png",p=l.p+"assets/img/image-20200704112700211.654b590a.png",t=l.p+"assets/img/image-20200704145340513.3af5626e.png",h=l.p+"assets/img/image-20200704151731216.463cd668.png",r=l.p+"assets/img/image-20200704152052489.f30359e1.png",d=l.p+"assets/img/image-20200704182035810.2f0e8807.png",c=l.p+"assets/img/image-20200704183048061.c1cab21d.png",o=l.p+"assets/img/image-20200704183236169.f1f7fd95.png",v=l.p+"assets/img/image-20200704183436495.f9fe6b9d.png",g=l.p+"assets/img/image-20200704210429535.9e75b387.png",k=[(0,s.Fv)('<h2 id="前言" tabindex="-1"><a class="header-anchor" href="#前言"><span>前言</span></a></h2><p>作为Java工程师的你曾被伤害过吗？你是否也遇到过这些问题？</p><p>运行着的线上系统突然卡死，系统无法访问，甚至直接OOMM！</p><ul><li>想解决线上JVM GC问题，但却无从下手。</li><li>新项目上线，对各种JVM参数设置一脸茫然，直接默认吧然后就JJ了</li><li>每次面试之前都要重新背一遍JVM的一些原理概念性的东西，然而面试官却经常问你在实际项目中如何调优VM参数，如何解决GC、OOM等问题，一脸懵逼。</li></ul><figure><img src="'+e+'" alt="image-20200704111417472" tabindex="0" loading="lazy"><figcaption>image-20200704111417472</figcaption></figure><p>大部分Java开发人员，除会在项目中使用到与Java平台相关的各种高精尖技术，对于Java技术的核心Java虚拟机了解甚少。</p><p>一些有一定工作经验的开发人员，打心眼儿里觉得SSM、微服务等上层技术才是重点，基础技术并不重要，这其实是一种本末倒置的“病态”。如果我们把核心类库的API比做数学公式的话，那么Java虚拟机的知识就好比公式的推导过程。</p><p>计算机系统体系对我们来说越来越远，在不了解底层实现方式的前提下，通过高级语言很容易编写程序代码。但事实上计算机并不认识高级语言</p><figure><img src="'+n+'" alt="image-20200704112119729" tabindex="0" loading="lazy"><figcaption>image-20200704112119729</figcaption></figure><h2 id="架构师每天都在思考什么" tabindex="-1"><a class="header-anchor" href="#架构师每天都在思考什么"><span>架构师每天都在思考什么？</span></a></h2><ul><li>应该如何让我的系统更快？</li><li>如何避免系统出现瓶颈？</li></ul><p>知乎上有条帖子：应该如何看招聘信息，直通年薪50万+？</p><ul><li>参与现有系统的性能优化，重构，保证平台性能和稳定性</li><li>根据业务场景和需求，决定技术方向，做技术选型</li><li>能够独立架构和设计海量数据下高并发分布式解决方案，满足功能和非功能需求</li><li>解决各类潜在系统风险，核心功能的架构与代码编写</li><li>分析系统瓶颈，解决各种疑难杂症，性能调优等</li></ul><h2 id="为什么要学习jvm" tabindex="-1"><a class="header-anchor" href="#为什么要学习jvm"><span>为什么要学习JVM</span></a></h2><ul><li><p>面试的需要（BATJ、TMD，PKQ等面试都爱问）</p></li><li><p>中高级程序员必备技能</p><ul><li>项目管理、调优的需求</li></ul></li><li><p>追求极客的精神</p><ul><li>比如：垃圾回收算法、JIT（及时编译器）、底层原理</li></ul></li></ul><h2 id="java-vs-c" tabindex="-1"><a class="header-anchor" href="#java-vs-c"><span>Java vs C++</span></a></h2><p>垃圾收集机制为我们打理了很多繁琐的工作，大大提高了开发的效率，但是，垃圾收集也不是万能的，懂得JVM内部的内存结构、工作机制，是设计高扩展性应用和诊断运行时问题的基础，也是Java工程师进阶的必备能力。</p><figure><img src="'+p+'" alt="image-20200704112700211" tabindex="0" loading="lazy"><figcaption>image-20200704112700211</figcaption></figure><p>C语言需要自己来分配内存和回收内存，Java全部交给JVM进行分配和回收。</p><h2 id="推荐书籍" tabindex="-1"><a class="header-anchor" href="#推荐书籍"><span>推荐书籍</span></a></h2><figure><img src="'+t+'" alt="image-20200704145340513" tabindex="0" loading="lazy"><figcaption>image-20200704145340513</figcaption></figure><h2 id="java生态圈" tabindex="-1"><a class="header-anchor" href="#java生态圈"><span>Java生态圈</span></a></h2><p>Java是目前应用最为广泛的软件开发平台之一。随着Java以及Java社区的不断壮大Java 也早已不再是简简单单的一门计算机语言了，它更是一个平台、一种文化、一个社区。</p><ul><li><p>作为一个平台，Java虚拟机扮演着举足轻重的作用</p><ul><li>Groovy、Scala、JRuby、Kotlin等都是Java平台的一部分</li></ul></li><li><p>作为灯种文化，Java几乎成为了“开源”的代名词。</p><ul><li>第三方开源软件和框架。如Tomcat、Struts，MyBatis，Spring等。</li><li>就连JDK和JVM自身也有不少开源的实现，如openJDK、Harmony。</li></ul></li><li><p>作为一个社区，Java拥有全世界最多的技术拥护者和开源社区支持，有数不清的论坛和资料。从桌面应用软件、嵌入式开发到企业级应用、后台服务器、中间件，都可以看到Java的身影。其应用形式之复杂、参与人数之众多也令人咋舌。</p></li></ul><figure><img src="'+h+'" alt="image-20200704151731216" tabindex="0" loading="lazy"><figcaption>image-20200704151731216</figcaption></figure><p>每个语言都需要转换成字节码文件，最后转换的字节码文件都能通过Java虚拟机进行运行和处理</p><figure><img src="'+r+'" alt="image-20200704152052489" tabindex="0" loading="lazy"><figcaption>image-20200704152052489</figcaption></figure><p>随着Java7的正式发布，Java虚拟机的设计者们通过JSR-292规范基本实现在Java虚拟机平台上运行非Java语言编写的程序。</p><p>Java虚拟机根本不关心运行在其内部的程序到底是使用何种编程语言编写的，它只关心“字节码”文件。也就是说Java虚拟机拥有语言无关性，并不会单纯地与Java语言“终身绑定”，只要其他编程语言的编译结果满足并包含Java虚拟机的内部指令集、符号表以及其他的辅助信息，它就是一个有效的字节码文件，就能够被虚拟机所识别并装载运行。</p><h2 id="字节码" tabindex="-1"><a class="header-anchor" href="#字节码"><span>字节码</span></a></h2><p>我们平时说的java字节码，指的是用java语言编译成的字节码。准确的说任何能在jvm平台上执行的字节码格式都是一样的。所以应该统称为：jvm字节码。</p><p>不同的编译器，可以编译出相同的字节码文件，字节码文件也可以在不同的JVM上运行。</p><p>Java虚拟机与Java语言并没有必然的联系，它只与特定的二进制文件格式—Class文件格式所关联，Class文件中包含了Java虚拟机指令集（或者称为字节码、Bytecodes）和符号表，还有一些其他辅助信息。</p><h2 id="多语言混合编程" tabindex="-1"><a class="header-anchor" href="#多语言混合编程"><span>多语言混合编程</span></a></h2><p>Java平台上的多语言混合编程正成为主流，通过特定领域的语言去解决特定领域的问题是当前软件开发应对日趋复杂的项目需求的一个方向。</p><p>试想一下，在一个项目之中，并行处理用clojure语言编写，展示层使用JRuby/Rails，中间层则是Java，每个应用层都将使用不同的编程语言来完成，而且，接口对每一层的开发者都是透明的，各种语言之间的交互不存在任何困难，就像使用自己语言的原生API一样方便，因为它们最终都运行在一个虚拟机之上。</p><p>对这些运行于Java虚拟机之上、Java之外的语言，来自系统级的、底层的支持正在迅速增强，以JSR-292为核心的一系列项目和功能改进（如Da Vinci Machine项目、Nashorn引擎、InvokeDynamic指令、java.lang.invoke包等），推动Java虚拟机从“Java语言的虚拟机”向 “多语言虚拟机”的方向发展。</p><h2 id="java发展的重大事件" tabindex="-1"><a class="header-anchor" href="#java发展的重大事件"><span>Java发展的重大事件</span></a></h2><ul><li><p>1990年，在Sun计算机公司中，由Patrick Naughton、MikeSheridan及James Gosling领导的小组Green Team，开发出的新的程序语言，命名为oak，后期命名为Java</p></li><li><p>1995年，Sun正式发布Java和HotJava产品，Java首次公开亮相。</p></li><li><p>1996年1月23日sun Microsystems发布了JDK 1.0。</p></li><li><p>1998年，JDK1.2版本发布。同时，sun发布了JSP/Servlet、EJB规范，以及将Java分成了J2EE、J2SE和J2ME。这表明了Java开始向企业、桌面应用和移动设备应用3大领域挺进。</p></li><li><p>2000年，JDK1.3发布，Java HotSpot Virtual Machine正式发布，成为Java的默认虚拟机。</p></li><li><p>2002年，JDK1.4发布，古老的Classic虚拟机退出历史舞台。</p></li><li><p>2003年年底，Java平台的scala正式发布，同年Groovy也加入了Java阵营。</p></li><li><p>2004年，JDK1.5发布。同时JDK1.5改名为JavaSE5.0。</p></li><li><p>2006年，JDK6发布。同年，Java开源并建立了openJDK。顺理成章，Hotspot虚拟机也成为了openJDK中的默认虚拟机。</p></li><li><p>2007年，Java平台迎来了新伙伴Clojure。</p></li><li><p>2008年，oracle收购了BEA，得到了JRockit虚拟机。</p></li><li><p>2009年，Twitter宣布把后台大部分程序从Ruby迁移到scala，这是Java平台的又一次大规模应用。</p></li><li><p>2010年，oracle收购了sun，获得Java商标和最真价值的HotSpot虚拟机。此时，oracle拥有市场占用率最高的两款虚拟机HotSpot和JRockit，并计划在未来对它们进行整合：HotRockit</p></li><li><p>2011年，JDK7发布。在JDK1.7u4中，正式启用了新的垃圾回收器G1。</p></li><li><p>2017年，JDK9发布。将G1设置为默认Gc，替代CMS</p></li><li><p>同年，IBM的J9开源，形成了现在的open J9社区</p></li><li><p>2018年，Android的Java侵权案判决，Google赔偿oracle计88亿美元</p></li><li><p>同年，oracle宣告JavagE成为历史名词JDBC、JMS、Servlet赠予Eclipse基金会</p></li><li><p>同年，JDK11发布，LTS版本的JDK，发布革命性的zGc，调整JDK授权许可</p></li><li><p>2019年，JDK12发布，加入RedHat领导开发的shenandoah GC</p></li></ul><figure><img src="'+d+'" alt="image-20200704182035810" tabindex="0" loading="lazy"><figcaption>image-20200704182035810</figcaption></figure><p>在JDK11之前，oracleJDK中还会存在一些openJDK中没有的、闭源的功能。但在JDK11中，我们可以认为openJDK和oracleJDK代码实质上已经完全一致的程度。</p><h2 id="虚拟机与java虚拟机" tabindex="-1"><a class="header-anchor" href="#虚拟机与java虚拟机"><span>虚拟机与Java虚拟机</span></a></h2><h3 id="虚拟机" tabindex="-1"><a class="header-anchor" href="#虚拟机"><span>虚拟机</span></a></h3><p>所谓虚拟机（Virtual Machine），就是一台虚拟的计算机。它是一款软件，用来执行一系列虚拟计算机指令。大体上，虚拟机可以分为系统虚拟机和程序虚拟机。</p><ul><li>大名鼎鼎的Visual Box，Mware就属于系统虚拟机，它们完全是对物理计算机的仿真，提供了一个可运行完整操作系统的软件平台。</li><li>程序虚拟机的典型代表就是Java虚拟机，它专门为执行单个计算机程序而设计，在Java虚拟机中执行的指令我们称为Java字节码指令。</li></ul><p>无论是系统虚拟机还是程序虚拟机，在上面运行的软件都被限制于虚拟机提供的资源中。</p><h3 id="java虚拟机" tabindex="-1"><a class="header-anchor" href="#java虚拟机"><span>Java虚拟机</span></a></h3><p>Java虚拟机是一台执行Java字节码的虚拟计算机，它拥有独立的运行机制，其运行的Java字节码也未必由Java语言编译而成。</p><p>JVM平台的各种语言可以共享Java虚拟机带来的跨平台性、优秀的垃圾回器，以及可靠的即时编译器。</p><p>Java技术的核心就是Java虚拟机（JVM，Java Virtual Machine），因为所有的Java程序都运行在Java虚拟机内部。</p><p>Java虚拟机就是二进制字节码的运行环境，负责装载字节码到其内部，解释/编译为对应平台上的机器指令执行。每一条Java指令，Java虚拟机规范中都有详细定义，如怎么取操作数，怎么处理操作数，处理结果放在哪里。</p><p>特点：</p><ul><li>一次编译，到处运行</li><li>自动内存管理</li><li>自动垃圾回收功能</li></ul><h2 id="jvm的位置" tabindex="-1"><a class="header-anchor" href="#jvm的位置"><span>JVM的位置</span></a></h2><p>JVM是运行在操作系统之上的，它与硬件没有直接的交互</p><figure><img src="'+c+'" alt="image-20200704183048061" tabindex="0" loading="lazy"><figcaption>image-20200704183048061</figcaption></figure><p>Java的体系结构</p><figure><img src="'+o+'" alt="image-20200704183236169" tabindex="0" loading="lazy"><figcaption>image-20200704183236169</figcaption></figure><h2 id="jvm整体结构" tabindex="-1"><a class="header-anchor" href="#jvm整体结构"><span>JVM整体结构</span></a></h2><ul><li>HotSpot VM是目前市面上高性能虚拟机的代表作之一。</li><li>它采用解释器与即时编译器并存的架构。</li><li>在今天，Java程序的运行性能早已脱胎换骨，已经达到了可以和C/C++程序一较高下的地步。</li></ul><figure><img src="'+v+'" alt="image-20200704183436495" tabindex="0" loading="lazy"><figcaption>image-20200704183436495</figcaption></figure><p>执行引擎包含三部分：解释器，及时编译器，垃圾回收器</p><h2 id="java代码执行流程" tabindex="-1"><a class="header-anchor" href="#java代码执行流程"><span>Java代码执行流程</span></a></h2><figure><img src="'+g+'" alt="image-20200704210429535" tabindex="0" loading="lazy"><figcaption>image-20200704210429535</figcaption></figure><p>只是能生成被Java虚拟机所能解释的字节码文件，那么理论上就可以自己设计一套代码了</p><h2 id="jvm的架构模型" tabindex="-1"><a class="header-anchor" href="#jvm的架构模型"><span>JVM的架构模型</span></a></h2><p>Java编译器输入的指令流基本上是一种基于栈的指令集架构，另外一种指令集架构则是基于寄存器的指令集架构。具体来说：这两种架构之间的区别：</p><p>基于栈式架构的特点</p><ul><li>设计和实现更简单，适用于资源受限的系统；</li><li>避开了寄存器的分配难题：使用零地址指令方式分配。</li><li>指令流中的指令大部分是零地址指令，其执行过程依赖于操作栈。指令集更小，编译器容易实现。</li><li>不需要硬件支持，可移植性更好，更好实现跨平台</li></ul><p>基于寄存器架构的特点</p><ul><li>典型的应用是x86的二进制指令集：比如传统的PC以及Android的Davlik虚拟机。</li><li>指令集架构则完全依赖硬件，可移植性差</li><li>性能优秀和执行更高效</li><li>花费更少的指令去完成一项操作。</li><li>在大部分情况下，基于寄存器架构的指令集往往都以一地址指令、二地址指令和三地址指令为主，而基于栈式架构的指令集却是以零地址指令为主方水洋</li></ul><h3 id="举例" tabindex="-1"><a class="header-anchor" href="#举例"><span>举例</span></a></h3><p>同样执行2+3这种逻辑操作，其指令分别如下：</p><p>基于栈的计算流程（以Java虚拟机为例）：</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iconst_2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> //常量2入栈</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">istore_1</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iconst_3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> //</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 常量3入栈</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">istore_2</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iload_1</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iload_2</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">iadd</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> //常量2/3出栈，执行相加</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">istore_0</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> //</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> 结果5入栈</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>而基于寄存器的计算流程</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">mov</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> eax,2</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> //将eax寄存器的值设为1</span></span>\n<span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">add</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> eax,3</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> //使eax寄存器的值加3</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div></div></div><h3 id="字节码反编译" tabindex="-1"><a class="header-anchor" href="#字节码反编译"><span>字节码反编译</span></a></h3><p>我们编写一个简单的代码，然后查看一下字节码的反编译后的结果</p><div class="language-java line-numbers-mode" data-highlighter="shiki" data-ext="java" data-title="java" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">/**</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">@author</span><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;">: 阿飞</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> * @create: 2020-07-04-21:17</span></span>\n<span class="line"><span style="--shiki-light:#A0A1A7;--shiki-dark:#7F848E;--shiki-light-font-style:italic;--shiki-dark-font-style:italic;"> */</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> class</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;"> StackStruTest</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">    public</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> static</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> void</span><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;"> main</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(</span><span style="--shiki-light:#C18401;--shiki-dark:#E5C07B;">String</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">[] </span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;--shiki-light-font-style:inherit;--shiki-dark-font-style:italic;">args</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">)</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> {</span></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">        int</span><span style="--shiki-light:#E45649;--shiki-dark:#E06C75;"> i</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> =</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 2</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;"> +</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> 3</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">;</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">    }</span></span>\n<span class="line"><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">}</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>然后我们找到编译后的 class文件，使用下列命令进行反编译</p><div class="language-bash line-numbers-mode" data-highlighter="shiki" data-ext="bash" data-title="bash" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#4078F2;--shiki-dark:#61AFEF;">javap</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> -v</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> StackStruTest.class</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>得到的文件为:</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>  public static void main(java.lang.String[]);</span></span>\n<span class="line"><span>    descriptor: ([Ljava/lang/String;)V</span></span>\n<span class="line"><span>    flags: ACC_PUBLIC, ACC_STATIC</span></span>\n<span class="line"><span>    Code:</span></span>\n<span class="line"><span>      stack=2, locals=4, args_size=1</span></span>\n<span class="line"><span>         0: iconst_2</span></span>\n<span class="line"><span>         1: istore_1</span></span>\n<span class="line"><span>         2: iconst_3</span></span>\n<span class="line"><span>         3: istore_2</span></span>\n<span class="line"><span>         4: iload_1</span></span>\n<span class="line"><span>         5: iload_2</span></span>\n<span class="line"><span>         6: iadd</span></span>\n<span class="line"><span>         7: istore_3</span></span>\n<span class="line"><span>         8: return</span></span>\n<span class="line"><span>      LineNumberTable:</span></span>\n<span class="line"><span>        line 9: 0</span></span>\n<span class="line"><span>        line 10: 2</span></span>\n<span class="line"><span>        line 11: 4</span></span>\n<span class="line"><span>        line 12: 8</span></span>\n<span class="line"><span>      LocalVariableTable:</span></span>\n<span class="line"><span>        Start  Length  Slot  Name   Signature</span></span>\n<span class="line"><span>            0       9     0  args   [Ljava/lang/String;</span></span>\n<span class="line"><span>            2       7     1     i   I</span></span>\n<span class="line"><span>            4       5     2     j   I</span></span>\n<span class="line"><span>            8       1     3     k   I</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="总结" tabindex="-1"><a class="header-anchor" href="#总结"><span>总结</span></a></h2><p>由于跨平台性的设计，Java的指令都是根据栈来设计的。不同平台CPU架构不同，所以不能设计为基于寄存器的。优点是跨平台，指令集小，编译器容易实现，缺点是性能下降，实现同样的功能需要更多的指令。</p><p>时至今日，尽管嵌入式平台已经不是Java程序的主流运行平台了（准确来说应该是HotSpotVM的宿主环境已经不局限于嵌入式平台了），那么为什么不将架构更换为基于寄存器的架构呢？</p><h3 id="栈" tabindex="-1"><a class="header-anchor" href="#栈"><span>栈</span></a></h3><ul><li>跨平台性</li><li>指令集小</li><li>指令多</li><li>执行性能比寄存器差</li></ul><h2 id="jvm生命周期" tabindex="-1"><a class="header-anchor" href="#jvm生命周期"><span>JVM生命周期</span></a></h2><h3 id="虚拟机的启动" tabindex="-1"><a class="header-anchor" href="#虚拟机的启动"><span>虚拟机的启动</span></a></h3><p>Java虚拟机的启动是通过引导类加载器（bootstrap class loader）创建一个初始类（initial class）来完成的，这个类是由虚拟机的具体实现指定的。</p><h3 id="虚拟机的执行" tabindex="-1"><a class="header-anchor" href="#虚拟机的执行"><span>虚拟机的执行</span></a></h3><ul><li>一个运行中的Java虚拟机有着一个清晰的任务：执行Java程序。</li><li>程序开始执行时他才运行，程序结束时他就停止。</li><li>执行一个所谓的Java程序的时候，真真正正在执行的是一个叫做Java虚拟机的进程。</li></ul><h3 id="虚拟机的退出" tabindex="-1"><a class="header-anchor" href="#虚拟机的退出"><span>虚拟机的退出</span></a></h3><p>有如下的几种情况：</p><ul><li><p>程序正常执行结束</p></li><li><p>程序在执行过程中遇到了异常或错误而异常终止</p></li><li><p>由于操作系统用现错误而导致Java虚拟机进程终止</p></li><li><p>某线程调用Runtime类或system类的exit方法，或Runtime类的halt方法，并且Java安全管理器也允许这次exit或halt操作。</p></li><li><p>除此之外，JNI（Java Native Interface）规范描述了用JNI Invocation API来加载或卸载 Java虚拟机时，Java虚拟机的退出情况。</p></li></ul><h2 id="jvm发展历程" tabindex="-1"><a class="header-anchor" href="#jvm发展历程"><span>JVM发展历程</span></a></h2><h3 id="sun-classic-vm" tabindex="-1"><a class="header-anchor" href="#sun-classic-vm"><span>Sun Classic VM</span></a></h3><ul><li>早在1996年Java1.0版本的时候，Sun公司发布了一款名为sun classic VM的Java虚拟机，它同时也是世界上第一款商用Java虚拟机，JDK1.4时完全被淘汰。</li><li>这款虚拟机内部只提供解释器。现在还有及时编译器，因此效率比较低，而及时编译器会把热点代码缓存起来，那么以后使用热点代码的时候，效率就比较高。</li><li>如果使用JIT编译器，就需要进行外挂。但是一旦使用了JIT编译器，JIT就会接管虚拟机的执行系统。解释器就不再工作。解释器和编译器不能配合工作。</li><li>现在hotspot内置了此虚拟机。</li></ul><h3 id="exact-vm" tabindex="-1"><a class="header-anchor" href="#exact-vm"><span>Exact VM</span></a></h3><p>为了解决上一个虚拟机问题，jdk1.2时，sun提供了此虚拟机。 Exact Memory Management：准确式内存管理</p><ul><li>也可以叫Non-Conservative/Accurate Memory Management</li><li>虚拟机可以知道内存中某个位置的数据具体是什么类型。|</li></ul><p>具备现代高性能虚拟机的维形</p><ul><li>热点探测（寻找出热点代码进行缓存）</li><li>编译器与解释器混合工作模式</li></ul><p>只在solaris平台短暂使用，其他平台上还是classic vm，英雄气短，终被Hotspot虚拟机替换</p><h3 id="hotspot-vm" tabindex="-1"><a class="header-anchor" href="#hotspot-vm"><span>HotSpot VM</span></a></h3><p>HotSpot历史</p><ul><li>最初由一家名为“Longview Technologies”的小公司设计</li><li>1997年，此公司被sun收购；2009年，Sun公司被甲骨文收购。</li><li>JDK1.3时，HotSpot VM成为默认虚拟机</li></ul><p>目前Hotspot占有绝对的市场地位，称霸武林。</p><ul><li>不管是现在仍在广泛使用的JDK6，还是使用比例较多的JDK8中，默认的虚拟机都是HotSpot</li><li>Sun/oracle JDK和openJDK的默认虚拟机</li><li>因此本课程中默认介绍的虚拟机都是HotSpot，相关机制也主要是指HotSpot的Gc机制。（比如其他两个商用虚机都没有方法区的概念）</li></ul><p>从服务器、桌面到移动端、嵌入式都有应用。</p><p>名称中的HotSpot指的就是它的热点代码探测技术。</p><ul><li>通过计数器找到最具编译价值代码，触发即时编译或栈上替换</li><li>通过编译器与解释器协同工作，在最优化的程序响应时间与最佳执行性能中取得平衡</li></ul><h3 id="jrockit" tabindex="-1"><a class="header-anchor" href="#jrockit"><span>JRockit</span></a></h3><p>专注于服务器端应用</p><ul><li>它可以不太关注程序启动速度，因此JRockit内部不包含解析器实现，全部代码都靠即时编译器编译后执行。</li></ul><p>大量的行业基准测试显示，JRockit JVM是世界上最快的JVM。</p><ul><li>使用JRockit产品，客户已经体验到了显著的性能提高（一些超过了70%）和硬件成本的减少（达50%）。</li></ul><p>优势：全面的Java运行时解决方案组合</p><ul><li>JRockit面向延迟敏感型应用的解决方案JRockit Real Time提供以毫秒或微秒级的JVM响应时间，适合财务、军事指挥、电信网络的需要</li><li>MissionControl服务套件，它是一组以极低的开销来监控、管理和分析生产环境中的应用程序的工具。</li></ul><p>2008年，JRockit被oracle收购。</p><p>oracle表达了整合两大优秀虚拟机的工作，大致在JDK8中完成。整合的方式是在HotSpot的基础上，移植JRockit的优秀特性。</p><p>高斯林：目前就职于谷歌，研究人工智能和水下机器人</p><h3 id="ibm的j9" tabindex="-1"><a class="header-anchor" href="#ibm的j9"><span>IBM的J9</span></a></h3><p>全称：IBM Technology for Java Virtual Machine，简称IT4J，内部代号：J9</p><p>市场定位与HotSpot接近，服务器端、桌面应用、嵌入式等多用途VM广泛用于IBM的各种Java产品。</p><p>目前，有影响力的三大商用虚拟机之一，也号称是世界上最快的Java虚拟机。</p><p>2017年左右，IBM发布了开源J9VM，命名为openJ9，交给EClipse基金会管理，也称为Eclipse OpenJ9</p><p>OpenJDK -&gt; 是JDK开源了，包括了虚拟机</p><h3 id="kvm和cdc-cldc-hotspot" tabindex="-1"><a class="header-anchor" href="#kvm和cdc-cldc-hotspot"><span>KVM和CDC / CLDC Hotspot</span></a></h3><p>oracle在Java ME产品线上的两款虚拟机为：CDC/CLDC HotSpot Implementation VM KVM（Kilobyte）是CLDC-HI早期产品目前移动领域地位尴尬，智能机被Angroid和ioS二分天下。</p><p>KVM简单、轻量、高度可移植，面向更低端的设备上还维持自己的一片市场</p><ul><li>智能控制器、传感器</li><li>老人手机、经济欠发达地区的功能手机</li></ul><p>所有的虚拟机的原则：一次编译，到处运行。</p><h3 id="azul-vm" tabindex="-1"><a class="header-anchor" href="#azul-vm"><span>Azul VM</span></a></h3><p>前面三大“高性能Java虚拟机”使用在通用硬件平台上这里Azu1VW和BEALiquid VM是与特定硬件平台绑定、软硬件配合的专有虚拟机I</p><ul><li>高性能Java虚拟机中的战斗机。</li></ul><p>Azul VM是Azu1Systems公司在HotSpot基础上进行大量改进，运行于Azul Systems公司的专有硬件Vega系统上的ava虚拟机。</p><p>每个Azu1VM实例都可以管理至少数十个CPU和数百GB内存的硬件资源，并提供在巨大内存范围内实现可控的GC时间的垃圾收集器、专有硬件优化的线程调度等优秀特性。</p><p>2010年，AzulSystems公司开始从硬件转向软件，发布了自己的zing JVM，可以在通用x86平台上提供接近于Vega系统的特性。</p><h3 id="liquid-vm" tabindex="-1"><a class="header-anchor" href="#liquid-vm"><span>Liquid VM</span></a></h3><p>高性能Java虚拟机中的战斗机。</p><p>BEA公司开发的，直接运行在自家Hypervisor系统上Liquid VM即是现在的JRockit VE（Virtual Edition），</p><p>Liquid VM不需要操作系统的支持，或者说它自己本身实现了一个专用操作系统的必要功能，如线程调度、文件系统、网络支持等。</p><p>随着JRockit虚拟机终止开发，Liquid vM项目也停止了。</p><h3 id="apache-marmony" tabindex="-1"><a class="header-anchor" href="#apache-marmony"><span>Apache Marmony</span></a></h3><p>Apache也曾经推出过与JDK1.5和JDK1.6兼容的Java运行平台Apache Harmony。</p><p>它是IElf和Inte1联合开发的开源JVM，受到同样开源的openJDK的压制，Sun坚决不让Harmony获得JCP认证，最终于2011年退役，IBM转而参与OpenJDK</p><p>虽然目前并没有Apache Harmony被大规模商用的案例，但是它的Java类库代码吸纳进了Android SDK。</p><h3 id="micorsoft-jvm" tabindex="-1"><a class="header-anchor" href="#micorsoft-jvm"><span>Micorsoft JVM</span></a></h3><p>微软为了在IE3浏览器中支持Java Applets，开发了Microsoft JVM。</p><p>只能在window平台下运行。但确是当时Windows下性能最好的Java VM。</p><p>1997年，sun以侵犯商标、不正当竞争罪名指控微软成功，赔了sun很多钱。微软windowsXPSP3中抹掉了其VM。现在windows上安装的jdk都是HotSpot。</p><h3 id="taobao-jvm" tabindex="-1"><a class="header-anchor" href="#taobao-jvm"><span>Taobao JVM</span></a></h3><p>由AliJVM团队发布。阿里，国内使用Java最强大的公司，覆盖云计算、金融、物流、电商等众多领域，需要解决高并发、高可用、分布式的复合问题。有大量的开源产品。</p><p>基于openJDK开发了自己的定制版本AlibabaJDK，简称AJDK。是整个阿里Java体系的基石。</p><p>基于openJDK Hotspot VM发布的国内第一个优化、深度定制且开源的高性能服务器版Java虚拟机。</p><ul><li>创新的GCIH（GCinvisible heap）技术实现了off-heap，即将生命周期较长的Java对象从heap中移到heap之外，并且Gc不能管理GCIH内部的Java对象，以此达到降低GC的回收频率和提升Gc的回收效率的目的。</li><li>GCIH中的对象还能够在多个Java虚拟机进程中实现共享</li><li>使用crc32指令实现JvM intrinsic降低JNI的调用开销</li><li>PMU hardware的Java profiling tool和诊断协助功能</li><li>针对大数据场景的ZenGc</li></ul><p>taobao vm应用在阿里产品上性能高，硬件严重依赖inte1的cpu，损失了兼容性，但提高了性能</p><p>目前已经在淘宝、天猫上线，把oracle官方JvM版本全部替换了。</p><h3 id="dalvik-vm" tabindex="-1"><a class="header-anchor" href="#dalvik-vm"><span>Dalvik VM</span></a></h3><p>谷歌开发的，应用于Android系统，并在Android2.2中提供了JIT，发展迅猛。</p><p>Dalvik y只能称作虚拟机，而不能称作“Java虚拟机”，它没有遵循 Java虚拟机规范</p><p>不能直接执行Java的Class文件</p><p>基于寄存器架构，不是jvm的栈架构。</p><p>执行的是编译以后的dex（Dalvik Executable）文件。执行效率比较高。</p><ul><li>它执行的dex（Dalvik Executable）文件可以通过class文件转化而来，使用Java语法编写应用程序，可以直接使用大部分的Java API等。</li></ul><p>Android 5.0使用支持提前编译（Ahead of Time Compilation，AoT）的ART VM替换Dalvik VM。</p><h3 id="graal-vm" tabindex="-1"><a class="header-anchor" href="#graal-vm"><span>Graal VM</span></a></h3><p>2018年4月，oracle Labs公开了GraalvM，号称 &quot;Run Programs Faster Anywhere&quot;，勃勃野心。与1995年java的”write once，run anywhere&quot;遥相呼应。</p><p>GraalVM在HotSpot VM基础上增强而成的跨语言全栈虚拟机，可以作为“任何语言” 的运行平台使用。语言包括：Java、Scala、Groovy、Kotlin；C、C++、Javascript、Ruby、Python、R等</p><p>支持不同语言中混用对方的接口和对象，支持这些语言使用已经编写好的本地库文件</p><p>工作原理是将这些语言的源代码或源代码编译后的中间格式，通过解释器转换为能被Graal VM接受的中间表示。Graal VM提供Truffle工具集快速构建面向一种新语言的解释器。在运行时还能进行即时编译优化，获得比原生编译器更优秀的执行效率。</p><p>如果说HotSpot有一天真的被取代，Graalvm希望最大。但是Java的软件生态没有丝毫变化。</p><h3 id="总结-1" tabindex="-1"><a class="header-anchor" href="#总结-1"><span>总结</span></a></h3><p>具体JVM的内存结构，其实取决于其实现，不同厂商的JVM，或者同一厂商发布的不同版本，都有可能存在一定差异。主要以oracle HotSpot VM为默认虚拟机。</p>',177)],u={},J=(0,l(66262).A)(u,[["render",function(a,i){return(0,s.uX)(),(0,s.CE)("div",null,k)}]]),m=JSON.parse('{"path":"/study-notes/JVM/Memory-GC/Java-Architecture/","title":"JVM与Java体系结构","lang":"zh-CN","frontmatter":{"title":"JVM与Java体系结构","date":"2023-03-18T00:00:00.000Z","description":"前言 作为Java工程师的你曾被伤害过吗？你是否也遇到过这些问题？ 运行着的线上系统突然卡死，系统无法访问，甚至直接OOMM！ 想解决线上JVM GC问题，但却无从下手。 新项目上线，对各种JVM参数设置一脸茫然，直接默认吧然后就JJ了 每次面试之前都要重新背一遍JVM的一些原理概念性的东西，然而面试官却经常问你在实际项目中如何调优VM参数，如何解决G...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/blog/study-notes/JVM/Memory-GC/Java-Architecture/"}],["meta",{"property":"og:site_name","content":"撄宁的博客"}],["meta",{"property":"og:title","content":"JVM与Java体系结构"}],["meta",{"property":"og:description","content":"前言 作为Java工程师的你曾被伤害过吗？你是否也遇到过这些问题？ 运行着的线上系统突然卡死，系统无法访问，甚至直接OOMM！ 想解决线上JVM GC问题，但却无从下手。 新项目上线，对各种JVM参数设置一脸茫然，直接默认吧然后就JJ了 每次面试之前都要重新背一遍JVM的一些原理概念性的东西，然而面试官却经常问你在实际项目中如何调优VM参数，如何解决G..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-11T14:20:56.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:published_time","content":"2023-03-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-11T14:20:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"JVM与Java体系结构\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-11T14:20:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"前言","slug":"前言","link":"#前言","children":[]},{"level":2,"title":"架构师每天都在思考什么？","slug":"架构师每天都在思考什么","link":"#架构师每天都在思考什么","children":[]},{"level":2,"title":"为什么要学习JVM","slug":"为什么要学习jvm","link":"#为什么要学习jvm","children":[]},{"level":2,"title":"Java vs C++","slug":"java-vs-c","link":"#java-vs-c","children":[]},{"level":2,"title":"推荐书籍","slug":"推荐书籍","link":"#推荐书籍","children":[]},{"level":2,"title":"Java生态圈","slug":"java生态圈","link":"#java生态圈","children":[]},{"level":2,"title":"字节码","slug":"字节码","link":"#字节码","children":[]},{"level":2,"title":"多语言混合编程","slug":"多语言混合编程","link":"#多语言混合编程","children":[]},{"level":2,"title":"Java发展的重大事件","slug":"java发展的重大事件","link":"#java发展的重大事件","children":[]},{"level":2,"title":"虚拟机与Java虚拟机","slug":"虚拟机与java虚拟机","link":"#虚拟机与java虚拟机","children":[{"level":3,"title":"虚拟机","slug":"虚拟机","link":"#虚拟机","children":[]},{"level":3,"title":"Java虚拟机","slug":"java虚拟机","link":"#java虚拟机","children":[]}]},{"level":2,"title":"JVM的位置","slug":"jvm的位置","link":"#jvm的位置","children":[]},{"level":2,"title":"JVM整体结构","slug":"jvm整体结构","link":"#jvm整体结构","children":[]},{"level":2,"title":"Java代码执行流程","slug":"java代码执行流程","link":"#java代码执行流程","children":[]},{"level":2,"title":"JVM的架构模型","slug":"jvm的架构模型","link":"#jvm的架构模型","children":[{"level":3,"title":"举例","slug":"举例","link":"#举例","children":[]},{"level":3,"title":"字节码反编译","slug":"字节码反编译","link":"#字节码反编译","children":[]}]},{"level":2,"title":"总结","slug":"总结","link":"#总结","children":[{"level":3,"title":"栈","slug":"栈","link":"#栈","children":[]}]},{"level":2,"title":"JVM生命周期","slug":"jvm生命周期","link":"#jvm生命周期","children":[{"level":3,"title":"虚拟机的启动","slug":"虚拟机的启动","link":"#虚拟机的启动","children":[]},{"level":3,"title":"虚拟机的执行","slug":"虚拟机的执行","link":"#虚拟机的执行","children":[]},{"level":3,"title":"虚拟机的退出","slug":"虚拟机的退出","link":"#虚拟机的退出","children":[]}]},{"level":2,"title":"JVM发展历程","slug":"jvm发展历程","link":"#jvm发展历程","children":[{"level":3,"title":"Sun Classic VM","slug":"sun-classic-vm","link":"#sun-classic-vm","children":[]},{"level":3,"title":"Exact VM","slug":"exact-vm","link":"#exact-vm","children":[]},{"level":3,"title":"HotSpot VM","slug":"hotspot-vm","link":"#hotspot-vm","children":[]},{"level":3,"title":"JRockit","slug":"jrockit","link":"#jrockit","children":[]},{"level":3,"title":"IBM的J9","slug":"ibm的j9","link":"#ibm的j9","children":[]},{"level":3,"title":"KVM和CDC / CLDC  Hotspot","slug":"kvm和cdc-cldc-hotspot","link":"#kvm和cdc-cldc-hotspot","children":[]},{"level":3,"title":"Azul VM","slug":"azul-vm","link":"#azul-vm","children":[]},{"level":3,"title":"Liquid VM","slug":"liquid-vm","link":"#liquid-vm","children":[]},{"level":3,"title":"Apache Marmony","slug":"apache-marmony","link":"#apache-marmony","children":[]},{"level":3,"title":"Micorsoft JVM","slug":"micorsoft-jvm","link":"#micorsoft-jvm","children":[]},{"level":3,"title":"Taobao JVM","slug":"taobao-jvm","link":"#taobao-jvm","children":[]},{"level":3,"title":"Dalvik VM","slug":"dalvik-vm","link":"#dalvik-vm","children":[]},{"level":3,"title":"Graal VM","slug":"graal-vm","link":"#graal-vm","children":[]},{"level":3,"title":"总结","slug":"总结-1","link":"#总结-1","children":[]}]}],"git":{"createdTime":1723381883000,"updatedTime":1723386056000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":2}]},"readingTime":{"minutes":21.14,"words":6341},"filePathRelative":"study-notes/JVM/Memory-GC/Java-Architecture/README.md","localizedDate":"2023年3月18日","excerpt":"<h2>前言</h2>\\n<p>作为Java工程师的你曾被伤害过吗？你是否也遇到过这些问题？</p>\\n<p>运行着的线上系统突然卡死，系统无法访问，甚至直接OOMM！</p>\\n<ul>\\n<li>想解决线上JVM GC问题，但却无从下手。</li>\\n<li>新项目上线，对各种JVM参数设置一脸茫然，直接默认吧然后就JJ了</li>\\n<li>每次面试之前都要重新背一遍JVM的一些原理概念性的东西，然而面试官却经常问你在实际项目中如何调优VM参数，如何解决GC、OOM等问题，一脸懵逼。</li>\\n</ul>\\n<figure><figcaption>image-20200704111417472</figcaption></figure>","autoDesc":true}')}}]);