<script setup lang="ts">
import router from '@/router'

const props = defineProps<{ name: string }>()
</script>

<route>
  {
    meta: {
      layout: 'headless'
    }
  }
</route>

<template>
  <div>
    <Counter :initial="1" />
    <p>Hi, {{ props.name }}</p>
    <p text-sm op50>
      <em>Dynamic route!</em>
    </p>

    <div>
      <button class="btn m-3 text-sm mt-8" @click="router.back()">
        Back
      </button>
    </div>
  </div>
</template>
