<script lang="ts" setup>
    defineProps<{
        title: string;
    }>();
</script>

<template>
    <section>
        <h2
            m="t-2 b-4"
            b-b="1 solid slate-300"
            leading="12"
            text="6"
        >{{ title }}</h2>
        <slot></slot>
    </section>
</template>