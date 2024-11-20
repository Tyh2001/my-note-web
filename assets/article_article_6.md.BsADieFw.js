import{_ as a,c as i,an as e,o as n}from"./chunks/framework.dtLWRnJz.js";const o=JSON.parse('{"title":"Node.js 版本切换","description":"","frontmatter":{},"headers":[],"relativePath":"article/article/6.md","filePath":"article/article/6.md","lastUpdated":1732076854000}'),l={name:"article/article/6.md"};function t(p,s,h,r,d,k){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="node-js-版本切换" tabindex="-1">Node.js 版本切换 <a class="header-anchor" href="#node-js-版本切换" aria-label="Permalink to &quot;Node.js 版本切换&quot;">​</a></h1><h2 id="前言" tabindex="-1">前言 <a class="header-anchor" href="#前言" aria-label="Permalink to &quot;前言&quot;">​</a></h2><p>很多时候我们在老项目和新项目一起维护的时候，很多时候涉及到 node.js 版本的切换，那么下面推荐一个可以快速切换 node.js 版本的工具，叫<a href="https://github.com/nvm-sh/nvm" target="_blank" rel="noreferrer">nvm</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><p>在 <a href="https://github.com/coreybutler/nvm-windows/releases" target="_blank" rel="noreferrer">nvm 仓库</a> 可以进行下载，下载选择 <code>nvm-setup.zip</code></p><h2 id="基本命令" tabindex="-1">基本命令 <a class="header-anchor" href="#基本命令" aria-label="Permalink to &quot;基本命令&quot;">​</a></h2><ul><li>安装指定 node.js 的版本</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 版本号</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>查看本地已经安装的版本</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>查看当前使用的版本</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> current</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><ul><li>切换版本号</li></ul><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 版本号</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>如果切换版本号之后出现下面报错</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C:\\Users\\CC-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> list</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    16.14.2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    15.14.0</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">  *</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 14.18.1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> (Currently </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">using</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 64-bit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> executable</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C:\\Users\\CC-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">nvm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> use</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> 15.14.0</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">exit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> status</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 1:</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ��û���㹻��Ȩ��ִ�д˲�����</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">C:\\Users\\CC-1</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><p>那么使用<code>管理员身份</code>打开命令行之后重新执行即可</p><h2 id="写到最后" tabindex="-1">写到最后 <a class="header-anchor" href="#写到最后" aria-label="Permalink to &quot;写到最后&quot;">​</a></h2><p>欢迎大家点赞+关注</p>`,19)]))}const u=a(l,[["render",t]]);export{o as __pageData,u as default};
