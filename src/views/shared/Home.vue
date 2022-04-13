<template>
  <div>

    <baseHeader @emitSearch="submitSearch"></baseHeader>

    <main id="main-content" tabindex="-1">

      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m--none">Most Resent</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="fsa-section">
        <div class="fsa-section__bd">
          

        
        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from 'vue';
import { useStore } from 'vuex';
import { useNavigation } from '@/composables/useNavigation';

import { v4 as uuidv4 } from 'uuid';


import baseHeader from '@/partials/BaseHeader.vue';
import baseFooter from '@/partials/BaseFooter.vue';

 
export default {
  components: {
    baseHeader,
    baseFooter
  },

  setup(props){
    const store = useStore();
    const { goto } = useNavigation();



    onMounted(()=>{

    });

    return {
      goto
    }
  }

}
</script>