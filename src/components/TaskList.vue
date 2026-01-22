<template>
  <section class="tasks">
    <h1>Task Planner</h1>

    <!-- two-way binding implemented inside TaskForm.vue via `v-model` -->
    <TaskForm @add="handleAdd" />
    <!-- interpolation / one-way binding: using {{ }} to display derived values -->
    <div class="summary">
      <span>Total: {{ tasks.length }}</span>
      <span>Done: {{ completedCount }}</span>
      <span>Remaining: {{ remainingCount }}</span>
    </div>

    <div v-if="loading">Loading tasks...</div>

    <div v-else>
      <TaskItem
        v-for="task in tasks"
        :key="task.id"
        :task="task"
        @toggle="toggle"
        @delete="remove"
      />
    </div>
  </section>
</template>

<script setup>
import { onMounted, computed, ref } from 'vue'
import { useTasksStore } from '../stores/tasks'
import TaskItem from './TaskItem.vue'
import TaskForm from './TaskForm.vue'

const store = useTasksStore()
const loading = ref(true)

// lifecycle hook: fetch tasks when component mounts
onMounted(async () => {
  await store.fetchTasks()
  loading.value = false
})

// computed properties (derived state)
const tasks = computed(() => store.tasks)
const completedCount = computed(() => tasks.value.filter((t) => t.completed).length)
const remainingCount = computed(() => tasks.value.filter((t) => !t.completed).length)

// methods: wrapper functions that call store actions
async function handleAdd(payload) {
  await store.addTask(payload.title, payload.description)
}

async function toggle(id) {
  await store.toggleComplete(id)
}

async function remove(id) {
  await store.deleteTask(id)
}
</script>

<style scoped>
.tasks {
  max-width: 640px;
  margin: 1rem auto;
  padding: 1rem;
}
.summary {
  display: flex;
  gap: 1rem;
  font-size: 0.9rem;
  margin-bottom: 0.6rem;
}
/* scoped style present above: this <style scoped> block limits styles to this component */
</style>
