# Task Planner — Submission Checklist
This is a project for Advanced web development course
## Lista svojstava

1. **interpolation / one-way binding** — Da
   - Primjer: `src/components/TaskList.vue` :9 — `<span>Total: {{ tasks.length }}</span>`

2. **two-way binding** — Da
   - Primjer: `src/components/TaskForm.vue` :5 — `<input v-model="title" placeholder="New task title" required />`

3. **methods** — Da
   - Primjer: `src/components/TaskList.vue` :49 — `async function handleAdd(payload) { ... }`

4. **computed properties** — Da
   - Primjer: `src/components/TaskList.vue` :44 — `const tasks = computed(() => store.tasks)`

5. **barem jedan scoped style** — Da
   - Primjer: `src/components/TaskList.vue` :62 — `<style scoped>`

6. **lifecycle hook (najmanje jedan)** — Da
   - Primjer: `src/components/TaskList.vue` :38 — `onMounted(async () => { ... })`

7. **routing (više stranica)** — Da
   - Primjer: `src/router/index.js` :19 — `path: '/tasks',`

8. **bookmarkable routes** — Da
   - Primjer: `src/router/index.js` :19 — `/tasks`
   - Primjer: `src/router/index.js` :25 — `/tasks/:id`

9. **dynamic routing + 404 (catch-all)** — Da
   - Primjer: `src/router/index.js` :31 — `path: '/:pathMatch(.*)*',` (catch-all)

10. **(barem) dvije komponente** — Da
    - Primjer: `src/components/TaskList.vue` :1 i `src/components/TaskItem.vue` :1

11. **stateless component (props)** — Da
    - Primjer: `src/components/TaskItem.vue` :18 — `const props = defineProps({ task: ... })`

12. **stateful component** — Da
    - Primjer: `src/components/TaskList.vue` :35 — `const loading = ref(true)`

13. **emit event** — Da
    - Primjer: `src/components/TaskItem.vue` :5 — `@change="$emit('toggle', task.id)"`
    - Primjer (emit definicija): `src/components/TaskForm.vue` :15 — `const emit = defineEmits(['add'])`

14. **store (Pinia)** — Da
    - Primjer: `src/stores/tasks.js` :9 — `export const useTasksStore = defineStore('tasks', { ... })`

15. **asynchronous data fetch (mock)** — Da
    - Primjer: `src/stores/tasks.js` :16 — `await new Promise((res) => setTimeout(res, 500))` inside `fetchTasks()`

16. **lazy (async) loading of route/component** — Da
    - Primjer: `src/router/index.js` :22 — `component: () => import('../views/TasksView.vue')`

---

## Kako pokrenuti lokalno

1. `npm install`
2. `npm run dev`
3. Otvoriti: `http://localhost:5173/` ili `http://localhost:5173/tasks`
