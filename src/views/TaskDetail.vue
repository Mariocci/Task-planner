<template>
  <main class="task-detail">
    <!-- Dynamic routing: route param `id` is used to load the specific task -->
    <div v-if="!task">Loading task...</div>
    <div v-else>
      <h2>{{ task.title }}</h2>
      <p>Status: <strong>{{ task.completed ? 'Done' : 'Open' }}</strong></p>
      <p>{{ task.description }}</p>
      <!-- method: toggle called on click to update task via store -->
      <button @click="toggle">Toggle complete</button>
      <RouterLink to="/">Back</RouterLink>
    </div>
  </main>
</template>

<script setup>
import { onMounted, ref } from 'vue'
import { useRoute, RouterLink } from 'vue-router'
import { useTasksStore } from '../stores/tasks'

const route = useRoute()
const store = useTasksStore()
const task = ref(null)

// lifecycle hook: load task data when view mounts
async function load() {
  if (!store.loaded) await store.fetchTasks()
  task.value = store.getTaskById(route.params.id)
}

onMounted(load)

// method: toggle completion via the store
async function toggle() {
  if (!task.value) return
  await store.toggleComplete(task.value.id)
  task.value = store.getTaskById(task.value.id)
}
</script>

<style scoped>
.task-detail {
  max-width: 640px;
  margin: 1rem auto;
  padding: 1rem;
}
</style>
