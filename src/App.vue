<template>
  <div>
    <div class="fsa-whiteout" tabindex="-1" id="fsa-whiteout" aria-hidden="true"></div>
    <alert-system></alert-system>
    <router-view v-slot="{ Component }">
      <!-- <keep-alive>
        <component :is="Component" :key="$route.fullPath"></component>
      </keep-alive> -->
      <component :is="Component"></component>
    </router-view>
  </div>
</template>

<script>
import { useRoute } from 'vue-router';
import { watch } from 'vue'
import AlertSystem from "@/partials/AlertSystem.vue";
export default {
  name: "app",
  components: {
    AlertSystem
  },
  setup(){
    const route = useRoute();
    watch( () => route.params, (toParams, fromParams) => {
        // react to route changes...
    });    
  }
};

</script>
<style lang="scss">
@import '@/style/fsa-popover.scss'
</style>