<!-- eslint-disable style/quote-props -->

<script lang="ts">
    // @keep-sorted
    const toolings = {
        "CSS": "vscode-icons:file-type-css",
        "Nuxt": "vscode-icons:file-type-nuxt",
        "TypeScript": "vscode-icons:file-type-typescript-official",
        "Volar.js": "logos:volar",
        "Vue.js": "logos:vue"
    };

    export type Tooling = keyof typeof toolings;
</script>

<script lang="ts" setup>
    defineProps<{
        name: Tooling;
    }>();
</script>

<template>
    <li
        flex="inline items-center gap-0.5"
        m="[&+&]:l-2"
        text="3"
    >
        <iconify un-size="3.5" :name="toolings[name]"/>
        <span>{{ name }}</span>
    </li>
</template>