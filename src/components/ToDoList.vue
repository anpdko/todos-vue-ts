<template>
   <ul class="todo-list">
      <ToDoItem 
         v-for="todo in todos" 
         :key="todo.id" 
         :todo="todo"
         @toggleTodo="toggleTodo"
         @removeTodo="removeTodo"
      />
   </ul>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import ToDoItem from './ToDoItem.vue';
import {ITodo} from "../types/Todo"

export default defineComponent({
   components: {
      ToDoItem
   },
   props: {
      todos: {
         type: Object as PropType<ITodo[]>,
         required: true
      }
   },
   methods: {
      toggleTodo(id: number){
         this.$emit('toggleTodo', id)
      },
      removeTodo(id : number){
         this.$emit('removeTodo', id)
      }
   },
   emits: {
      toggleTodo: (id: number) => Number.isInteger(id),
      removeTodo: (id: number) => Number.isInteger(id),
   }
})
</script>

<style scoped></style>