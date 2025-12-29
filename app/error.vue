<script setup lang="ts">
import type { NuxtError } from '#app';

const { error } = defineProps<{ error: NuxtError }>();
</script>

<template>
  <UError :error :clear="{
    class: 'rounded-full',
  }" />
</template>