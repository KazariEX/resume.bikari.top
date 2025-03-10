<script lang="ts" setup>
    defineProps<{
        title: string;
        icon: string;
    }>();
</script>

<template>
    <li
        flex="~ items-center"
        h="6"
    >
        <iconify w="4" m="r-1.5" :name="icon"/>
        <span>{{ title }}：</span>
        <slot></slot>
    </li>
</template>