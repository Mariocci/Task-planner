<template>
  <!-- TaskForm: two-way binding via `v-model` for `title` and `description` -->
  <form class="task-form" @submit.prevent="submit">
    <!-- two-way binding -->
    <input v-model="title" placeholder="New task title" required />
    <input v-model="description" placeholder="Description (optional)" />
    <button type="submit">Add</button>
  </form>
</template>

<script setup>
import { ref } from 'vue'
const title = ref('')
const description = ref('')
const emit = defineEmits(['add'])

// method: handles form submit and emits an `add` event
function submit() {
  if (!title.value.trim()) return
  emit('add', { title: title.value, description: description.value })
  title.value = ''
  description.value = ''
}
</script>

<style scoped>
.task-form {
  display: flex;
  gap: 0.5rem;
  margin-bottom: 1rem;
}
.task-form input {
  padding: 0.4rem 0.6rem;
  border: 1px solid var(--color-border);
  flex: 1;
}
.task-form button {
  padding: 0.4rem 0.8rem;
}
</style>
