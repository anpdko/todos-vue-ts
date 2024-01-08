<template>
   <footer class="app-footer">
      {{ stats.active }} more to do, {{ stats.done }} done
   </footer>
</template>

<script lang="ts">
import { PropType, defineComponent } from 'vue'
import {IStats} from "../types/Todo"

export default defineComponent({
   props: {
      stats: {
         type: Object as PropType<IStats>,
         required: true,
      }
   }
})
</script>

<style scoped>

</style>