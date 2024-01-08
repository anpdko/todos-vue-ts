<template>
  <aside class="app-filters">
    <section class="toggle-group">

      <button 
        v-for="filter in filters"
        class="button" 
        :key="filter"
        @click="setFilter(filter)"
        :class="{'button--primary': activeFilter === filter}"
      >{{ filter }}</button>
    </section>
  </aside>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import { TActiveFilter } from "../types/Todo"

interface IState {
  filters: TActiveFilter[]
}

export default defineComponent({
   props: {
    activeFilter: {
      type: String as PropType<TActiveFilter>
    }
   },
   data():IState {
    return {
      filters: ['All', 'Active', 'Done']
    }
   },
   methods: {
    setFilter(filter: TActiveFilter){
      this.$emit("setFilter", filter)
    }
   },
   emits:{
    setFilter: (filter: TActiveFilter) => filter
   }
})
</script>

<style scoped>

</style>