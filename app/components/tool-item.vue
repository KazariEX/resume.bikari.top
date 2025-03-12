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
    <span m="r-2" text="3 nowrap">
        <iconify
            un-size="3.5"
            m="r-0.5"
            vertical="text-bottom"
            :name="toolings[name]"
        />
        <span>{{ name }}</span>
    </span>
</template>