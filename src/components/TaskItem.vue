<template>
  <!-- Stateless component: receives `task` as a prop and emits events ('toggle', 'delete') -->
  <div class="task-item">
    <label>
      <input type="checkbox" :checked="task.completed" @change="$emit('toggle', task.id)" />
      <span :class="{ done: task.completed }">{{ task.title }}</span>
    </label>
    <div class="actions">
      <RouterLink :to="`/tasks/${task.id}`">Details</RouterLink>
      <button @click="$emit('delete', task.id)">Delete</button>
    </div>
  </div>
</template>

<script setup>
import { RouterLink } from 'vue-router'
// props defined with the compiler macro `defineProps`
const props = defineProps({
  task: { type: Object, required: true },
})
</script>

<style scoped>
.task-item {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0.6rem 0.4rem;
  border-bottom: 1px solid var(--color-border);
}
.task-item .done {
  text-decoration: line-through;
  opacity: 0.7;
}
.actions a {
  margin-right: 0.6rem;
}
button {
  background: transparent;
  border: 1px solid var(--color-border);
  padding: 0.2rem 0.5rem;
}
</style>
