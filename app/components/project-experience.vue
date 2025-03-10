<script lang="ts" setup>
const { to = "至今" } = defineProps<{
    name: string;
    role?: string;
    link: string;
    from: string;
    to?: string;
}>();
</script>

<template>
    <div m="t-4">
        <p flex="~" gap="2">
            <span font="bold">{{ name }}</span>
            <span text="slate">{{ role }}</span>
            <span m="l-auto">{{ from }} - {{ to }}</span>
        </p>
        <external-link leading="normal" :to="link">{{ link }}</external-link>
        <p m="t-1"><slot></slot></p>
    </div>
</template>