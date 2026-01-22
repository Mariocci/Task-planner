import { defineStore } from 'pinia'

let nextId = 4

const mockTasks = [
  { id: 1, title: 'Buy groceries', completed: false, description: 'Milk, bread, eggs' }
]

export const useTasksStore = defineStore('tasks', {
  state: () => ({
    tasks: [],
    loaded: false,
  }),
  actions: {
    /*methods*/
    async fetchTasks() {
      if (this.loaded) return this.tasks
      await new Promise((res) => setTimeout(res, 500))
      this.tasks = mockTasks.map((t) => ({ ...t }))
      this.loaded = true
      return this.tasks
    },
    async addTask(title, description = '') {
      await new Promise((res) => setTimeout(res, 200))
      const task = { id: nextId++, title: title.trim(), completed: false, description }
      this.tasks.push(task)
      return task
    },
    async toggleComplete(id) {
      await new Promise((res) => setTimeout(res, 100))
      const t = this.tasks.find((x) => x.id === id)
      if (t) t.completed = !t.completed
      return t
    },
    async deleteTask(id) {
      await new Promise((res) => setTimeout(res, 100))
      this.tasks = this.tasks.filter((t) => t.id !== id)
    },
    getTaskById(id) {
      return this.tasks.find((t) => t.id === Number(id))
    },
  },
})
