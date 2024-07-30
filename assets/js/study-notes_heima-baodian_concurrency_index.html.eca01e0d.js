"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[956],{66262:(l,i)=>{i.A=(l,i)=>{const n=l.__vccOpts||l;for(const[l,t]of i)n[l]=t;return n}},11480:(l,i,n)=>{n.r(i),n.d(i,{comp:()=>g,data:()=>u});var t=n(20641);const o=n.p+"assets/img/image-20210831090722658.1284b03e.png",e=n.p+"assets/img/image-20210831092652602.88607444.png",r=n.p+"assets/img/image-20210831093204388.457a6e96.png",a=[(0,t.Fv)('<h1 id="并发篇" tabindex="-1"><a class="header-anchor" href="#并发篇"><span>并发篇</span></a></h1><h2 id="_1-线程状态" tabindex="-1"><a class="header-anchor" href="#_1-线程状态"><span>1. 线程状态</span></a></h2><p><strong>要求</strong></p><ul><li>掌握 Java 线程六种状态</li><li>掌握 Java 线程状态转换</li><li>能理解五种状态与六种状态两种说法的区别</li></ul><p><strong>六种状态及转换</strong></p><figure><img src="'+o+'" alt="image-20210831090722658" tabindex="0" loading="lazy"><figcaption>image-20210831090722658</figcaption></figure><p>分别是</p><ul><li>新建 <ul><li>当一个线程对象被创建，但还未调用 start 方法时处于<strong>新建</strong>状态</li><li>此时未与操作系统底层线程关联</li></ul></li><li>可运行 <ul><li>调用了 start 方法，就会由<strong>新建</strong>进入<strong>可运行</strong></li><li>此时与底层线程关联，由操作系统调度执行</li></ul></li><li>终结 <ul><li>线程内代码已经执行完毕，由<strong>可运行</strong>进入<strong>终结</strong></li><li>此时会取消与底层线程关联</li></ul></li><li>阻塞 <ul><li>当获取锁失败后，由<strong>可运行</strong>进入 Monitor 的阻塞队列<strong>阻塞</strong>，此时不占用 cpu 时间</li><li>当持锁线程释放锁时，会按照一定规则唤醒阻塞队列中的<strong>阻塞</strong>线程，唤醒后的线程进入<strong>可运行</strong>状态</li></ul></li><li>等待 <ul><li>当获取锁成功后，但由于条件不满足，调用了 wait() 方法，此时从<strong>可运行</strong>状态释放锁进入 Monitor 等待集合<strong>等待</strong>，同样不占用 cpu 时间</li><li>当其它持锁线程调用 notify() 或 notifyAll() 方法，会按照一定规则唤醒等待集合中的<strong>等待</strong>线程，恢复为<strong>可运行</strong>状态</li></ul></li><li>有时限等待 <ul><li>当获取锁成功后，但由于条件不满足，调用了 wait(long) 方法，此时从<strong>可运行</strong>状态释放锁进入 Monitor 等待集合进行<strong>有时限等待</strong>，同样不占用 cpu 时间</li><li>当其它持锁线程调用 notify() 或 notifyAll() 方法，会按照一定规则唤醒等待集合中的<strong>有时限等待</strong>线程，恢复为<strong>可运行</strong>状态，并重新去竞争锁</li><li>如果等待超时，也会从<strong>有时限等待</strong>状态恢复为<strong>可运行</strong>状态，并重新去竞争锁</li><li>还有一种情况是调用 sleep(long) 方法也会从<strong>可运行</strong>状态进入<strong>有时限等待</strong>状态，但与 Monitor 无关，不需要主动唤醒，超时时间到自然恢复为<strong>可运行</strong>状态</li></ul></li></ul><blockquote><p><em><strong>其它情况（只需了解）</strong></em></p><ul><li>可以用 interrupt() 方法打断<strong>等待</strong>、<strong>有时限等待</strong>的线程，让它们恢复为<strong>可运行</strong>状态</li><li>park，unpark 等方法也可以让线程等待和唤醒</li></ul></blockquote><p><strong>五种状态</strong></p><p>五种状态的说法来自于操作系统层面的划分</p><figure><img src="'+e+'" alt="image-20210831092652602" tabindex="0" loading="lazy"><figcaption>image-20210831092652602</figcaption></figure><ul><li>运行态：分到 cpu 时间，能真正执行线程内代码的</li><li>就绪态：有资格分到 cpu 时间，但还未轮到它的</li><li>阻塞态：没资格分到 cpu 时间的 <ul><li>涵盖了 java 状态中提到的<strong>阻塞</strong>、<strong>等待</strong>、<strong>有时限等待</strong></li><li>多出了阻塞 I/O，指线程在调用阻塞 I/O 时，实际活由 I/O 设备完成，此时线程无事可做，只能干等</li></ul></li><li>新建与终结态：与 java 中同名状态类似，不再啰嗦</li></ul><h2 id="_2-线程池" tabindex="-1"><a class="header-anchor" href="#_2-线程池"><span>2. 线程池</span></a></h2><p><strong>要求</strong></p><ul><li>掌握线程池的 7 大核心参数</li></ul><p><strong>七大参数</strong></p><ol><li>corePoolSize 核心线程数目 - 池中会保留的最多线程数</li><li>maximumPoolSize 最大线程数目 - 核心线程+救急线程的最大数目</li><li>keepAliveTime 生存时间 - 救急线程的生存时间，生存时间内没有新任务，此线程资源会释放</li><li>unit 时间单位 - 救急线程的生存时间单位，如秒、毫秒等</li><li>workQueue - 当没有空闲核心线程时，新来任务会加入到此队列排队，队列满会创建救急线程执行任务</li><li>threadFactory 线程工厂 - 可以定制线程对象的创建，例如设置线程名字、是否是守护线程等</li><li>handler 拒绝策略 - 当所有线程都在繁忙，workQueue 也放满时，会触发拒绝策略 <ol><li>抛异常 java.util.concurrent.ThreadPoolExecutor.AbortPolicy</li><li>由调用者执行任务 java.util.concurrent.ThreadPoolExecutor.CallerRunsPolicy</li><li>丢弃任务 java.util.concurrent.ThreadPoolExecutor.DiscardPolicy</li><li>丢弃最早排队任务 java.util.concurrent.ThreadPoolExecutor.DiscardOldestPolicy</li></ol></li></ol><figure><img src="'+r+'" alt="image-20210831093204388" tabindex="0" loading="lazy"><figcaption>image-20210831093204388</figcaption></figure><blockquote><p><em><strong>代码说明</strong></em></p><p>day02.TestThreadPoolExecutor 以较为形象的方式演示了线程池的核心组成</p></blockquote><h2 id="_3-wait-vs-sleep" tabindex="-1"><a class="header-anchor" href="#_3-wait-vs-sleep"><span>3. wait vs sleep</span></a></h2><p><strong>要求</strong></p><ul><li>能够说出二者区别</li></ul><p><strong>一个共同点，三个不同点</strong></p><p>共同点</p><ul><li>wait() ，wait(long) 和 sleep(long) 的效果都是让当前线程暂时放弃 CPU 的使用权，进入阻塞状态</li></ul><p>不同点</p><ul><li><p>方法归属不同</p><ul><li>sleep(long) 是 Thread 的静态方法</li><li>而 wait()，wait(long) 都是 Object 的成员方法，每个对象都有</li></ul></li><li><p>醒来时机不同</p><ul><li>执行 sleep(long) 和 wait(long) 的线程都会在等待相应毫秒后醒来</li><li>wait(long) 和 wait() 还可以被 notify 唤醒，wait() 如果不唤醒就一直等下去</li><li>它们都可以被打断唤醒</li></ul></li><li><p>锁特性不同（重点）</p><ul><li>wait 方法的调用必须先获取 wait 对象的锁，而 sleep 则无此限制</li><li>wait 方法执行后会释放对象锁，允许其它线程获得该对象锁（我放弃 cpu，但你们还可以用）</li><li>而 sleep 如果在 synchronized 代码块中执行，并不会释放对象锁（我放弃 cpu，你们也用不了）</li></ul></li></ul><h2 id="_4-lock-vs-synchronized" tabindex="-1"><a class="header-anchor" href="#_4-lock-vs-synchronized"><span>4. lock vs synchronized</span></a></h2><p><strong>要求</strong></p><ul><li>掌握 lock 与 synchronized 的区别</li><li>理解 ReentrantLock 的公平、非公平锁</li><li>理解 ReentrantLock 中的条件变量</li></ul><p><strong>三个层面</strong></p><p>不同点</p><ul><li>语法层面 <ul><li>synchronized 是关键字，源码在 jvm 中，用 c++ 语言实现</li><li>Lock 是接口，源码由 jdk 提供，用 java 语言实现</li><li>使用 synchronized 时，退出同步代码块锁会自动释放，而使用 Lock 时，需要手动调用 unlock 方法释放锁</li></ul></li><li>功能层面 <ul><li>二者均属于悲观锁、都具备基本的互斥、同步、锁重入功能</li><li>Lock 提供了许多 synchronized 不具备的功能，例如获取等待状态、公平锁、可打断、可超时、多条件变量</li><li>Lock 有适合不同场景的实现，如 ReentrantLock， ReentrantReadWriteLock</li></ul></li><li>性能层面 <ul><li>在没有竞争时，synchronized 做了很多优化，如偏向锁、轻量级锁，性能不赖</li><li>在竞争激烈时，Lock 的实现通常会提供更好的性能</li></ul></li></ul><p><strong>公平锁</strong></p><ul><li>公平锁的公平体现 <ul><li><strong>已经处在阻塞队列</strong>中的线程（不考虑超时）始终都是公平的，先进先出</li><li>公平锁是指<strong>未处于阻塞队列</strong>中的线程来争抢锁，如果队列不为空，则老实到队尾等待</li><li>非公平锁是指<strong>未处于阻塞队列</strong>中的线程来争抢锁，与队列头唤醒的线程去竞争，谁抢到算谁的</li></ul></li><li>公平锁会降低吞吐量，一般不用</li></ul><p><strong>条件变量</strong></p><ul><li>ReentrantLock 中的条件变量功能类似于普通 synchronized 的 wait，notify，用在当线程获得锁后，发现条件不满足时，临时等待的链表结构</li><li>与 synchronized 的等待集合不同之处在于，ReentrantLock 中的条件变量可以有多个，可以实现更精细的等待、唤醒控制</li></ul><blockquote><p><em><strong>代码说明</strong></em></p><ul><li>day02.TestReentrantLock 用较为形象的方式演示 ReentrantLock 的内部结构</li></ul></blockquote><h2 id="_5-volatile" tabindex="-1"><a class="header-anchor" href="#_5-volatile"><span>5. volatile</span></a></h2><p><strong>要求</strong></p><ul><li>掌握线程安全要考虑的三个问题</li><li>掌握 volatile 能解决哪些问题</li></ul><p><strong>原子性</strong></p><ul><li>起因：多线程下，不同线程的<strong>指令发生了交错</strong>导致的共享变量的读写混乱</li><li>解决：用悲观锁或乐观锁解决，volatile 并不能解决原子性</li></ul><p><strong>可见性</strong></p><ul><li>起因：由于<strong>编译器优化、或缓存优化、或 CPU 指令重排序优化</strong>导致的对共享变量所做的修改另外的线程看不到</li><li>解决：用 volatile 修饰共享变量，能够防止编译器等优化发生，让一个线程对共享变量的修改对另一个线程可见</li></ul><p><strong>有序性</strong></p><ul><li>起因：由于<strong>编译器优化、或缓存优化、或 CPU 指令重排序优化</strong>导致指令的实际执行顺序与编写顺序不一致</li><li>解决：用 volatile 修饰共享变量会在读、写共享变量时加入不同的屏障，阻止其他读写操作越过屏障，从而达到阻止重排序的效果</li><li>注意： <ul><li><strong>volatile 变量写</strong>加的屏障是阻止上方其它写操作越过屏障排到 <strong>volatile 变量写</strong>之下</li><li><strong>volatile 变量读</strong>加的屏障是阻止下方其它读操作越过屏障排到 <strong>volatile 变量读</strong>之上</li><li>volatile 读写加入的屏障只能防止同一线程内的指令重排</li></ul></li></ul><blockquote><p><em><strong>代码说明</strong></em></p><ul><li>day02.threadsafe.AddAndSubtract 演示原子性</li><li>day02.threadsafe.ForeverLoop 演示可见性 <ul><li>注意：本例经实践检验是编译器优化导致的可见性问题</li></ul></li><li>day02.threadsafe.Reordering 演示有序性 <ul><li>需要打成 jar 包后测试</li></ul></li><li>请同时参考视频讲解</li></ul></blockquote><h2 id="_6-悲观锁-vs-乐观锁" tabindex="-1"><a class="header-anchor" href="#_6-悲观锁-vs-乐观锁"><span>6. 悲观锁 vs 乐观锁</span></a></h2><p><strong>要求</strong></p><ul><li>掌握悲观锁和乐观锁的区别</li></ul><p><strong>对比悲观锁与乐观锁</strong></p><ul><li><p>悲观锁的代表是 synchronized 和 Lock 锁</p><ul><li>其核心思想是【线程只有占有了锁，才能去操作共享变量，每次只有一个线程占锁成功，获取锁失败的线程，都得停下来等待】</li><li>线程从运行到阻塞、再从阻塞到唤醒，涉及线程上下文切换，如果频繁发生，影响性能</li><li>实际上，线程在获取 synchronized 和 Lock 锁时，如果锁已被占用，都会做几次重试操作，减少阻塞的机会</li></ul></li><li><p>乐观锁的代表是 AtomicInteger，使用 cas 来保证原子性</p><ul><li>其核心思想是【无需加锁，每次只有一个线程能成功修改共享变量，其它失败的线程不需要停止，不断重试直至成功】</li><li>由于线程一直运行，不需要阻塞，因此不涉及线程上下文切换</li><li>它需要多核 cpu 支持，且线程数不应超过 cpu 核数</li></ul></li></ul><blockquote><p><em><strong>代码说明</strong></em></p><ul><li>day02.SyncVsCas 演示了分别使用乐观锁和悲观锁解决原子赋值</li><li>请同时参考视频讲解</li></ul></blockquote><h2 id="_7-hashtable-vs-concurrenthashmap" tabindex="-1"><a class="header-anchor" href="#_7-hashtable-vs-concurrenthashmap"><span>7. Hashtable vs ConcurrentHashMap</span></a></h2><p><strong>要求</strong></p><ul><li>掌握 Hashtable 与 ConcurrentHashMap 的区别</li><li>掌握 ConcurrentHashMap 在不同版本的实现区别</li></ul><blockquote><p>更形象的演示，见资料中的 hash-demo.jar，运行需要 jdk14 以上环境，进入 jar 包目录，执行下面命令</p><div class="language- line-numbers-mode" data-highlighter="shiki" data-ext="" data-title="" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span>java -jar --add-exports java.base/jdk.internal.misc=ALL-UNNAMED hash-demo.jar</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div></blockquote><p><strong>Hashtable 对比 ConcurrentHashMap</strong></p><ul><li>Hashtable 与 ConcurrentHashMap 都是线程安全的 Map 集合</li><li>Hashtable 并发度低，整个 Hashtable 对应一把锁，同一时刻，只能有一个线程操作它</li><li>ConcurrentHashMap 并发度高，整个 ConcurrentHashMap 对应多把锁，只要线程访问的是不同锁，那么不会冲突</li></ul><p><strong>ConcurrentHashMap 1.7</strong></p><ul><li>数据结构：<code>Segment(大数组) + HashEntry(小数组) + 链表</code>，每个 Segment 对应一把锁，如果多个线程访问不同的 Segment，则不会冲突</li><li>并发度：Segment 数组大小即并发度，决定了同一时刻最多能有多少个线程并发访问。Segment 数组不能扩容，意味着并发度在 ConcurrentHashMap 创建时就固定了</li><li>索引计算 <ul><li>假设大数组长度是 $2^m$，key 在大数组内的索引是 key 的二次 hash 值的高 m 位</li><li>假设小数组长度是 $2^n$，key 在小数组内的索引是 key 的二次 hash 值的低 n 位</li></ul></li><li>扩容：每个小数组的扩容相对独立，小数组在超过扩容因子时会触发扩容，每次扩容翻倍</li><li>Segment[0] 原型：首次创建其它小数组时，会以此原型为依据，数组长度，扩容因子都会以原型为准</li></ul><p><strong>ConcurrentHashMap 1.8</strong></p><ul><li>数据结构：<code>Node 数组 + 链表或红黑树</code>，数组的每个头节点作为锁，如果多个线程访问的头节点不同，则不会冲突。首次生成头节点时如果发生竞争，利用 cas 而非 syncronized，进一步提升性能</li><li>并发度：Node 数组有多大，并发度就有多大，与 1.7 不同，Node 数组可以扩容</li><li>扩容条件：Node 数组满 3/4 时就会扩容</li><li>扩容单位：以链表为单位从后向前迁移链表，迁移完成的将旧数组头节点替换为 ForwardingNode</li><li>扩容时并发 get <ul><li>根据是否为 ForwardingNode 来决定是在新数组查找还是在旧数组查找，不会阻塞</li><li>如果链表长度超过 1，则需要对节点进行复制（创建新节点），怕的是节点迁移后 next 指针改变</li><li>如果链表最后几个元素扩容后索引不变，则节点无需复制</li></ul></li><li>扩容时并发 put <ul><li>如果 put 的线程与扩容线程操作的链表是同一个，put 线程会阻塞</li><li>如果 put 的线程操作的链表还未迁移完成，即头节点不是 ForwardingNode，则可以并发执行</li><li>如果 put 的线程操作的链表已经迁移完成，即头结点是 ForwardingNode，则可以协助扩容</li></ul></li><li>与 1.7 相比是懒惰初始化</li><li>capacity 代表预估的元素个数，capacity / factory 来计算出初始数组大小，需要贴近 $2^n$</li><li>loadFactor 只在计算初始数组大小时被使用，之后扩容固定为 3/4</li><li>超过树化阈值时的扩容问题，如果容量已经是 64，直接树化，否则在原来容量基础上做 3 轮扩容</li></ul><h2 id="_8-threadlocal" tabindex="-1"><a class="header-anchor" href="#_8-threadlocal"><span>8. ThreadLocal</span></a></h2><p><strong>要求</strong></p><ul><li>掌握 ThreadLocal 的作用与原理</li><li>掌握 ThreadLocal 的内存释放时机</li></ul><p><strong>作用</strong></p><ul><li>ThreadLocal 可以实现【资源对象】的线程隔离，让每个线程各用各的【资源对象】，避免争用引发的线程安全问题</li><li>ThreadLocal 同时实现了线程内的资源共享</li></ul><p><strong>原理</strong></p><p>每个线程内有一个 ThreadLocalMap 类型的成员变量，用来存储资源对象</p><ul><li>调用 set 方法，就是以 ThreadLocal 自己作为 key，资源对象作为 value，放入当前线程的 ThreadLocalMap 集合中</li><li>调用 get 方法，就是以 ThreadLocal 自己作为 key，到当前线程中查找关联的资源值</li><li>调用 remove 方法，就是以 ThreadLocal 自己作为 key，移除当前线程关联的资源值</li></ul><p>ThreadLocalMap 的一些特点</p><ul><li>key 的 hash 值统一分配</li><li>初始容量 16，扩容因子 2/3，扩容容量翻倍</li><li>key 索引冲突后用开放寻址法解决冲突</li></ul><p><strong>弱引用 key</strong></p><p>ThreadLocalMap 中的 key 被设计为弱引用，原因如下</p><ul><li>Thread 可能需要长时间运行（如线程池中的线程），如果 key 不再使用，需要在内存不足（GC）时释放其占用的内存</li></ul><p><strong>内存释放时机</strong></p><ul><li>被动 GC 释放 key <ul><li>仅是让 key 的内存释放，关联 value 的内存并不会释放</li></ul></li><li>懒惰被动释放 value <ul><li>get key 时，发现是 null key，则释放其 value 内存</li><li>set key 时，会使用启发式扫描，清除临近的 null key 的 value 内存，启发次数与元素个数，是否发现 null key 有关</li></ul></li><li>主动 remove 释放 key，value <ul><li>会同时释放 key，value 的内存，也会清除临近的 null key 的 value 内存</li><li>推荐使用它，因为一般使用 ThreadLocal 时都把它作为静态变量（即强引用），因此无法被动依靠 GC 回收</li></ul></li></ul>',80)],s={},g=(0,n(66262).A)(s,[["render",function(l,i){return(0,t.uX)(),(0,t.CE)("div",null,a)}]]),u=JSON.parse('{"path":"/study-notes/heima-baodian/concurrency/","title":"并发篇","lang":"zh-CN","frontmatter":{"description":"并发篇 1. 线程状态 要求 掌握 Java 线程六种状态 掌握 Java 线程状态转换 能理解五种状态与六种状态两种说法的区别 六种状态及转换 image-20210831090722658image-20210831090722658 分别是 新建 当一个线程对象被创建，但还未调用 start 方法时处于新建状态 此时未与操作系统底层线程关联 可运...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/study-notes/heima-baodian/concurrency/"}],["meta",{"property":"og:site_name","content":"撄宁的博客"}],["meta",{"property":"og:title","content":"并发篇"}],["meta",{"property":"og:description","content":"并发篇 1. 线程状态 要求 掌握 Java 线程六种状态 掌握 Java 线程状态转换 能理解五种状态与六种状态两种说法的区别 六种状态及转换 image-20210831090722658image-20210831090722658 分别是 新建 当一个线程对象被创建，但还未调用 start 方法时处于新建状态 此时未与操作系统底层线程关联 可运..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-07-30T08:24:30.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:modified_time","content":"2024-07-30T08:24:30.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"并发篇\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2024-07-30T08:24:30.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1. 线程状态","slug":"_1-线程状态","link":"#_1-线程状态","children":[]},{"level":2,"title":"2. 线程池","slug":"_2-线程池","link":"#_2-线程池","children":[]},{"level":2,"title":"3. wait vs sleep","slug":"_3-wait-vs-sleep","link":"#_3-wait-vs-sleep","children":[]},{"level":2,"title":"4. lock vs synchronized","slug":"_4-lock-vs-synchronized","link":"#_4-lock-vs-synchronized","children":[]},{"level":2,"title":"5. volatile","slug":"_5-volatile","link":"#_5-volatile","children":[]},{"level":2,"title":"6. 悲观锁 vs 乐观锁","slug":"_6-悲观锁-vs-乐观锁","link":"#_6-悲观锁-vs-乐观锁","children":[]},{"level":2,"title":"7. Hashtable vs ConcurrentHashMap","slug":"_7-hashtable-vs-concurrenthashmap","link":"#_7-hashtable-vs-concurrenthashmap","children":[]},{"level":2,"title":"8. ThreadLocal","slug":"_8-threadlocal","link":"#_8-threadlocal","children":[]}],"git":{"createdTime":1722327870000,"updatedTime":1722327870000,"contributors":[{"name":"jiangyunfei","email":"jiangyunfei@thunisoft.com","commits":1}]},"readingTime":{"minutes":12.4,"words":3721},"filePathRelative":"study-notes/heima-baodian/concurrency/README.md","localizedDate":"2024年7月30日","excerpt":"\\n<h2>1. 线程状态</h2>\\n<p><strong>要求</strong></p>\\n<ul>\\n<li>掌握 Java 线程六种状态</li>\\n<li>掌握 Java 线程状态转换</li>\\n<li>能理解五种状态与六种状态两种说法的区别</li>\\n</ul>\\n<p><strong>六种状态及转换</strong></p>\\n<figure><figcaption>image-20210831090722658</figcaption></figure>\\n<p>分别是</p>\\n<ul>\\n<li>新建\\n<ul>\\n<li>当一个线程对象被创建，但还未调用 start 方法时处于<strong>新建</strong>状态</li>\\n<li>此时未与操作系统底层线程关联</li>\\n</ul>\\n</li>\\n<li>可运行\\n<ul>\\n<li>调用了 start 方法，就会由<strong>新建</strong>进入<strong>可运行</strong></li>\\n<li>此时与底层线程关联，由操作系统调度执行</li>\\n</ul>\\n</li>\\n<li>终结\\n<ul>\\n<li>线程内代码已经执行完毕，由<strong>可运行</strong>进入<strong>终结</strong></li>\\n<li>此时会取消与底层线程关联</li>\\n</ul>\\n</li>\\n<li>阻塞\\n<ul>\\n<li>当获取锁失败后，由<strong>可运行</strong>进入 Monitor 的阻塞队列<strong>阻塞</strong>，此时不占用 cpu 时间</li>\\n<li>当持锁线程释放锁时，会按照一定规则唤醒阻塞队列中的<strong>阻塞</strong>线程，唤醒后的线程进入<strong>可运行</strong>状态</li>\\n</ul>\\n</li>\\n<li>等待\\n<ul>\\n<li>当获取锁成功后，但由于条件不满足，调用了 wait() 方法，此时从<strong>可运行</strong>状态释放锁进入 Monitor 等待集合<strong>等待</strong>，同样不占用 cpu 时间</li>\\n<li>当其它持锁线程调用 notify() 或 notifyAll() 方法，会按照一定规则唤醒等待集合中的<strong>等待</strong>线程，恢复为<strong>可运行</strong>状态</li>\\n</ul>\\n</li>\\n<li>有时限等待\\n<ul>\\n<li>当获取锁成功后，但由于条件不满足，调用了 wait(long) 方法，此时从<strong>可运行</strong>状态释放锁进入 Monitor 等待集合进行<strong>有时限等待</strong>，同样不占用 cpu 时间</li>\\n<li>当其它持锁线程调用 notify() 或 notifyAll() 方法，会按照一定规则唤醒等待集合中的<strong>有时限等待</strong>线程，恢复为<strong>可运行</strong>状态，并重新去竞争锁</li>\\n<li>如果等待超时，也会从<strong>有时限等待</strong>状态恢复为<strong>可运行</strong>状态，并重新去竞争锁</li>\\n<li>还有一种情况是调用 sleep(long) 方法也会从<strong>可运行</strong>状态进入<strong>有时限等待</strong>状态，但与 Monitor 无关，不需要主动唤醒，超时时间到自然恢复为<strong>可运行</strong>状态</li>\\n</ul>\\n</li>\\n</ul>","autoDesc":true}')}}]);