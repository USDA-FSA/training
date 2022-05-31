<template>
  <div>
    <baseHeader @emitSearch="submitSearch"></baseHeader>

    <main id="main-content" tabindex="-1">
      <div class="fsa-section">
        <div class="fsa-section__bd">
          <div class="fsa-m-t--l">
            <div class="fsa-level@m fsa-level--justify-between">
              <h1 class="fsa-m--none">Prototype Kit Installation</h1>
            </div>
          </div>
        </div>
      </div>

      <div class="fsa-section">
        <div class="fsa-section__bd">

          <div class="fsa-grid">
            <div class="fsa-grid__1/1 fsa-grid__2/3@m">
                <iframe class="fsa-border--s" width="640" height="390" src="https://www.youtube.com/embed/RGurnlgbuQ4?rel=0&showinfo=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen>
                </iframe>
            </div>

            <div class="fsa-grid__1/1 fsa-grid__1/3@m">
              <div>
                <h3>Actions:</h3>
                <button class="fsa-btn fsa-btn--secondary" role="button">Download Transcript</button>
              </div>
            </div>
          </div>


        </div>
      </div>

      <div class="fsa-section">
        <div class="fsa-section__bd">

          <h2>Video Description</h2>
          <div class="fsa-grid">
            <div class="fsa-grid__1/1 fsa-grid__2/3@M">
              <p>This video is about...</p>
              <h4>Related Videos:</h4>
              <ul>
                <li>Video One Name</li>
                <li>Video Two Name</li>
                <li>Video Three Name</li>
                <li>Video Four Name</li>
              </ul>
            </div>

            <div class="fsa-grid__1/1 fsa-grid__1/3@M">
              <div></div>
            </div>
          </div>


        </div>
      </div>
    </main>

    <baseFooter></baseFooter>
  </div>
</template>

<script>
import { ref, defineAsyncComponent, onMounted } from "vue";
import { useStore } from "vuex";
import { useNavigation } from "@/_composables/useNavigation";

import { v4 as uuidv4 } from "uuid";

import baseHeader from "@/_partials/BaseHeader.vue";
import baseFooter from "@/_partials/BaseFooter.vue";

export default {
  components: {
    baseHeader,
    baseFooter
  },

  setup(props) {
    const store = useStore();
    const { goto } = useNavigation();

    onMounted(() => {});

    return {
      goto
    };
  }
};
</script>