<script lang="ts" setup>
    import type { Tooling } from "./tool-item.vue";

    const { to = "至今" } = defineProps<{
        name: string;
        role?: string;
        from: string;
        to?: string;
        toolings?: Tooling[];
        link: string;
    }>();
</script>

<template>
    <fieldset m="t-0.5 [&+&]:t-3.5">
        <legend
            flex="~ wrap gap-col-2"
            w="full"
            p="x-2 y-0.5"
            b="rounded-md"
            bg="slate-400/20"
            leading="6"
            text="nowrap"
        >
            <span font="bold">{{ name }}</span>
            <span text="slate">{{ role }}</span>
            <span m="l-auto">{{ from }} - {{ to }}</span>
        </legend>
        <p m="t-1.5 b-0.5" leading="normal">
            <external-link
                m="l-auto"
                float="right"
                :to="link"
            />
            <tool-item v-for="tool in toolings" :name="tool"/>
        </p>
        <slot></slot>
    </fieldset>
</template>