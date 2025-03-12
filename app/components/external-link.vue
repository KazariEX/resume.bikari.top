<!-- @fallthroughAttributes true -->

<script lang="ts" setup>
    defineOptions({
        inheritAttrs: false
    });
</script>

<template>
    <nuxt-link
        decoration="none"
        un-text="slate-600 @dark:slate hover:blue"
        v-bind="$attrs"
        target="_blank"
    ><slot>{{ $attrs.to }}</slot></nuxt-link>
</template>