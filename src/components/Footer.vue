<script lang="ts" setup>
import { isDark, toggleDark } from '@/composables/dark'
</script>

<template>
  <nav text-xl w-14 mx-auto mt-6 flex justify-between>
    <button icon-btn @click="toggleDark()">
      <span>{{ isDark ? 'moon' : 'sun' }}</span>
    </button>

    <a
      icon-btn
      rel="noreferrer"
      href="https://github.com/luvletterldl/the-last-naruto"
      target="_blank"
      title="GitHub"
    >
      <span>github</span>
    </a>

    <span>Footer</span>
  </nav>
</template>
