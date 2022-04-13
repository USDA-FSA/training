<template>
    <h1>?? {{ header }}</h1>

    <p>
      <a href="https://vitejs.dev/guide/features.html" target="_blank">Vite Documentation</a> |
      <a href="https://v3.vuejs.org/" target="_blank">Vue 3 Documentation</a>
    </p>

    <p class="cdh">Testing Paragraph Text</p>

    <button class="fsa-btn fsa-btn--primary" @click="incrementCount()">count is: {{ count }}</button> <button class="fsa-btn fsa-btn--tertiary" @click="decrementCount()">count is: {{ count }}</button>
    <p>Edit<code>components/HelloWorld.vue</code> to test hot module replacement.</p>

    <div>
      <button class="fsa-btn fsa-btn--secondary" data-behavior="open-modal" aria-controls="MODAL-ID-123" aria-expanded="false" type="button">Eject</button>
    </div>

    <div class="fsa-spinbox">
      <div class="fsa-spinbox__number">
        <input class="fsa-input fsa-spinbox__input" id="lorem-ipsum-amount__hsus" name="lorem-ipsum-amount" type="number" step=".01" value="10">
      </div>
      <div class="fsa-spinbox__actions" aria-hidden="true">
        <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--increment" type="button" data-behavior="spinbox-spin" title="Increase"></button>
        <button tabindex="-1" class="fsa-spinbox__btn fsa-spinbox__btn--decrement" type="button" data-behavior="spinbox-spin" title="Decrease"></button>
      </div>
    </div>

    <div class="fsa-level">
      <span>
        <input @change="sliderChange()" class="fsa-slider fsa-slider--block" id="theSlider" name="lorem-range-4672" type="range" min="0" max="100" :value="slider" step="10">
      </span>
      <span><output aria-live="polite" id="lorem-range-ouput-6789" name="lorem-range-ouput-6789" for="lorem-range-4672">{{slider}}</output></span>
    </div>

    <modal ID="MODAL-ID-123"/>

</template>

<script>
import { inject, onMounted, ref, computed } from 'vue';
import modal from '@/components/Modal.vue';

export default {
  setup(props){
    const fsaModal = inject('fsaModal');
    let count = ref(0);
    let slider = ref(0);
    function incrementCount(){
      count.value++;
    };
    function decrementCount(){
      count.value--;
    };
    function sliderChange(){
      slider.value = document.getElementById('theSlider').value;
    };
    onMounted(() => {
      fsaModal.init();
    });
    return {
      count,
      slider,
      incrementCount: incrementCount,
      decrementCount: decrementCount,
      sliderChange: sliderChange
    }
  },
  components: {
    modal: modal
  },
  props: {
    header: String
  }

}


</script>

<style lang="scss">
$cdh-color: $color-fsa-yellow;

.cdh {
  color: $cdh-color;
}
</style>