<template>
   <section class="add-todo">
      <form 
         v-if="isFormVisible" 
         class="add-todo__form"
         @submit.prevent="addTodo"
      >
         <button class="close-button" type="button" @click="toggleForm">
            <i class="bi bi-x"></i>
         </button>
         <div class="text-input text-input--focus">
            <input v-model="todoText" class="input" />
         </div>
         <button class="button button--filled">Add task</button>
      </form>
      <button 
         v-else 
         class="add-todo__show-form-button"
         @click="toggleForm"
      >
         <i class="bi bi-plus-lg"></i>
      </button>
   </section>
</template>


<script lang="ts">
import { defineComponent } from 'vue'
import {ITodo} from '../types/Todo'

interface IState {
   isFormVisible: boolean,
   todoText: string,
}

export default defineComponent({
   data():IState {
      return {
         isFormVisible: false,
         todoText: ""
      }
   },
   methods: {
      toggleForm() {
         this.isFormVisible = !this.isFormVisible
      },
      addTodo(){
         this.$emit('addTodo', {
            id: Date.now(),
            text: this.todoText,
            completed: false
         })
         this.todoText = ""
      }
   },
   emits: {
      addTodo: (todo: ITodo) => todo
   }
})
</script>

<style scoped></style>