<template>
  <HeaderApp/>

  <FiltersApp 
      :active-filter="activeFilter"
      @set-filter="setFilter"
   />

  <main class="app-main">
    <ToDoList 
      :todos="filtersTodos"
      @remove-todo="removeTodo"
      @toggle-todo="toggleTodo"
    />
    <ToDoAdd @add-todo="addTodo"/>
  </main>

  <FooterApp :stats="stats"/>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import FiltersApp from './components/FiltersApp.vue';
import HeaderApp from './components/HeaderApp.vue';
import ToDoList from './components/ToDoList.vue';
import ToDoAdd from './components/ToDoAdd.vue';
import FooterApp from './components/FooterApp.vue';
import {ITodo, TActiveFilter, IStats} from "./types/Todo"

interface IState {
   todos: ITodo[]
   activeFilter: TActiveFilter
}

export default defineComponent({
  components: {
    HeaderApp,
    FiltersApp,
    ToDoList,
    ToDoAdd,
    FooterApp
  },
  data():IState {
      return {
         todos: [
            { id: 1, text: 'Learn the basics of Vue', completed: true },
            { id: 2, text: 'Learn the basics of Typescript', completed: false },
            { id: 3, text: 'Subscribe to the channel', completed: false },
         ], 
         activeFilter: "All" as TActiveFilter,
      }
   },
   computed: {
      filtersTodos(): ITodo[]{
         switch(this.activeFilter){
            case"Active":
               return this.activeTodos
            case"Done":
               return this.doneTodos
            default:
               return this.todos
         }
      },
      stats():IStats {
         return {
            active: this.activeTodos.length,
            done: this.doneTodos.length
         }  
      },
      activeTodos(): ITodo[]{
         return this.todos.filter(todo => !todo.completed)
      },
      doneTodos(): ITodo[]{
         return this.todos.filter(todo => todo.completed)
      }
   },
   methods: {
      toggleTodo(id: number){
         this.todos = this.todos.map((todo:ITodo) => {
            if(todo.id === id){
               return {...todo, completed: !todo.completed}
            }
            return todo
         });
      },
      removeTodo(id: number){
         this.todos = this.todos.filter((todo:ITodo) => todo.id !== id);
      },
      addTodo(todo: ITodo){
        this.todos.push(todo)
      },
      setFilter(filter: TActiveFilter){
         this.activeFilter = filter
      }
   }
})

</script>

<style scoped></style>
