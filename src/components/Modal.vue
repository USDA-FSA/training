<template>
  <div tabindex="0" :id="ID" class="fsa-modal" role="dialog" aria-hidden="true">
    <div class="fsa-modal__dialog">
      <div class="fsa-modal__content">
        <button class="fsa-modal__close" data-behavior="close-modal" title="Close Modal" aria-label="Close Modal" type="button"></button>
        <h1 class="fsa-modal__title">[default title]</h1>
        <p>Eos reiciendis expedita esse, maiores nesciunt ratione dolore libero porro quas. Rerum atque fugiat esse, tenetur debitis reiciendis commodi et ut nulla?</p>
        <ul>
          <li><a href="">Fake Link</a></li>
          <li><a href="">Fake Link</a></li>
        </ul>
        <p>Odio aspernatur quo voluptatum dolorem obcaecati? Ipsum aliquid quae perspiciatis repudiandae nam magnam commodi cumque omnis!</p>
      </div>
    </div>
  </div>
</template>
<script setup>
import { defineProps, reactive } from 'vue';

defineProps({
  ID: String
})

</script>