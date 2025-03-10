<template>
    <article
        h="240"
        aspect-ratio="0.707"
        m="x-auto"
        text="3.5"
    >
        <header>
            <h1
                m="b-4"
                b-b="1 solid slate-300"
                leading="20"
                text="10 center"
            >葛</h1>
            <ul grid="~ cols-2">
                <header-item title="GitHub" icon="fa6-brands:github">
                    KazariEX
                </header-item>
                <header-item title="学校" icon="fa6-solid:school">
                    杭州电子科技大学
                </header-item>
                <header-item title="邮箱" icon="fa6-solid:envelope">
                    <external-link to="mailto:zinkawaii@qq.com">zinkawaii@qq.com</external-link>
                </header-item>
                <header-item title="学历" icon="fa6-solid:user-graduate">
                    本科（2026 届，软件工程）
                </header-item>
                <header-item title="网站" icon="fa6-solid:globe">
                    <external-link to="https://bikari.top"/>
                </header-item>
                <header-item title="团队" icon="fa6-solid:user-group">
                    Vue.js
                </header-item>
            </ul>
        </header>
        <article-section title="专业技能">
            <ul p="l-6">
                <li><p>深入理解 Vue.js 及其核心生态（Nuxt、Vue Router、Pinia 等），熟悉 PrimeVue、Radix Vue 等主流 UI 组件库，掌握 PostCSS、Sass 等 CSS 预处理器，以及 UnoCSS 等原子 CSS 框架；</p></li>
                <li><p>熟悉 Rollup、Vite 等现代构建工具，熟练使用 Git 版本控制，拥有良好的代码管理习惯；</p></li>
                <li><p>熟悉 Node.js 等 JavaScript 运行时环境，能够进行简单的后端开发；</p></li>
                <li><p>热爱开源并持续为开源社区做贡献。</p></li>
            </ul>
        </article-section>
        <article-section title="项目经历">
            <project-experience
                name="vuejs/language-tools"
                role="核心贡献者"
                from="2020.10"
                link="https://github.com/vuejs/language-tools"
            >
                Vue.js 官方语言工具，为 VSCode、WebStorm 等代码编辑器提供语言服务器支持。
            </project-experience>
            <project-experience
                name="plain-shiki"
                role="创建者"
                from="2024.08"
                link="https://github.com/KazariEX/plain-shiki"
            >
                使用 Shiki + CSS Custom Highlight API，对纯文本容器中的代码文字进行高亮显示。<br />
                搭配 contenteditable="plaintext-only" 可实现最轻量的代码编辑器。<br />
                采用 Diff 算法确保正确的最小化更新，显著优化编辑大段代码时的性能。
            </project-experience>
            <project-experience
                name="maestrale"
                role="创建者"
                from="2023.11"
                link="https://github.com/KazariEX/maestrale"
            >
                响应式数据驱动的游戏数值模拟工具，主要用于模拟碧蓝航线中舰船面板属性的计算、编队配置等。可调整舰船的等级、突破等级、好感、强化值、改造进度等所有参与白值运算的数值，可携带装备与兵装，可自由调整舰队科技提供的属性值，并实时计算舰船的最终面板。<br />
                基于 Vue Reactivity API 封装数据结构，实现核心与视图的解耦。<br />
                设计序列化响应式数据的算法，确保用户数据的持久化存储。
            </project-experience>
        </article-section>
    </article>
</template>