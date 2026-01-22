1) interpolation/one-way binding - Da
   Primjer: src/components/TaskList.vue :9  — `<span>Total: {{ tasks.length }}</span>`

2) two-way binding - Da
   Primjer: src/components/TaskForm.vue :5  — `<input v-model="title" placeholder="New task title" required />`

3) methods - Da
   Primjer: src/components/TaskList.vue :49  — `async function handleAdd(payload) { ... }`

4) computed properties - Da
   Primjer: src/components/TaskList.vue :44  — `const tasks = computed(() => store.tasks)`

5) barem jedan scoped style - Da
   Primjer: src/components/TaskList.vue :62  — `<style scoped>`

6) koristiti barem jedan lifecycle hook - Da
   Primjer: src/components/TaskList.vue :38  — `onMounted(async () => { ... })`

7) routing (više stranica) - Da
   Primjer: src/router/index.js :19  — `path: '/tasks',`

8) aplikacija mora biti bookmarkable - Da
   Primjer: src/router/index.js :19  — `/tasks` (bookmarkable lista)
   Primjer: src/router/index.js :25  — `/tasks/:id` (bookmarkable detalji)

9) dinamičko usmjeravanje s 404 stranicom ("catch all") - Da
   Primjer: src/router/index.js :31  — `path: '/:pathMatch(.*)*',` (catch-all 404)

10) (barem) dvije komponente - Da
    Primjer: src/components/TaskList.vue :1  i src/components/TaskItem.vue :1

11) komponenta bez stanja, koristiti properties - Da
    Primjer: src/components/TaskItem.vue :18  — `const props = defineProps({ task: ... })`

12) komponenta sa stanjem - Da
    Primjer: src/components/TaskList.vue :35  — `const loading = ref(true)`

13) barem jedna komponenta mora emitirati bar jedan event - Da
    Primjer: src/components/TaskItem.vue :5  — `@change="$emit('toggle', task.id)"`
    Primjer (emit definicija): src/components/TaskForm.vue :15 — `const emit = defineEmits(['add'])`

14) store (Pinia) - Da
    Primjer: src/stores/tasks.js :9  — `export const useTasksStore = defineStore('tasks', { ... })`

15) asinkroni dohvat podataka s backenda - Da (mock)
    Primjer: src/stores/tasks.js :16  — `await new Promise((res) => setTimeout(res, 500))` inside `fetchTasks()`

16) ostvariti asinkrono (lazy) učitavanje nekog dijela aplikacije - Da
    Primjer: src/router/index.js :22  — `component: () => import('../views/TasksView.vue')` (route-level lazy load)

Kako pokrenuti lokalno:
1) `npm install`
2) `npm run dev`
3) Otvoriti http://localhost:5173/ ili http://localhost:5173/tasks

