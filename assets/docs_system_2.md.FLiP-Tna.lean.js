import{_ as a,c as i,an as e,o as n}from"./chunks/framework.dtLWRnJz.js";const l="/assets/1.CEvy46wd.jpg",F=JSON.parse('{"title":"MacOS","description":"","frontmatter":{},"headers":[],"relativePath":"docs/system/2.md","filePath":"docs/system/2.md","lastUpdated":1732076854000}'),p={name:"docs/system/2.md"};function t(h,s,r,k,d,c){return n(),i("div",null,s[0]||(s[0]=[e(`<h1 id="macos" tabindex="-1">MacOS <a class="header-anchor" href="#macos" aria-label="Permalink to &quot;MacOS&quot;">​</a></h1><h2 id="目录" tabindex="-1">目录 <a class="header-anchor" href="#目录" aria-label="Permalink to &quot;目录&quot;">​</a></h2><p>～ 目录，代表用户的主目录，也称为 Home 目录，可以使用 <code>cd ～</code> 进入</p><h2 id="命令" tabindex="-1">命令 <a class="header-anchor" href="#命令" aria-label="Permalink to &quot;命令&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 获取有线网络接口的 IP 地址</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ipconfig</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> getifaddr</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> en1</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="解决使用梯子之后无法上网的问题" tabindex="-1">解决使用梯子之后无法上网的问题 <a class="header-anchor" href="#解决使用梯子之后无法上网的问题" aria-label="Permalink to &quot;解决使用梯子之后无法上网的问题&quot;">​</a></h2><p>快捷键 <code>command + shift + G</code> 全局打开 <code>/Library/Preferences/SystemConfiguration/</code> 目录</p><p>删除目录下除 <code>com.apple.Boot.plist</code> 其它所有文件</p><p>删除完重启点击即可重新连接网络</p><p>最好的结局方案是：在电脑关机或者重启之前先将梯子推出，再关机或重启。</p><blockquote><p>待考虑：可不可以写一个脚本，在关机之前先将梯子推出？</p></blockquote><h2 id="安装-mysql" tabindex="-1">安装 Mysql <a class="header-anchor" href="#安装-mysql" aria-label="Permalink to &quot;安装 Mysql&quot;">​</a></h2><p>打开 <a href="https://downloads.mysql.com/archives/community/" target="_blank" rel="noreferrer">Mysql 官网下载地址</a>，根据自己的系统选择下载版本</p><ul><li>M 系列的芯片选择 ARM 版本</li><li>Intel 芯片选择 x86 版本</li></ul><p><img src="`+l+`" alt=""></p><p>配置 mysql：</p><p>修改环境变量</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">vim</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .bash_profile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>加入</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">export</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> PATH</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">\${PATH}:/usr/local/mysql/bin</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>保存后执行下面命令使配置生效：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">source</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> .bash_profile</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>进入 mysql</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mysql</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -u</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> root</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -p</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="安装-navicat" tabindex="-1">安装 Navicat <a class="header-anchor" href="#安装-navicat" aria-label="Permalink to &quot;安装 Navicat&quot;">​</a></h2><p>通过 <a href="https://appstorrent.ru/802-navicat-premium.html" target="_blank" rel="noreferrer">Navicat Premium</a> 下载，直接是破解版</p><h2 id="安装-homebrew" tabindex="-1">安装 Homebrew <a class="header-anchor" href="#安装-homebrew" aria-label="Permalink to &quot;安装 Homebrew&quot;">​</a></h2><p>Homebrew 是 mac 的包管理器，仅需执行相应的命令,就能下载安装需要的软件包，可以省掉自己去下载、解压、拖拽(安装)等繁琐的步骤</p><p><a href="https://brew.sh/" target="_blank" rel="noreferrer">官网安装</a></p><p>或者通过下面安装命令：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/bin/bash</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -c</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">curl</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;"> -fsSL</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><blockquote><p>如果命令安装失败需要进行终端代理</p></blockquote><p>安装完成之后可能会提示配置的命令，根据提示配置即可。</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">==</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt; </span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Next</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> steps:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> these</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> two</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> commands</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> in</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> terminal</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> add</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Homebrew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> your</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> PATH:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    (</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">; </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">echo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &#39;eval &quot;$(/opt/homebrew/bin/brew shellenv)&quot;&#39;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;&gt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> /Users/Tyh2001/.zprofile</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">    eval</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;$(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/opt/homebrew/bin/brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> shellenv)&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Run</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> help</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> to</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> get</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> started</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Further</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> documentation:</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    https://docs.brew.sh</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><p>基本命令：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查询：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> search</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 软件名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 软件名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 卸载：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> uninstall</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> 软件名</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 更新 Homebrew：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> update</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 查看 Homebrew 配置信息：</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> config</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><h2 id="安装-redis" tabindex="-1">安装 Redis <a class="header-anchor" href="#安装-redis" aria-label="Permalink to &quot;安装 Redis&quot;">​</a></h2><p>安装了 HomeBrew 之后，安装就非常简单了，使用下面命令即可安装：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">brew</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> install</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> redis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>安装完成之后运行下面命令启动：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">redis-server</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="显示当前目录下的隐藏文件夹" tabindex="-1">显示当前目录下的隐藏文件夹 <a class="header-anchor" href="#显示当前目录下的隐藏文件夹" aria-label="Permalink to &quot;显示当前目录下的隐藏文件夹&quot;">​</a></h2><p>Command + Shift + .</p>`,43)]))}const b=a(p,[["render",t]]);export{F as __pageData,b as default};
