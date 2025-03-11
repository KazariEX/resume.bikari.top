<script lang="ts" setup>
    defineProps<{
        title: string;
    }>();
</script>

<template>
    <section>
        <h2
            m="t-2"
            leading="12"
            text="6"
        >{{ title }}</h2>
        <slot></slot>
    </section>
</template>