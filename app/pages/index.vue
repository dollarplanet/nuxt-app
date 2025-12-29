<script setup lang="ts">
const { data: home } = await useAsyncData(() => queryCollection('content').path('/').first())

useSeoMeta({
    title: home.value?.title,
    description: home.value?.description
})
</script>

<template>
    <p class="text-3xl bg-red-600">Anjie gacor bet</p>
    <ContentRenderer v-if="home" :value="home" />
    <div v-else>Home not found</div>
</template>
