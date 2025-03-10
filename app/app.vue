<template>
    <article
        max-w="176"
        m="x-auto y-8"
        p="x-4"
        text="3.5"
    >
        <header>
            <h1
                m="b-4"
                p="b-4"
                b-b="1 solid slate-300"
                leading="12"
                text="10 center"
            >葛</h1>
            <ul columns="2 lt-sm:1">
                <header-item title="GitHub" icon="fa6-brands:github">
                    KazariEX
                </header-item>
                <header-item title="邮箱" icon="fa6-solid:envelope">
                    <external-link to="mailto:zinkawaii@qq.com">zinkawaii@qq.com</external-link>
                </header-item>
                <header-item title="网站" icon="fa6-solid:globe">
                    <external-link to="https://bikari.top"/>
                </header-item>
                <header-item title="学校" icon="fa6-solid:school">
                    杭州电子科技大学
                </header-item>
                <header-item title="学历" icon="fa6-solid:user-graduate">
                    本科（2026 届，软件工程）
                </header-item>
                <header-item title="团队" icon="fa6-solid:user-group">
                    Vue.js
                </header-item>
            </ul>
        </header>
        <article-section title="专业技能">
            <ul p="l-6">
                <li>深入理解 Vue.js 及其核心生态（Nuxt、Vue Router、Pinia 等），熟悉 PrimeVue、Radix Vue 等主流 UI 组件库，掌握 PostCSS、Sass 等 CSS 预处理器，以及 UnoCSS 等原子 CSS 框架；</li>
                <li>熟悉 Rollup、Vite 等现代构建工具，熟练使用 Git 版本控制，拥有良好的代码管理习惯；</li>
                <li>熟悉 Node.js 等 JavaScript 运行时环境，能够进行简单的后端开发；</li>
                <li>热爱开源并持续为开源社区做贡献。</li>
            </ul>
        </article-section>
        <article-section title="项目经历">
            <project-experience
                name="vuejs/language-tools"
                role="核心贡献者"
                from="2024.08"
                link="https://github.com/vuejs/language-tools"
            >
                <p>Vue.js 官方语言工具，为 VSCode、WebStorm 等代码编辑器提供语言服务器支持。</p>
                <p>持续为 Vue.js 的核心功能贡献类型相关的特性与修复，如：</p>
                <ol m="l-4">
                    <li>使用解构属性（Destructured Props）时的嵌入提示；</li>
                    <li>指令及其参数与修饰符的智能提示和类型检查；</li>
                    <li><code>$attrs</code> <code>$el</code> 等模板内特殊变量、<code>useCssModule</code> 等可组合项的自动类型推导；</li>
                    <li>对全局组件使用前往定义（Goto Definition）时跳过类型声明文件，直接导航到组件文件等。</li>
                </ol>
                <p>以及大量的错误修复与代码重构，致力于为用户提供更好的开发体验。</p>
            </project-experience>
            <project-experience
                name="plain-shiki"
                role="创建者"
                from="2024.08"
                link="https://github.com/KazariEX/plain-shiki"
            >
                <p>使用 Shiki + CSS Custom Highlight API，对纯文本容器中的代码文字进行高亮显示。</p>
                <p>搭配 <code>contenteditable="plaintext-only"</code> 可实现最轻量的代码编辑器。</p>
                <p>采用 Diff 算法确保正确的最小化更新，显著优化编辑大段代码时的性能。</p>
            </project-experience>
            <project-experience
                name="maestrale"
                role="创建者"
                from="2023.11"
                link="https://github.com/KazariEX/maestrale"
            >
                <p>响应式数据驱动的游戏数值模拟工具，主要用于模拟碧蓝航线中舰船面板属性的计算、编队配置等。可调整舰船的等级、突破等级、好感、强化值、改造进度等所有参与白值运算的数值，可携带装备与兵装，可自由调整舰队科技提供的属性值，并实时计算舰船的最终面板。</p>
                <p>基于 Vue Reactivity API 封装数据结构，实现核心与视图的解耦。</p>
                <p>设计互相嵌套与引用、包含响应式属性的数据的序列化算法，确保用户数据的持久化存储。</p>
            </project-experience>
        </article-section>
    </article>
</template>