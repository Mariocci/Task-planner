<template>
  <div class="not-found">
    <h2>404 — Page not found</h2>
    <p>The page you requested does not exist.</p>
    <RouterLink to="/">Go home</RouterLink>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
</script>

<style scoped>
.not-found {
  max-width: 640px;
  margin: 2rem auto;
  padding: 1rem;
  text-align: center;
}
</style>
