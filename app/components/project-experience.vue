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
            flex="~ gap-2"
            w="full"
            p="x-2 y-0.5"
            b="rounded-md"
            bg="slate-200"
            leading="6"
            text="nowrap"
        >
            <div flex="~ wrap gap-col-2">
                <span font="bold">{{ name }}</span>
                <span text="slate">{{ role }}</span>
            </div>
            <span m="l-auto">{{ from }} - {{ to }}</span>
        </legend>
        <p flex="~ wrap gap-col-2" m="t-1.5" text="right">
            <ul>
                <tool-item v-for="tool in toolings" :name="tool"/>
            </ul>
            <external-link
                m="l-auto"
                leading="normal"
                :to="link"
            />
        </p>
        <slot></slot>
    </fieldset>
</template>