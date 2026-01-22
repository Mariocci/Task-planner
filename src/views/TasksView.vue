<script setup>
import { onMounted, ref } from 'vue'
import { useTasksStore } from '../stores/tasks'
import { RouterLink } from 'vue-router'

const store = useTasksStore()
const loading = ref(true)

onMounted(async () => {
	await store.fetchTasks()
	loading.value = false
})
</script>

<template>
	<main class="tasks-view">
		<!-- This view is bookmarkable at /tasks and displays task titles + descriptions -->
		<h1>Tasks</h1>
		<div v-if="loading">Loading tasks...</div>

		<ul v-else class="list">
			<li v-for="t in store.tasks" :key="t.id" class="task">
				<h3>
					{{ t.title }}
					<small class="status">{{ t.completed ? ' — Done' : ' — Open' }}</small>
				</h3>
				<!-- interpolation: task.description shown when present -->
				<p class="desc" v-if="t.description">{{ t.description }}</p>
				<div class="links">
					<RouterLink :to="`/tasks/${t.id}`">Details</RouterLink>
				</div>
			</li>
		</ul>
	</main>
</template>

<style scoped>
.tasks-view {
	max-width: 720px;
	margin: 1.2rem auto;
	padding: 1rem;
}
.list {
	list-style: none;
	padding: 0;
}
.task {
	padding: 0.8rem 0;
	border-bottom: 1px solid var(--color-border);
}
.desc {
	margin: 0.4rem 0 0.6rem 0;
	color: var(--color-text);
}
.status {
	font-weight: 400;
	font-size: 0.9rem;
	color: #666;
	margin-left: 0.4rem;
}
.links a {
	color: var(--color-text);
}
</style>
