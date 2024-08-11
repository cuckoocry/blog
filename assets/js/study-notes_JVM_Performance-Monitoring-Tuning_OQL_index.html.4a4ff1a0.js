"use strict";(self.webpackChunkblogs2=self.webpackChunkblogs2||[]).push([[3739],{66262:(i,s)=>{s.A=(i,s)=>{const a=i.__vccOpts||i;for(const[i,e]of s)a[i]=e;return a}},57811:(i,s,a)=>{a.r(s),a.d(s,{comp:()=>l,data:()=>n});var e=a(20641);const t=[(0,e.Fv)('<p>MAT 支持一种类似于 SQL 的查询语言 OQL（Object Query Language）。OQL 使用类 SQL 语法，可以在堆中进行对象的查找和筛选。</p><h2 id="_1-select-子句" tabindex="-1"><a class="header-anchor" href="#_1-select-子句"><span>1. SELECT 子句</span></a></h2><p>在 MAT 中，Select 子句的格式与 SQL 基本一致，用于指定要显示的列。Select 子句中可以使用“＊”，查看结果对象的引用实例（相当于 outgoing references）。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">util</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.Vector v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用“OBJECTS”关键字，可以将返回结果集中的项以对象的形式显示。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> objects </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">elementData</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">util</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.Vector v</span></span>\n<span class="line"></span>\n<span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> OBJECTS </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">value</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.String s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><p>在 Select 子句中，使用“AS RETAINED SET”关键字可以得到所得对象的保留集。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> AS</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> RETAINED </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SET</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> com</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">atguigu</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">mat</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">Student</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>“DISTINCT”关键字用于在结果集中去除重复对象。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT DISTINCT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> OBJECTS classof(s) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.String s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_2-from-子句" tabindex="-1"><a class="header-anchor" href="#_2-from-子句"><span>2. FROM 子句</span></a></h2><p>From 子句用于指定查询范围，它可以指定类名、正则表达式或者对象地址。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.String s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用正则表达式，限定搜索范围，输出所有 com.atguigu 包下所有类的实例</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;com\\.atguigu\\..*&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>使用类的地址进行搜索。使用类的地址的好处是可以区分被不同 ClassLoader 加载的同一种类型。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> 0x37a0b4d</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_3-where-子句" tabindex="-1"><a class="header-anchor" href="#_3-where-子句"><span>3. WHERE 子句</span></a></h2><p>Where 子句用于指定 OQL 的查询条件。OQL 查询将只返回满足 Where 子句指定条件的对象。Where 子句的格式与传统 SQL 极为相似。</p><p>返回长度大于 10 的 char 数组。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> *</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> Ichar</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">[]</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> s </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> s.</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">@length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">10</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回包含“java”子字符串的所有字符串，使用“LIKE”操作符，“LIKE”操作符的操作参数为正则表达式。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.String s </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> toString(s) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">LIKE</span><span style="--shiki-light:#50A14F;--shiki-dark:#98C379;"> &quot;.*java.*&quot;</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回所有 value 域不为 null 的字符串，使用“＝”操作符。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.String s </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">where</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">!=</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">null</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>返回数组长度大于 15，并且深堆大于 1000 字节的所有 Vector 对象。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">util</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.Vector v </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">WHERE</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">elementData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">@length</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">15</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> AND</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> v.</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">@retainedHeapSize</span><span style="--shiki-light:#383A42;--shiki-dark:#56B6C2;">&gt;</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">1000</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><h2 id="_4-内置对象与方法" tabindex="-1"><a class="header-anchor" href="#_4-内置对象与方法"><span>4. 内置对象与方法</span></a></h2><p>OQL 中可以访问堆内对象的属性，也可以访问堆内代理对象的属性。访问堆内对象的属性时，格式如下，其中 alias 为对象名称：</p><p>[ &lt;alias&gt;. ] &lt;field&gt; . &lt;field&gt;. &lt;field&gt;</p><p>访问 java.io.File 对象的 path 属性，并进一步访问 path 的 value 属性：</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> toString(</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">f</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">path</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">value</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">) </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">io</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">File</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> f</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>显示 String 对象的内容、objectid 和 objectAddress。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> s</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">toString</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">(),s.</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">@objectId</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">, s.</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">@objectAddress</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">lang</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.String s</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>显示 java.util.Vector 内部数组的长度。</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">SELECT</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> v</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">elementData</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#383A42;--shiki-dark:#E06C75;">@length</span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;"> FROM</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;"> java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">util</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.Vector v</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div><p>显示所有的 java.util.Vector 对象及其子类型</p><div class="language-sql line-numbers-mode" data-highlighter="shiki" data-ext="sql" data-title="sql" style="--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34;"><pre class="shiki shiki-themes one-light one-dark-pro vp-code"><code><span class="line"><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">select</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> * </span><span style="--shiki-light:#A626A4;--shiki-dark:#C678DD;">from</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;"> INSTANCEOF </span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">java</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.</span><span style="--shiki-light:#986801;--shiki-dark:#D19A66;">util</span><span style="--shiki-light:#383A42;--shiki-dark:#ABB2BF;">.Vector</span></span></code></pre><div class="line-numbers" aria-hidden="true" style="counter-reset:line-number 0;"><div class="line-number"></div></div></div>',38)],h={},l=(0,a(66262).A)(h,[["render",function(i,s){return(0,e.uX)(),(0,e.CE)("div",null,t)}]]),n=JSON.parse('{"path":"/study-notes/JVM/Performance-Monitoring-Tuning/OQL/","title":"使用 OQL 语言查询对象信息","lang":"zh-CN","frontmatter":{"title":"使用 OQL 语言查询对象信息","date":"2023-03-18T00:00:00.000Z","description":"MAT 支持一种类似于 SQL 的查询语言 OQL（Object Query Language）。OQL 使用类 SQL 语法，可以在堆中进行对象的查找和筛选。 1. SELECT 子句 在 MAT 中，Select 子句的格式与 SQL 基本一致，用于指定要显示的列。Select 子句中可以使用“＊”，查看结果对象的引用实例（相当于 outgoing...","head":[["meta",{"property":"og:url","content":"https://mister-hope.github.io/study-notes/JVM/Performance-Monitoring-Tuning/OQL/"}],["meta",{"property":"og:site_name","content":"撄宁的博客"}],["meta",{"property":"og:title","content":"使用 OQL 语言查询对象信息"}],["meta",{"property":"og:description","content":"MAT 支持一种类似于 SQL 的查询语言 OQL（Object Query Language）。OQL 使用类 SQL 语法，可以在堆中进行对象的查找和筛选。 1. SELECT 子句 在 MAT 中，Select 子句的格式与 SQL 基本一致，用于指定要显示的列。Select 子句中可以使用“＊”，查看结果对象的引用实例（相当于 outgoing..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"zh-CN"}],["meta",{"property":"og:updated_time","content":"2024-08-11T14:20:56.000Z"}],["meta",{"property":"article:author","content":"樱宁"}],["meta",{"property":"article:published_time","content":"2023-03-18T00:00:00.000Z"}],["meta",{"property":"article:modified_time","content":"2024-08-11T14:20:56.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"使用 OQL 语言查询对象信息\\",\\"image\\":[\\"\\"],\\"datePublished\\":\\"2023-03-18T00:00:00.000Z\\",\\"dateModified\\":\\"2024-08-11T14:20:56.000Z\\",\\"author\\":[{\\"@type\\":\\"Person\\",\\"name\\":\\"樱宁\\",\\"url\\":\\"https://mister-hope.com\\"}]}"]]},"headers":[{"level":2,"title":"1. SELECT 子句","slug":"_1-select-子句","link":"#_1-select-子句","children":[]},{"level":2,"title":"2. FROM 子句","slug":"_2-from-子句","link":"#_2-from-子句","children":[]},{"level":2,"title":"3. WHERE 子句","slug":"_3-where-子句","link":"#_3-where-子句","children":[]},{"level":2,"title":"4. 内置对象与方法","slug":"_4-内置对象与方法","link":"#_4-内置对象与方法","children":[]}],"git":{"createdTime":1723381883000,"updatedTime":1723386056000,"contributors":[{"name":"jiang","email":"948742327@qq.com","commits":2}]},"readingTime":{"minutes":2.16,"words":648},"filePathRelative":"study-notes/JVM/Performance-Monitoring-Tuning/OQL/README.md","localizedDate":"2023年3月18日","excerpt":"<p>MAT 支持一种类似于 SQL 的查询语言 OQL（Object Query Language）。OQL 使用类 SQL 语法，可以在堆中进行对象的查找和筛选。</p>\\n<h2>1. SELECT 子句</h2>\\n<p>在 MAT 中，Select 子句的格式与 SQL 基本一致，用于指定要显示的列。Select 子句中可以使用“＊”，查看结果对象的引用实例（相当于 outgoing references）。</p>\\n<div class=\\"language-sql line-numbers-mode\\" data-highlighter=\\"shiki\\" data-ext=\\"sql\\" data-title=\\"sql\\" style=\\"--shiki-light:#383A42;--shiki-dark:#abb2bf;--shiki-light-bg:#FAFAFA;--shiki-dark-bg:#282c34\\"><pre class=\\"shiki shiki-themes one-light one-dark-pro vp-code\\"><code><span class=\\"line\\"><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">SELECT</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\"> * </span><span style=\\"--shiki-light:#A626A4;--shiki-dark:#C678DD\\">FROM</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\"> java</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.</span><span style=\\"--shiki-light:#986801;--shiki-dark:#D19A66\\">util</span><span style=\\"--shiki-light:#383A42;--shiki-dark:#ABB2BF\\">.Vector v</span></span></code></pre>\\n<div class=\\"line-numbers\\" aria-hidden=\\"true\\" style=\\"counter-reset:line-number 0\\"><div class=\\"line-number\\"></div></div></div>","autoDesc":true}')}}]);